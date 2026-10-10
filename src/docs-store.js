// Loads the scraped FeexPay docs and answers list / get / search queries.
//
// Source order:
//   1. Remote: the latest snapshot on GitHub (refreshed daily by the sync-docs workflow),
//      so users get fresh docs without updating the package.
//   2. Local: the snapshot bundled with the package (offline fallback).

import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const DEFAULT_REMOTE_BASE = 'https://raw.githubusercontent.com/misterkante/feexpay-docs-mcp/main/docs';
export const LANGS = ['en', 'fr'];
const LOCAL_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs');
const SECTION_ID = /^[a-z0-9-]+$/;

const normalize = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

const tokenize = (s) => normalize(s).split(/[^a-z0-9_/.-]+/).filter((t) => t.length > 1);

function stripFrontmatter(md) {
  return md.replace(/^---\n[\s\S]*?\n---\n+/, '');
}

export class DocsStore {
  /**
   * @param {object} [opts]
   * @param {string|null} [opts.remoteBase] base URL of the remote snapshot, null to stay offline
   * @param {string} [opts.localDir] directory of the bundled snapshot
   * @param {number} [opts.ttlMs] how long remote content is cached
   * @param {number} [opts.timeoutMs] remote fetch timeout
   * @param {typeof fetch} [opts.fetchImpl]
   */
  constructor(opts = {}) {
    this.remoteBase = opts.remoteBase === undefined ? DEFAULT_REMOTE_BASE : opts.remoteBase;
    this.localDir = opts.localDir || LOCAL_DIR;
    this.ttlMs = opts.ttlMs ?? 6 * 60 * 60 * 1000;
    this.timeoutMs = opts.timeoutMs ?? 5000;
    this.fetchImpl = opts.fetchImpl || globalThis.fetch;
    this.manifest = null;
    this.manifestAt = 0;
    this.origin = null; // 'remote' | 'local'
    this.pages = new Map();
  }

  async #fetchText(path) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), this.timeoutMs);
    try {
      const res = await this.fetchImpl(`${this.remoteBase}/${path}`, { signal: ctrl.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } finally {
      clearTimeout(timer);
    }
  }

  async #read(path) {
    if (this.origin === 'remote') {
      try {
        return await this.#fetchText(path);
      } catch {
        // fall through to the bundled copy
      }
    }
    return readFile(join(this.localDir, path), 'utf8');
  }

  async getManifest() {
    if (this.manifest && Date.now() - this.manifestAt < this.ttlMs) return this.manifest;
    let manifest = null;
    if (this.remoteBase) {
      try {
        manifest = JSON.parse(await this.#fetchText('manifest.json'));
        if (!Array.isArray(manifest.sections) || !manifest.sections.length) throw new Error('empty manifest');
        if (this.origin !== 'remote' || manifest.generated_at !== this.manifest?.generated_at) this.pages.clear();
        this.origin = 'remote';
      } catch {
        manifest = null;
      }
    }
    if (!manifest) {
      if (this.origin !== 'local') this.pages.clear();
      manifest = JSON.parse(await readFile(join(this.localDir, 'manifest.json'), 'utf8'));
      this.origin = 'local';
    }
    this.manifest = manifest;
    this.manifestAt = Date.now();
    return manifest;
  }

  async listSections(lang) {
    const m = await this.getManifest();
    return m.sections
      .filter((s) => s.lang === lang)
      .map(({ id, title, group, source, updated_at }) => ({ id, title, group, source, updated_at }));
  }

  async getSection(id, lang) {
    if (!SECTION_ID.test(id)) throw new Error(`Invalid section id: ${id}`);
    const meta = (await this.listSections(lang)).find((s) => s.id === id);
    if (!meta) return null;
    const key = `${lang}/${id}`;
    if (!this.pages.has(key)) {
      const md = stripFrontmatter(await this.#read(`${lang}/${id}.md`));
      this.pages.set(key, md);
    }
    return { ...meta, markdown: this.pages.get(key) };
  }

  async getAll(lang, group) {
    const sections = (await this.listSections(lang)).filter((s) => !group || s.group === group);
    return Promise.all(sections.map((s) => this.getSection(s.id, lang)));
  }

  /**
   * Keyword search over heading-delimited chunks. Accent and case insensitive.
   * @returns {Promise<Array<{id:string,title:string,heading:string,source:string,score:number,snippet:string}>>}
   */
  async search(query, lang, limit = 5) {
    const terms = [...new Set(tokenize(query))];
    if (!terms.length) return [];
    const pages = await this.getAll(lang);
    const hits = [];
    for (const page of pages) {
      for (const chunk of chunkByHeading(page.markdown)) {
        const body = normalize(chunk.text);
        const head = normalize(`${page.title} ${chunk.heading}`);
        let score = 0;
        let matched = 0;
        for (const t of terms) {
          const n = body.split(t).length - 1;
          if (n) matched++;
          score += Math.min(n, 5) + (head.includes(t) ? 4 : 0);
        }
        if (!matched) continue;
        score *= matched / terms.length; // favour chunks containing all terms
        hits.push({
          id: page.id,
          title: page.title,
          heading: chunk.heading,
          source: page.source,
          score: Math.round(score * 100) / 100,
          snippet: chunk.text.length > 1500 ? `${chunk.text.slice(0, 1500)}\n…` : chunk.text,
        });
      }
    }
    return hits.sort((a, b) => b.score - a.score).slice(0, limit);
  }
}

export function chunkByHeading(md) {
  const chunks = [];
  let current = { heading: '', lines: [] };
  let inFence = false;
  let tab = ''; // "## Tab: Togo" context, kept on the chunks that follow it
  for (const line of md.split('\n')) {
    if (line.startsWith('```')) inFence = !inFence;
    const h = !inFence && line.match(/^(#{1,4})\s+(.*)/);
    let heading = h ? h[2].trim() : '';
    if (h && h[1].length <= 2) tab = heading.startsWith('Tab: ') ? heading.slice(5) : '';
    else if (h && tab) heading = `${tab} › ${heading}`;
    const substantive = current.lines.some((l) => l.trim() && !/^#|^\[[^\]]*\]$/.test(l.trim()));
    if (h && substantive) {
      chunks.push(current);
      current = { heading, lines: [line] };
    } else {
      if (h) current.heading = heading;
      current.lines.push(line);
    }
  }
  chunks.push(current);
  return chunks.map((c) => ({ heading: c.heading, text: c.lines.join('\n').trim() })).filter((c) => c.text);
}
