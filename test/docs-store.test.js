import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { DocsStore, chunkByHeading } from '../src/docs-store.js';

const PAYOUT = `---
id: services-payout
lang: en
---

# API - Payout

Intro text about payouts.

#### A) Global Payout Benin (MTN/Moov)

##### URL

\`https://api-v2.feexpay.me/api/payouts/public/transfer/global\`

---

## Tab: Togo

[TOGOCOM / MOOV TG]

#### Global Payout Togo

\`https://api-v2.feexpay.me/api/payouts/public/togo\`

\`\`\`javascript
# not a heading inside a fence
\`\`\`
`;

async function fixture(manifestSections) {
  const dir = await mkdtemp(join(tmpdir(), 'feexpay-docs-'));
  await mkdir(join(dir, 'en'));
  await writeFile(join(dir, 'en', 'services-payout.md'), PAYOUT);
  await writeFile(join(dir, 'en', 'webhook.md'), '---\nid: webhook\n---\n\n# Webhook\n\nConfigure your webhook URL in the dashboard. Paiement réussi.\n');
  await writeFile(
    join(dir, 'manifest.json'),
    JSON.stringify({
      api_version: 'v2',
      generated_at: '2026-01-01T00:00:00.000Z',
      sections: manifestSections ?? [
        { id: 'services-payout', lang: 'en', title: 'API - Payout', group: 'api', source: 'https://docs.feexpay.me/?section=services-payout&version=v2', updated_at: 'x' },
        { id: 'webhook', lang: 'en', title: 'Webhook', group: 'tools', source: 'https://docs.feexpay.me/?section=webhook&version=v2', updated_at: 'x' },
      ],
    }),
  );
  return dir;
}

test('local mode lists, reads and strips frontmatter', async () => {
  const store = new DocsStore({ remoteBase: null, localDir: await fixture() });
  const list = await store.listSections('en');
  assert.deepEqual(list.map((s) => s.id), ['services-payout', 'webhook']);
  const s = await store.getSection('services-payout', 'en');
  assert.ok(s.markdown.startsWith('# API - Payout'));
  assert.equal(store.origin, 'local');
  assert.equal(await store.getSection('missing', 'en'), null);
  assert.deepEqual(await store.listSections('fr'), []);
});

test('rejects section ids that could escape the docs directory', async () => {
  const store = new DocsStore({ remoteBase: null, localDir: await fixture() });
  await assert.rejects(store.getSection('../../etc/passwd', 'en'), /Invalid section id/);
});

test('search ranks the country tab and keeps its context', async () => {
  const store = new DocsStore({ remoteBase: null, localDir: await fixture() });
  const [top] = await store.search('payout togo', 'en');
  assert.equal(top.id, 'services-payout');
  assert.match(top.heading, /Togo/);
  assert.match(top.snippet, /payouts\/public\/togo/);
});

test('search is accent insensitive', async () => {
  const store = new DocsStore({ remoteBase: null, localDir: await fixture() });
  const [top] = await store.search('paiement reussi', 'en');
  assert.equal(top.id, 'webhook');
});

test('remote snapshot is preferred, local copy used when remote is down', async () => {
  const dir = await fixture();
  const remoteManifest = {
    api_version: 'v2',
    generated_at: '2026-02-02T00:00:00.000Z',
    sections: [{ id: 'webhook', lang: 'en', title: 'Webhook', group: 'tools', source: 's', updated_at: 'y' }],
  };
  let up = true;
  const fetchImpl = async (url) => {
    if (!up) throw new Error('offline');
    if (url.endsWith('manifest.json')) return new Response(JSON.stringify(remoteManifest));
    if (url.endsWith('en/webhook.md')) return new Response('---\nid: webhook\n---\n\n# Webhook remote\n');
    return new Response('nope', { status: 404 });
  };
  const store = new DocsStore({ remoteBase: 'https://example.test/docs', localDir: dir, fetchImpl, ttlMs: 0 });
  assert.equal((await store.getSection('webhook', 'en')).markdown.trim(), '# Webhook remote');
  assert.equal(store.origin, 'remote');

  up = false;
  const s = await store.getSection('webhook', 'en');
  assert.equal(store.origin, 'local');
  assert.match(s.markdown, /Configure your webhook URL/);
});

test('chunkByHeading ignores # inside code fences and prefixes tab context', () => {
  const chunks = chunkByHeading(PAYOUT.replace(/^---[\s\S]*?---\n+/, ''));
  assert.ok(chunks.every((c) => !c.heading.startsWith('not a heading')));
  assert.ok(chunks.some((c) => c.heading === 'Togo › Global Payout Togo'));
});
