// End-to-end: spawns the real server over stdio (offline, bundled snapshot) and calls each tool.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const SERVER = new URL('../src/server.js', import.meta.url).pathname;

async function connect() {
  const client = new Client({ name: 'test', version: '0.0.0' });
  await client.connect(
    new StdioClientTransport({ command: process.execPath, args: [SERVER], env: { ...process.env, FEEXPAY_DOCS_OFFLINE: '1' } }),
  );
  return client;
}

const textOf = (res) => res.content.map((c) => c.text).join('\n');

test('server exposes the four tools and answers from the bundled snapshot', async (t) => {
  const client = await connect();
  t.after(() => client.close());

  const { tools } = await client.listTools();
  assert.deepEqual(tools.map((x) => x.name).sort(), ['get_all_docs', 'get_section', 'list_sections', 'search_docs']);

  const list = JSON.parse(textOf(await client.callTool({ name: 'list_sections', arguments: { lang: 'en' } })));
  assert.equal(list.origin, 'local');
  const ids = list.sections.map((s) => s.id);
  for (const id of ['api-rest-integrations', 'services-payout', 'webhook', 'react-sdk']) assert.ok(ids.includes(id), id);

  const payout = textOf(await client.callTool({ name: 'get_section', arguments: { id: 'services-payout', lang: 'fr' } }));
  assert.match(payout, /api-v2\.feexpay\.me\/api\/payouts\/public/);
  assert.match(payout, /Tab: Togo/);

  const unknown = await client.callTool({ name: 'get_section', arguments: { id: 'nope' } });
  assert.equal(unknown.isError, true);

  const search = textOf(await client.callTool({ name: 'search_docs', arguments: { query: 'webhook', limit: 3 } }));
  assert.match(search, /section: /);

  const { resources } = await client.listResources();
  assert.ok(resources.some((r) => r.uri === 'feexpay-docs://en/webhook'));
});
