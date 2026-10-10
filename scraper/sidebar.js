// Reads the docs sidebar (section ids and groups) from the site's JS bundle, as plain text.

// The sidebar is a nested array literal in the bundle:
//   [{id:"introduction",label:"sidebar.groups.introduction",icon:"…",children:[{id:"overview",label:"…",icon:"…"}, …]}, …]
// Top-level entries with children are groups; every leaf below them (at any depth) is a page.
// Top-level leaves are pages of the 'general' group.
export function parseSidebar(js) {
  const first = js.search(/\{id:"[a-z0-9-]+",label:"sidebar\.groups\./);
  if (first < 0) throw new Error('Sidebar not found in bundle, format changed?');
  const start = js.lastIndexOf('[', first);
  let depth = 0;
  let end = start;
  for (let i = start, quote = null; i < js.length; i++) {
    const c = js[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = null;
    } else if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '[') depth++;
    else if (c === ']' && --depth === 0) {
      end = i;
      break;
    }
  }
  const src = js.slice(start, end + 1);

  const depthAt = [];
  for (let i = 0, d = 0, quote = null; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = null;
    } else if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '[') d++;
    else if (c === ']') d--;
    depthAt[i] = d;
  }

  const sections = [];
  let group = null;
  for (const m of src.matchAll(/\{id:"([a-z0-9-]+)",label:"([^"]+)",icon:"[^"]*"(,children:\[)?/g)) {
    const [, id, label, hasChildren] = m;
    if (depthAt[m.index] === 1 && !hasChildren) {
      if (!sections.some((s) => s.id === id)) sections.push({ id, group: 'general' }); // top-level page (webhook, security…)
      group = null;
    } else if (depthAt[m.index] === 1) {
      group = label.match(/^sidebar\.groups\.(\w+)$/)?.[1] || id;
    } else if (!hasChildren && group && !sections.some((s) => s.id === id)) {
      sections.push({ id, group });
    }
  }
  return sections;
}
