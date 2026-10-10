# FeexPay Docs MCP

[![CI](https://github.com/misterkante/feexpay-docs-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/misterkante/feexpay-docs-mcp/actions/workflows/ci.yml)
[![Sync FeexPay docs](https://github.com/misterkante/feexpay-docs-mcp/actions/workflows/sync-docs.yml/badge.svg)](https://github.com/misterkante/feexpay-docs-mcp/actions/workflows/sync-docs.yml)
[![Licence : MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](LICENSE)

[English](README.md) · **Français**

Un serveur [MCP](https://modelcontextprotocol.io) qui donne aux assistants de code IA (Claude Code, Claude Desktop, Cursor, VS Code Copilot, Windsurf…) **un accès complet et à jour à la documentation développeur de [FeexPay](https://feexpay.me)**. Ils peuvent ainsi intégrer les paiements FeexPay sans deviner.

> **Projet non officiel**, sans lien avec FeexPay ni validé par FeexPay. Le contenu de la documentation appartient à FeexPay ; l'original est sur [docs.feexpay.me](https://docs.feexpay.me).

## Pourquoi

FeexPay est un agrégateur de paiement pour l'Afrique de l'Ouest et du Centre (Bénin, Côte d'Ivoire, Togo, Sénégal, Congo, Burkina Faso). Il gère l'encaissement par Mobile Money et par carte, les payouts vers des portefeuilles Mobile Money, des SDK et des webhooks.

Sa documentation est difficile à lire pour une IA :

- **C'est une application JavaScript.** Une simple requête HTTP, ce qu'utilisent la plupart des assistants, renvoie une page vide qui affiche seulement « Documentation ».
- **L'essentiel de la référence API est caché derrière des onglets.** Les pages Payin et Payout n'affichent qu'un pays et un réseau à la fois. Même un scraper qui utilise un navigateur rate donc la plupart des endpoints s'il ne lit que la page visible.

Ce serveur affiche chaque page dans un navigateur, clique sur tous les onglets pays et réseau, et convertit tout en Markdown propre (tableaux et blocs de code compris), **en français et en anglais**. Il sert ensuite ce contenu à ton assistant.

## Fonctionnalités

- **Complet** : toutes les sections de l'API v2, avec chaque variante pays/réseau (URL de l'endpoint, méthode, corps de la requête, en-têtes, exemple de code, réponse).
- **À jour** : une GitHub Action re-scrape la doc chaque jour et commit les changements. Le serveur lit ce snapshot sur GitHub au moment de l'exécution : tu as les mises à jour **sans mettre à jour le paquet**.
- **Hors ligne** : si GitHub est injoignable, le serveur utilise le snapshot embarqué dans le paquet.
- **Léger et sûr** : deux dépendances à l'exécution. Pas de navigateur, pas de clé API, pas d'identifiants FeexPay. Il ne fait que lire la documentation : il ne peut ni effectuer de paiement, ni appeler l'API FeexPay.

## Couverture

Les 40 sections de la documentation (API v2), en français et en anglais :

| Groupe | Sections |
|---|---|
| `introduction` | présentation, avantages, concepts clés |
| `gettingStarted` | création de compte, validation du compte (KYC/KYB), moyens de paiement |
| `api` | Payin (Mobile Money par pays et réseau), statut payin, payout (par pays et réseau), statut payout, encaissement par carte, historique des transactions, ORM utils, codes d'erreur, sandbox |
| `sdks` | JavaScript, React, PHP, Flutter & Android, WordPress |
| `dashboard` | le dashboard marchand : boutiques, transactions, reversements, API payout, export, FeexLinks, liens rapides, FeexPage, listes, notifications, cartes & KYC, développeurs (clés API), liste d'IP autorisées, équipe, configuration |
| `tools`, `services`, `general` | collection Postman, Feex Methode, webhooks, bonnes pratiques de sécurité |

## Installation

Il faut **Node.js 18+** et **git**. Les commandes ci-dessous lancent le serveur directement depuis GitHub.

### Claude Code

```bash
claude mcp add feexpay-docs -- npx -y github:misterkante/feexpay-docs-mcp
```

### Claude Desktop, Cursor, Windsurf

Ajoute ce bloc à ton fichier de configuration MCP. C'est `claude_desktop_config.json` pour Claude Desktop, `~/.cursor/mcp.json` ou `.cursor/mcp.json` pour Cursor, et `~/.codeium/windsurf/mcp_config.json` pour Windsurf :

```json
{
  "mcpServers": {
    "feexpay-docs": {
      "command": "npx",
      "args": ["-y", "github:misterkante/feexpay-docs-mcp"],
      "env": { "FEEXPAY_DOCS_LANG": "fr" }
    }
  }
}
```

### VS Code (GitHub Copilot)

Mets ceci dans `.vscode/mcp.json` :

```json
{
  "servers": {
    "feexpay-docs": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "github:misterkante/feexpay-docs-mcp"],
      "env": { "FEEXPAY_DOCS_LANG": "fr" }
    }
  }
}
```

### Depuis un clone local

```bash
git clone https://github.com/misterkante/feexpay-docs-mcp.git
cd feexpay-docs-mcp && npm ci --omit=dev
# puis configure ton client avec : node /chemin/absolu/feexpay-docs-mcp/src/server.js
```

## Outils

| Outil | Rôle |
|---|---|
| `search_docs` | Recherche par mots-clés dans toute la doc, sans tenir compte des accents ni de la casse (`"payout togo"`, `"webhook"`, `"ERR_IP_NOT_AUTHORIZED"`). Renvoie les passages qui correspondent, avec l'id de la section et l'URL source. |
| `list_sections` | Liste toutes les sections : id, titre, groupe, URL source, date du dernier changement. |
| `get_section` | Le Markdown complet d'une section, avec tous les onglets pays/réseau. |
| `get_all_docs` | Toutes les sections, ou un seul groupe (`api`, `sdks`, …), en un seul document. C'est volumineux : à réserver aux cas où il faut la vue d'ensemble. |

Chaque section est aussi disponible comme ressource MCP : `feexpay-docs://{lang}/{id}`, par exemple `feexpay-docs://fr/services-payout`.

Tous les outils acceptent `lang` : `"en"` (par défaut) ou `"fr"`. Pour que le français soit la langue par défaut, définis `FEEXPAY_DOCS_LANG=fr`.

### Exemples de demandes

- *« Avec la doc FeexPay, ajoute le paiement Mobile Money (MTN et Moov Bénin) à mon backend NestJS et vérifie le statut jusqu'à ce qu'il soit définitif. »*
- *« Vers quels réseaux peut-on faire des payouts en Côte d'Ivoire, et quel corps de requête attend chaque endpoint ? »*
- *« Intègre le SDK React FeexPay dans ma page de paiement et gère le callback. »*
- *« Que signifie l'erreur FeexPay `ERR_IP_NOT_AUTHORIZED` ? »*

## Configuration

| Variable | Défaut | Effet |
|---|---|---|
| `FEEXPAY_DOCS_LANG` | `en` | Langue utilisée quand l'assistant ne précise pas `lang` (`en` ou `fr`). |
| `FEEXPAY_DOCS_OFFLINE` | non défini | Mets `1` pour n'utiliser que le snapshot embarqué, sans jamais contacter GitHub. |
| `FEEXPAY_DOCS_BASE_URL` | GitHub raw `main/docs` | URL de base du snapshot, par exemple celle d'un fork ou d'un miroir. |

Le contenu distant est gardé en cache mémoire pendant 6 heures.

## Fonctionnement

```
docs.feexpay.me ──(GitHub Action quotidienne : Playwright + Chromium)──▶ docs/{en,fr}/*.md + manifest.json ──▶ ce repo (main)
                                                                                                                │
ton assistant ◀──── stdio ──── feexpay-docs-mcp (Node) ◀──── raw.githubusercontent.com (sinon : copie embarquée)
```

1. `scraper/scrape.js` récupère la liste des sections dans le bundle JavaScript du site. Il le lit comme du texte et ne l'exécute jamais dans Node.
2. Chaque section est affichée dans un Chromium headless. Le scraper clique sur tous les onglets et convertit chaque variante en Markdown, sous un titre `## Tab: <pays> › <réseau>`.
3. Si un scraping semble cassé (trop de pages en échec, FeexPay indisponible…), il est abandonné et le snapshot précédent est conservé.
4. `docs/manifest.json` garde pour chaque page une empreinte du contenu et la date de son dernier changement. Si rien n'a changé, la tâche quotidienne ne commit rien.

Le snapshot est du Markdown brut : tu peux aussi le lire directement dans [`docs/`](docs).

## Développement

```bash
npm ci
npm test                                     # tests unitaires + test MCP de bout en bout en stdio
npx playwright install chromium              # une fois, ou utilise CHROMIUM_PATH=/usr/bin/chromium
npm run scrape                               # régénère docs/ depuis docs.feexpay.me
npm run scrape -- --langs fr --only services-payout   # essai rapide, résultat laissé dans docs.tmp-*/
```

Les contributions sont bienvenues. Le cas le plus probable : adapter le scraper quand FeexPay modifie son site. Dans ce cas, la tâche quotidienne échoue et le snapshot actuel reste en place.

## Contenu et licence

- Le **code** de ce dépôt est sous [licence MIT](LICENSE).
- Le **contenu de la documentation** dans [`docs/`](docs) est © FeexPay. Il est reproduit sans modification, à part la conversion en Markdown, pour que les développeurs et les outils d'IA puissent le lire, et chaque page renvoie vers sa source. Si tu représentes FeexPay et souhaites qu'il soit modifié ou retiré, [ouvre une issue](https://github.com/misterkante/feexpay-docs-mcp/issues).
- La doc est un contenu tiers, fourni aux assistants IA comme donnée de référence. Vérifie toujours les points critiques (montants, sécurité, clés de production) sur [docs.feexpay.me](https://docs.feexpay.me) et dans ton dashboard FeexPay.
