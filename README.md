# FeexPay Docs MCP

**Ask your AI assistant to integrate FeexPay, and it answers with the real endpoints instead of making them up.**

[![CI](https://github.com/misterkante/feexpay-docs-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/misterkante/feexpay-docs-mcp/actions/workflows/ci.yml)
[![Docs synced](https://img.shields.io/github/last-commit/misterkante/feexpay-docs-mcp/main?path=docs&label=docs%20synced&color=brightgreen)](https://github.com/misterkante/feexpay-docs-mcp/commits/main/docs)
![Sections](https://img.shields.io/badge/sections-40%20%C3%97%20EN%2FFR-blue)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**English** · [Français](README.fr.md)

[![Install in Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=feexpay-docs&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImdpdGh1YjptaXN0ZXJrYW50ZS9mZWV4cGF5LWRvY3MtbWNwIl19)
[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_MCP-0098FF?logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=feexpay-docs&config=%7B%22type%22%3A%22stdio%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22github%3Amisterkante/feexpay-docs-mcp%22%5D%7D)

```bash
claude mcp add feexpay-docs -- npx -y github:misterkante/feexpay-docs-mcp
```

## See it in action

> **You:** *Add MTN Mobile Money payments in Benin to my backend.*

Without this server, your assistant fetches `docs.feexpay.me`, gets an empty JavaScript shell and guesses. With it, it calls `search_docs("payin mtn benin")` and gets this from the latest snapshot:

```markdown
### Sandbox environment › Payin (collection)
section: sandbox | source: https://docs.feexpay.me/?section=sandbox&version=v2

| Channel       | Endpoint (POST)                                    | Phone number format          |
| ------------- | -------------------------------------------------- | ---------------------------- |
| MTN Benin     | `/api/transactions/public/requesttopay/mtn`        | any (e.g. `22997000000`)     |
| Moov Benin    | `/api/transactions/public/requesttopay/moov`       | `22901` + 8 digits           |
| Celtiis Benin | `/api/transactions/public/requesttopay/celtiis_bj` | `22901` + 8 digits           |
| Wave CI       | `/api/transactions/public/requesttopay/wave_ci`    | starts with `225`            |
…
```

Then it writes the integration from that, with the right path, the right body and the right phone format, and cites its source.

> **Unofficial project.** It is not affiliated with or endorsed by FeexPay. The documentation content belongs to FeexPay; the original is at [docs.feexpay.me](https://docs.feexpay.me).

## Why

FeexPay is a payment aggregator for West and Central Africa (Benin, Côte d'Ivoire, Togo, Senegal, Congo, Burkina Faso): Mobile Money and card collection, payouts to Mobile Money wallets, SDKs and webhooks.

Its documentation is hard for AI tools to read:

- **It is a JavaScript app.** A plain HTTP fetch (what most assistants use) gets an empty page that just says "Documentation".
- **Most of the API reference is hidden behind tabs.** The Payin and Payout pages show one country and one network at a time, so even a browser-based scraper that only reads the visible page misses most endpoints.

This server renders every page, clicks through every country and network tab, converts everything to clean Markdown (tables and code blocks included) in **English and French**, and serves it to your assistant.

## Features

- **Complete.** All sections of API v2, with each country/network variant (endpoint URL, method, request body, headers, code example, response).
- **Fresh.** A GitHub Action re-scrapes the docs every day and commits the changes. The server reads that snapshot from GitHub at runtime, so you get updates **without upgrading the package**.
- **Works offline.** If GitHub is unreachable, the server falls back to the snapshot bundled with it.
- **Light and safe.** Two runtime dependencies. No browser, no API key, no FeexPay credentials. It only reads documentation: it cannot make payments or call the FeexPay API.

## Coverage

All 40 sections of the documentation (API v2), in English and French:

| Group | Sections |
|---|---|
| `introduction` | overview, benefits, key concepts |
| `gettingStarted` | account creation, account validation (KYC/KYB), payment methods |
| `api` | Payin (Mobile Money per country/network), payin status, payout (per country/network), payout status, card collection, transaction history, ORM utils, error codes, sandbox |
| `sdks` | JavaScript, React, PHP, Flutter & Android, WordPress |
| `dashboard` | the merchant dashboard: shops, transactions, payouts, payout API, export, FeexLinks, quick links, FeexPage, lists, notifications, cards & KYC, developers (API keys), IP whitelist, team, configuration |
| `tools`, `services`, `general` | Postman collection, Feex Methode, webhooks, security best practices |

## Installation

You need **Node.js 18+** and **git**. The commands below run the server straight from GitHub.

### Claude Code

```bash
claude mcp add feexpay-docs -- npx -y github:misterkante/feexpay-docs-mcp
```

### Claude Desktop, Cursor, Windsurf

Add this to your MCP config file. That is `claude_desktop_config.json` for Claude Desktop, `~/.cursor/mcp.json` or `.cursor/mcp.json` for Cursor, and `~/.codeium/windsurf/mcp_config.json` for Windsurf:

```json
{
  "mcpServers": {
    "feexpay-docs": {
      "command": "npx",
      "args": ["-y", "github:misterkante/feexpay-docs-mcp"]
    }
  }
}
```

### VS Code (GitHub Copilot)

Put this in `.vscode/mcp.json`:

```json
{
  "servers": {
    "feexpay-docs": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "github:misterkante/feexpay-docs-mcp"]
    }
  }
}
```

### From a local clone

```bash
git clone https://github.com/misterkante/feexpay-docs-mcp.git
cd feexpay-docs-mcp && npm ci --omit=dev
# then point your client at: node /absolute/path/to/feexpay-docs-mcp/src/server.js
```

## Tools

| Tool | What it does |
|---|---|
| `search_docs` | Keyword search across the whole documentation, accent and case insensitive (`"payout togo"`, `"webhook"`, `"ERR_IP_NOT_AUTHORIZED"`). Returns the matching passages with their section id and source URL. |
| `list_sections` | Lists every section: id, title, group, source URL, last change date. |
| `get_section` | Full Markdown of one section, including every country/network tab. |
| `get_all_docs` | Every section, or one group (`api`, `sdks`, …), as a single document. This is large, so use it only when the whole picture is needed. |

Every section is also exposed as an MCP resource: `feexpay-docs://{lang}/{id}`, for example `feexpay-docs://fr/services-payout`.

All tools accept `lang`: `"en"` (default) or `"fr"`.

### Example prompts

- *"Using the FeexPay docs, add Mobile Money payment (MTN and Moov Benin) to my NestJS backend and poll the status until it is final."*
- *"Which networks can I send payouts to in Côte d'Ivoire, and what body does each endpoint expect?"*
- *"Integrate the FeexPay React SDK in my checkout page and handle the callback."*
- *"What does the FeexPay error `ERR_IP_NOT_AUTHORIZED` mean?"*

## Configuration

Set these as environment variables, for example in the `env` field of your MCP client config:

| Variable | Default | Effect |
|---|---|---|
| `FEEXPAY_DOCS_LANG` | `en` | Default language when the assistant does not pass `lang` (`en` or `fr`). |
| `FEEXPAY_DOCS_OFFLINE` | unset | Set to `1` to only use the bundled snapshot and never contact GitHub. |
| `FEEXPAY_DOCS_BASE_URL` | GitHub raw `main/docs` | Base URL of the snapshot, for example a fork or a mirror. |

Remote content is cached in memory for 6 hours.

## How it works

```
docs.feexpay.me ──(daily GitHub Action: Playwright + Chromium)──▶ docs/{en,fr}/*.md + manifest.json ──▶ this repo (main)
                                                                                                          │
your assistant ◀──── stdio ──── feexpay-docs-mcp (Node) ◀──── raw.githubusercontent.com (fallback: bundled copy)
```

1. `scraper/scrape.js` reads the list of sections from the site's JavaScript bundle. It reads it as text and never runs it in Node.
2. Each section is rendered in a headless Chromium. The scraper clicks every tab and turns each variant into Markdown with its own `## Tab: <country> › <network>` heading.
3. If a scrape looks broken (too many failed pages, FeexPay down…), it is discarded and the previous snapshot is kept.
4. `docs/manifest.json` records a content hash and a last-change date for each page. When nothing changed, the job commits nothing.

The snapshot is plain Markdown. You can also browse it directly in [`docs/`](docs).

## Development

```bash
npm ci
npm test                                     # unit tests and an end-to-end MCP test over stdio
npx playwright install chromium              # once, or use CHROMIUM_PATH=/usr/bin/chromium
npm run scrape                               # rebuild docs/ from docs.feexpay.me
npm run scrape -- --langs fr --only services-payout   # quick run, output left in docs.tmp-*/
```

Contributions are welcome. A likely one: the scraper may need adjusting when FeexPay changes its site. In that case the daily job fails and the current snapshot stays in place.

## Content and license

- The **code** in this repository is under the [MIT license](LICENSE).
- The **documentation content** in [`docs/`](docs) is © FeexPay. It is mirrored, unchanged apart from the conversion to Markdown, so developers and AI tools can read it, and every page links to its source. If you represent FeexPay and want it changed or removed, please [open an issue](https://github.com/misterkante/feexpay-docs-mcp/issues).
- The docs are third-party content served to AI assistants as reference data. Always check critical details (amounts, security, production keys) against [docs.feexpay.me](https://docs.feexpay.me) and your FeexPay dashboard.
