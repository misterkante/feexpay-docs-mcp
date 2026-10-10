#!/usr/bin/env node
// Scrapes https://docs.feexpay.me (a React SPA) into Markdown files under docs/<lang>/.
//
// - Section ids and sidebar groups are read from the site's JS bundle *as text* (never executed in Node).
// - Each section is rendered in a real headless Chromium (sandboxed), then converted to Markdown.
// - Sections that hide content behind tabs (country -> network, language, ...) are explored by
//   clicking every tab combination, and each variant is appended under its own heading.
// - Output is written to a temporary directory and only swapped in if the scrape looks healthy,
//   so a FeexPay outage never wipes the committed docs.
//
// Usage: node scraper/scrape.js [--out docs] [--langs en,fr] [--only services-payout]
// Env:   CHROMIUM_PATH=/usr/bin/chromium  (optional, otherwise Playwright's bundled Chromium)

import { chromium } from 'playwright';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import { createHash } from 'node:crypto';
import { mkdir, readFile, rm, rename, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseSidebar } from './sidebar.js';

const BASE = 'https://docs.feexpay.me/';
const API_VERSION = 'v2';
const MIN_SECTIONS = 15;
const MAX_STATES_PER_SECTION = 40;
const SKIP_BUTTON = /^(next|previous|suivant|précédent|precedent|copy|copier|copied|copié)$/i;

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith('--') ? [...acc, [a.slice(2), all[i + 1]]] : acc), []),
);
const OUT = resolve(args.out || 'docs');
const LANGS = (args.langs || 'en,fr').split(',');
const ONLY = args.only ? new Set(args.only.split(',')) : null;

const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- 1. Discover sections from the bundle (text parsing only) ----------

async function getText(url) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(120_000) });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      return await res.text();
    } catch (e) {
      if (attempt >= 4) throw e;
      await sleep(10_000 * attempt);
    }
  }
}

async function discoverSections() {
  const html = await getText(BASE);
  const src = html.match(/src="(\/assets\/index-[^"]+\.js)"/)?.[1];
  if (!src) throw new Error('Could not find the docs bundle in index.html');
  const js = await getText(new URL(src, BASE));

  const sections = parseSidebar(js);
  if (sections.length < MIN_SECTIONS) throw new Error(`Only ${sections.length} sections discovered, bundle format changed?`);
  return sections;
}

// ---------- 2. Render + HTML extraction (runs inside Chromium) ----------

function sectionUrl(id) {
  return `${BASE}?section=${id}&version=${API_VERSION}`;
}

async function openSection(page, id) {
  await page.goto(sectionUrl(id), { waitUntil: 'domcontentloaded', timeout: 90_000 });
  await page.waitForSelector('main h1, main h2', { timeout: 30_000 });
  await sleep(800);
}

// Cleaned HTML of <main>: no copy buttons, no prev/next, code blocks tagged with their language.
function extractMainHtml() {
  const main = document.querySelector('main');
  if (!main) return '';
  const clone = main.cloneNode(true);
  clone.querySelectorAll('pre').forEach((pre) => {
    const header = pre.previousElementSibling;
    const lang = header?.querySelector('span')?.textContent?.trim().toLowerCase();
    if (lang) pre.setAttribute('data-lang', lang);
    if (header && header.querySelector('button')) header.remove();
  });
  clone.querySelectorAll('svg, script, style, nav, aside').forEach((n) => n.remove());
  // Absolute URLs so images and links still work outside docs.feexpay.me.
  clone.querySelectorAll('img[src]').forEach((n) => n.setAttribute('src', new URL(n.getAttribute('src'), location.href).href));
  clone.querySelectorAll('a[href]').forEach((n) => n.setAttribute('href', new URL(n.getAttribute('href'), location.href).href));
  clone.querySelectorAll('button').forEach((b) => {
    const t = b.textContent.trim();
    if (!t || /^(copy|copier|copied|copié|next|previous|suivant|précédent)$/i.test(t)) b.remove();
  });
  return clone.innerHTML;
}

function listTabButtons(skipSource) {
  const skip = new RegExp(skipSource, 'i');
  return [...document.querySelectorAll('main button')]
    .map((b) => b.textContent.replace(/\s+/g, ' ').trim())
    .filter((t) => t && t.length <= 40 && !skip.test(t));
}

