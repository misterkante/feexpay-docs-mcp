import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseSidebar } from '../scraper/sidebar.js';

// Shape of the sidebar literal found in the docs.feexpay.me bundle (minified).
const BUNDLE = `var x=1;const th=[{id:"introduction",label:"sidebar.groups.introduction",icon:"Book",children:[{id:"overview",label:"sidebar.items.overview",icon:"Eye"},{id:"key-concepts",label:"sidebar.items.keyConcepts",icon:"Key"}]},{id:"api-rest-group",label:"sidebar.groups.api",icon:"Code",children:[{id:"services-payout",label:"sidebar.items.apiPayout",icon:"ArrowUpRight"}]},{id:"tools",label:"Outils",icon:"Wrench",children:[{id:"postman",label:"Postman [beta]",icon:"Send"}]},{id:"services",label:"Services",icon:"Layers",children:[{id:"services-payout-method",label:"Feex Methode",icon:"Banknote"}]},{id:"webhook",label:"sidebar.items.webhook",icon:"Bell"},{id:"security",label:"sidebar.items.security",icon:"Shield"}];const other=[{id:"not-a-page",label:"x",icon:"y"}];`;

test('parseSidebar reads groups, nested groups and top-level pages', () => {
  assert.deepEqual(parseSidebar(BUNDLE), [
    { id: 'overview', group: 'introduction' },
    { id: 'key-concepts', group: 'introduction' },
    { id: 'services-payout', group: 'api' },
    { id: 'postman', group: 'tools' },
    { id: 'services-payout-method', group: 'services' },
    { id: 'webhook', group: 'general' },
    { id: 'security', group: 'general' },
  ]);
});

test('parseSidebar fails loudly when the bundle format changes', () => {
  assert.throws(() => parseSidebar('const a=[{id:"x"}]'), /Sidebar not found/);
});