// ---------- 3. Markdown conversion (Node side, pure string -> string) ----------

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
turndown.use(gfm);
turndown.addRule('fencedWithLang', {
  filter: (node) => node.nodeName === 'PRE',
  replacement: (_c, node) => {
    const lang = node.getAttribute('data-lang') || '';
    const code = node.textContent.replace(/\n+$/, '');
    return `\n\n\`\`\`${lang}\n${code}\n\`\`\`\n\n`;
  },
});
// Buttons that remain are tab labels: render them as plain text.
turndown.addRule('buttonsAsText', {
  filter: 'button',
  replacement: (content) => (content.trim() ? ` [${content.trim()}] ` : ''),
});

function toMarkdown(html) {
  return turndown
    .turndown(html)
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const blocksOf = (md) => md.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);

// ---------- 4. Tab exploration ----------

async function replay(page, id, path) {
  await openSection(page, id);
  for (const label of path) await clickTab(page, label);
}

async function clickTab(page, label) {
  await page
    .locator('main button')
    .filter({ hasText: new RegExp(`^\\s*${escapeRe(label)}\\s*$`) })
    .first()
    .click({ timeout: 10_000 });
  await sleep(400);
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

async function scrapeSection(page, id) {
  await openSection(page, id);
  const title = (await page.locator('main h1, main h2').first().textContent())?.trim() || id;
  const baseMd = toMarkdown(await page.evaluate(extractMainHtml));
  const baseBlocks = blocksOf(baseMd);
  // A variant keeps everything after the prefix it shares with the base page (intro + tab bar),
  // so each variant stays self-contained (URL, method, body, headers, example).
  const restOf = (md) => {
    const b = blocksOf(md);
    let i = 0;
    while (i < b.length && i < baseBlocks.length && b[i] === baseBlocks[i]) i++;
    return { rest: b.slice(i).join('\n\n'), baseRest: baseBlocks.slice(i).join('\n\n') };
  };
  const emitted = new Set();
  const variants = [];
  const skipSource = SKIP_BUTTON.source;

  // BFS over tab paths (depth <= 2). Sibling tabs are clicked in place; the page is only reloaded
  // (and the path replayed) to start a new path or after a button navigated away.
  // Depth 2 only explores the tabs revealed by the depth-1 click (e.g. a country's networks).
  const queue = [{ path: [], only: null }];
  let states = 0;
  while (queue.length && states < MAX_STATES_PER_SECTION) {
    const { path, only } = queue.shift();
    if (path.length) await replay(page, id, path).catch(() => null);
    const buttons = await page.evaluate(listTabButtons, skipSource);
    const targets = only ? buttons.filter((b) => only.includes(b)) : buttons;
    for (const label of targets) {
      if (states++ >= MAX_STATES_PER_SECTION) break;
      const next = [...path, label];
      try {
        await clickTab(page, label);
      } catch {
        await replay(page, id, path).catch(() => null);
        continue;
      }
      if (!new URL(page.url()).search.includes(`section=${id}`)) {
        await replay(page, id, path).catch(() => null); // button navigated away
        continue;
      }
      const md = toMarkdown(await page.evaluate(extractMainHtml));
      const after = await page.evaluate(listTabButtons, skipSource);
      const revealed = after.filter((b) => !buttons.includes(b));
      if (revealed.length && !path.length) queue.push({ path: next, only: revealed });
      const { rest, baseRest } = restOf(md);
      if (!rest || rest === baseRest || emitted.has(rest)) continue;
      emitted.add(rest);
      variants.push({ path: next, md: rest });
    }
  }

  let body = baseMd;
  for (const v of variants) body += `\n\n---\n\n## Tab: ${v.path.join(' › ')}\n\n${v.md}`;
  return { title, body, variants: variants.length };
}

// ---------- 5. Main ----------

async function main() {
  const sections = (await discoverSections()).filter((s) => !ONLY || ONLY.has(s.id));
  console.log(`Discovered ${sections.length} sections`);

  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const tmp = `${OUT}.tmp-${process.pid}`;
  await rm(tmp, { recursive: true, force: true });

  const previous = existsSync(join(OUT, 'manifest.json')) ? JSON.parse(await readFile(join(OUT, 'manifest.json'), 'utf8')) : null;
  const prevById = new Map((previous?.sections || []).map((s) => [`${s.lang}/${s.id}`, s]));
  const now = new Date().toISOString();
  const manifest = { source: BASE, api_version: API_VERSION, generated_at: now, langs: LANGS, sections: [] };
  let failures = 0;

  const scrapeLang = async (lang) => {
    const ctx = await browser.newContext({ locale: lang });
    await ctx.addInitScript(
      ([l, v]) => {
        localStorage.setItem('i18nextLng', l);
        localStorage.setItem('feexpay.apiVersion', v);
      },
      [lang, API_VERSION],
    );
    const page = await ctx.newPage();
    await mkdir(join(tmp, lang), { recursive: true });

    for (const s of sections) {
      try {
        let result;
        for (let attempt = 1; ; attempt++) {
          try {
            result = await scrapeSection(page, s.id);
            if (result.body.length < 100) throw new Error('empty content');
            break;
          } catch (e) {
            if (attempt >= 2) throw e;
            console.error(`${lang} ${s.id} retrying after: ${e.message.split('\n')[0]}`);
          }
        }
        const { title, body, variants } = result;
        const hash = sha(body);
        const prev = prevById.get(`${lang}/${s.id}`);
        const updated_at = prev && prev.hash === hash ? prev.updated_at : now;
        const front = `---\nid: ${s.id}\ntitle: ${JSON.stringify(title)}\ngroup: ${s.group}\nlang: ${lang}\nsource: ${sectionUrl(s.id)}\nupdated_at: ${updated_at}\n---\n\n`;
        await writeFile(join(tmp, lang, `${s.id}.md`), `${front}# ${title}\n\n${body.replace(new RegExp(`^#{1,6}\\s+${escapeRe(title)}\\s*\\n+`), '')}\n`);
        manifest.sections.push({ id: s.id, lang, title, group: s.group, source: sectionUrl(s.id), hash, updated_at, chars: body.length });
        console.log(`${lang} ${s.id.padEnd(24)} ${String(body.length).padStart(6)} chars, ${variants} tab variants`);
      } catch (e) {
        failures++;
        // Keep the previous version of this page rather than dropping it from the snapshot.
        const prev = prevById.get(`${lang}/${s.id}`);
        const prevFile = join(OUT, lang, `${s.id}.md`);
        if (prev && existsSync(prevFile)) {
          await writeFile(join(tmp, lang, `${s.id}.md`), await readFile(prevFile, 'utf8'));
          manifest.sections.push({ ...prev, group: s.group });
          console.error(`${lang} ${s.id} FAILED (${e.message.split('\n')[0]}), kept previous version`);
        } else {
          console.error(`${lang} ${s.id} FAILED: ${e.message.split('\n')[0]}`);
        }
      }
    }
    await ctx.close();
  };
  await Promise.all(LANGS.map(scrapeLang)); // one browser context per language, in parallel
  await browser.close();
  const order = new Map(sections.map((s, i) => [s.id, i]));
  manifest.sections.sort((a, b) => LANGS.indexOf(a.lang) - LANGS.indexOf(b.lang) || order.get(a.id) - order.get(b.id));

  const expected = sections.length * LANGS.length;
  if (!ONLY && (failures > expected * 0.2 || manifest.sections.length < MIN_SECTIONS)) {
    await rm(tmp, { recursive: true, force: true });
    throw new Error(`Scrape unhealthy (${failures}/${expected} failed), keeping existing docs`);
  }

  // Content unchanged -> keep previous generated_at so the daily job produces no diff.
  if (previous && previous.sections.map((s) => s.hash).join() === manifest.sections.map((s) => s.hash).join()) {
    manifest.generated_at = previous.generated_at;
  }
  await writeFile(join(tmp, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);

  if (ONLY) {
    console.log(`--only used: output left in ${tmp}`);
    return;
  }
  await rm(OUT, { recursive: true, force: true });
  await rename(tmp, OUT);
  console.log(`Wrote ${manifest.sections.length} pages to ${OUT} (${failures} failures)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
