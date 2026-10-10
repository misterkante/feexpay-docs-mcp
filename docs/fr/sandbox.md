---
id: sandbox
title: "Environnement sandbox"
group: api
lang: fr
source: https://docs.feexpay.me/?section=sandbox&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# Environnement sandbox

La sandbox est un environnement de test isolé : **aucun opérateur réel n'est contacté et aucun argent ne circule**. Cette isolation est imposée par le code, quelle que soit la configuration.

Le résultat de chaque transaction dépend des **2 derniers chiffres du numéro de téléphone** (voir [Numéros de test](#sandbox-test-numbers)).

Les requêtes, les réponses et les webhooks sont ceux de la production. Seul le champ `env` des webhooks diffère : il vaut `"sandbox"`.

##### URL de l'API

`https://sandbox-api.feexpay.me`

##### Dashboard marchand

`https://sandbox-app.feexpay.me`

## Créer un compte de test

1.  Inscrivez-vous sur le [dashboard sandbox](https://sandbox-app.feexpay.me) avec votre prénom, votre nom, votre e-mail et le nom de votre boutique.
2.  Cliquez sur le lien de confirmation reçu par e-mail. Il est valable **3 heures**.
3.  Choisissez un mot de passe (8 caractères minimum) et acceptez les conditions.

À la confirmation, la sandbox crée automatiquement :

-   le compte marchand ;
-   une **seule boutique**, qui porte le nom donné à l'inscription : en sandbox, un compte ne peut avoir qu'une boutique ;
-   une paire de clés API de test, préfixées `test_key_`.

## Authentification

Une fois connecté au dashboard sandbox, récupérez dans la section des clés API :

-   votre **clé privée** : c'est elle qui sert à appeler l'API ;
-   votre **clé publique** : elle ne sert pas à l'authentification ;
-   l'**identifiant public de votre boutique**, à passer dans le champ `shop` de chaque requête.

Chaque appel porte les en-têtes suivants :

```http
Authorization: Bearer test_key_...
Content-Type: application/json
```

### Erreurs possibles

-   `401 UNAUTHORIZED` — clé absente ou invalide
-   `401 API_KEY_BLOCKED` — clé désactivée

La clé privée peut être régénérée depuis le dashboard.

Ne jamais exposer la clé privée

La clé privée ne doit jamais apparaître dans du code exécuté côté client (navigateur, application mobile…). Appelez l'API depuis votre serveur.

## Canaux disponibles

### Payin (encaissement)

| Canal | Endpoint (POST) | Format du numéro |
| --- | --- | --- |
| MTN Bénin | `/api/transactions/public/requesttopay/mtn` | libre (ex. `22997000000`) |
| Moov Bénin | `/api/transactions/public/requesttopay/moov` | `22901` + 8 chiffres (ex. `2290197000000`) |
| Celtiis Bénin | `/api/transactions/public/requesttopay/celtiis_bj` | `22901` + 8 chiffres |
| MTN Côte d'Ivoire | `/api/transactions/public/requesttopay/mtn_ci` | libre |
| Moov Côte d'Ivoire | `/api/transactions/public/requesttopay/moov_ci` | `2250` + 9 chiffres (ex. `2250701000000`) |
| Wave Côte d'Ivoire | `/api/transactions/public/requesttopay/wave_ci` | commence par `225` |
| Orange Côte d'Ivoire | `/api/transactions/public/requesttopay/orange_ci` | commence par `225` |
| MTN Congo | `/api/transactions/public/requesttopay/mtn_cg` | libre (devise `XAF`) |

### Corps de la requête

| Champ | Requis | Règle |
| --- | --- | --- |
| `amount` | ✅ | entier de 10 à 1 000 000 |
| `phoneNumber` | ✅ | voir le format du canal |
| `shop` | ✅ | identifiant public de la boutique |
| `description` | — | 40 caractères maximum |
| `first_name``last_name``email` | — | — |
| `callback_info` | — | renvoyé tel quel dans le webhook |
| `return_url``cancel_url` | — | Wave CI et Orange CI uniquement |

`callback_info` peut être une chaîne (2 000 caractères max), un nombre ou un objet JSON (5 000 caractères une fois sérialisé, profondeur 5, 50 clés par niveau).

### Exemple de requête

```bash
curl -X POST https://sandbox-api.feexpay.me/api/transactions/public/requesttopay/mtn \
  -H "Authorization: Bearer test_key_..." \
  -H "Content-Type: application/json" \
  -d '{"amount":500,"phoneNumber":"22997000000","shop":"<SHOP_ID>",
       "description":"Commande 42","callback_info":{"order":"cmd-42"}}'
```

### Réponse (MTN Bénin, succès immédiat)

```json
{
  "reference": "3670412f-8f6f-4cc1-879c-1f4570035ffc",
  "message": "Successful",
  "status": "SUCCESSFUL",
  "amount": 500,
  "description": "Commande 42",
  "callback_info": { "order": "cmd-42" },
  "phoneNumber": "22997000000"
}
```

-   Avec un numéro PENDING (suffixe `05`), la réponse contient `"message": "Accepted"` et `"status": "PENDING"`.
-   Pour Wave CI et Orange CI, la réponse contient aussi une `payment_url`, qui est fictive en sandbox.

### Payout (décaissement)

| Canal | Endpoint (POST) | Particularité |
| --- | --- | --- |
| MTN Bénin / Moov Bénin | `/api/payouts/public/transfer/global` | champ `network` : `"MTN"` ou `"MOOV"` |
| MTN Côte d'Ivoire | `/api/payouts/public/mtn_ci` | — |
| MTN Congo | `/api/payouts/public/mtn_cg` | numéro commençant par `242` |
| Moov Côte d'Ivoire | `/api/payouts/public/moov_ci` | `2250` + 9 chiffres |
| Celtiis Bénin | `/api/payouts/public/celtiis_bj` | — |
| Wave Côte d'Ivoire | `/api/payouts/public/wave_ci` | — |

Le payout Orange Côte d'Ivoire n'est pas encore disponible : il renvoie une erreur `503` « not available yet ».

### Corps de la requête

| Champ | Requis | Règle |
| --- | --- | --- |
| `shop` | ✅ | identifiant public de la boutique |
| `amount` | ✅ | entier de 10 à 1 000 000 |
| `phoneNumber` | ✅ | voir le format du canal |
| `motif` | ✅ | 30 caractères maximum pour MTN BJ, MTN CI, MTN CG et Moov BJ |
| `email` | — | — |
| `callback_info` | — | renvoyé tel quel dans le webhook |

Un payout doit être financé

Le solde est tenu **par canal**. Pour tester un payout MTN CI, réussissez d'abord un ou plusieurs payins MTN CI (numéro se terminant par `00`) pour un montant couvrant le payout et ses frais. Sinon, l'API répond `400 Low Balance`.

### Canaux non simulés

Togocom, Moov Togo ainsi que les canaux du Sénégal, du Burkina Faso, du Kenya, de la Tanzanie et du Ghana ne sont pas simulés. Ils renvoient :

```json
{
  "success": false,
  "status": "FAILED",
  "code": "CHANNEL_NOT_AVAILABLE_IN_SANDBOX",
  "statusCode": 400
}
```

## Numéros de test

Le résultat d'une transaction dépend des 2 derniers chiffres du numéro de téléphone utilisé :

| Numéro se terminant par | Payin | Payout |
| --- | --- | --- |
| 00 | `SUCCESSFUL` | `SUCCESSFUL` |
| 01 | `FAILED`, solde insuffisant | `FAILED`, solde recrédité |
| 02 | Erreur HTTP `503`, transaction `FAILED` | `FAILED`, solde recrédité |
| 03 | `FAILED` après 5 à 8 s (timeout) | `FAILED` après 5 à 8 s, solde recrédité |
| 04 | Erreur HTTP `400 INVALID_PHONE_NUMBER`, transaction `FAILED` | `FAILED`, solde recrédité |
| 05 | `PENDING`, puis `SUCCESSFUL` | `PENDING`, puis `SUCCESSFUL` 1 |
| 06 | `PENDING`, puis `FAILED` (refus du client) | `PENDING`, puis `FAILED`, solde recrédité 1 |
| Tout autre suffixe | `FAILED`, « Unsupported sandbox test number » | `FAILED`, solde recrédité |

1 Pour les payouts Moov BJ, Celtiis BJ et Wave CI, les suffixes `05`/`06` donnent directement le statut final, sans passer par PENDING.

Seul le suffixe 00 donne un succès immédiat

`00` est le **seul** succès immédiat. Un vrai numéro client échoue donc toujours.

-   Avec `05`/`06`, la transaction reste PENDING environ 20 secondes. Le statut final peut arriver jusqu'à environ 1 minute plus tard, selon le canal.
-   Le numéro doit aussi respecter le format du canal (voir [Canaux disponibles](#sandbox-channels)). Par exemple, pour Moov BJ, le scénario `00` s'écrit `2290197000000`.

## Consulter le statut d'une transaction

| Type | Endpoint (GET) |
| --- | --- |
| Payin | `/api/transactions/public/single/status/{reference}` |
| Payout | `/api/payouts/status/public/{reference}` |

-   **Recherche alternative** : `?by=description` ou `?by=callback_info` permet de chercher par un autre champ. La valeur doit tenir en un seul mot, sans espace.
-   **Plusieurs résultats** : si plusieurs transactions correspondent, l'API renvoie `409 SEARCHKEY_AMBIGUOUS`.
-   **Référence absente** : l'API renvoie `400 MISSING_REFERENCE`.
-   **Statuts possibles** : `PENDING`, `SUCCESSFUL` ou `FAILED`.

## Webhooks

### Configuration

Depuis le dashboard, rubrique **Webhooks** de la boutique, renseignez :

-   une URL publique en **HTTPS** ;
-   les événements à recevoir :
    -   `transaction.successful` et `transaction.failed` pour les payins ;
    -   `payout.successful` et `payout.failed` pour les payouts ;
    -   `all` pour tout recevoir ;
-   en option, une authentification : `auth_type` vaut `Bearer` ou `Basic` et `auth_value` contient le secret. FeexPay envoie alors l'en-tête `Authorization` composé du type suivi du secret (par ex. `Authorization: Bearer mon_secret`).

### Envoi

FeexPay envoie un `POST` JSON pour chaque statut final. **Aucun webhook n'est envoyé tant que la transaction est PENDING.**

```json
{
  "env": "sandbox",
  "reference": "faa994cc-2778-4690-a6eb-2b0710598032",
  "order_id": "faa994cc-2778-4690-a6eb-2b0710598032",
  "status": "SUCCESSFUL",
  "amount": 500,
  "callback_info": { "order": "cmd-42" },
  "type": "Paiement",
  "phoneNumber": "22997000000",
  "reseau": "MTN",
  "reason": "",
  "date": "...",
  "first_name": "",
  "last_name": "",
  "email": "",
  "description": "",
  "ref_link": "",
  "ref_operator": ""
}
```

-   `type` vaut `Paiement` pour un payin et `Payout` pour un payout.
-   En cas d'échec, `reason` contient le motif, par exemple `Insufficient balance`.

### Règles de livraison

-   Votre serveur doit répondre avec un code `2xx` en moins de **15 secondes**.
-   Une réponse `4xx` n'est pas renvoyée : elle est considérée comme une erreur définitive.
-   Une réponse `5xx`, `429` ou une erreur réseau donne lieu à **une seule** nouvelle tentative, 5 secondes plus tard.

À faire de votre côté

-   Traitez vos webhooks de façon idempotente, en utilisant `reference` comme clé.
-   Vérifiez le champ `env` pour ne jamais traiter un événement sandbox comme un paiement réel.

## Erreurs courantes

| Code HTTP / code | Cause |
| --- | --- |
| 400 (validation) | champ manquant ou mal formé (format du numéro, `amount`…) |
| 400 INVALID\_PHONE\_NUMBER | scénario de test `04` |
| 400 CHANNEL\_NOT\_AVAILABLE\_IN\_SANDBOX | canal non simulé |
| 400 Low Balance | payout non financé (voir [Payout](#sandbox-channels)) |
| 401 UNAUTHORIZED / API\_KEY\_BLOCKED | clé invalide ou désactivée |
| 404 Merchant or Shop not found | identifiant de boutique erroné, ou boutique d'un autre compte |
| 503 | scénario de test `02` (le corps affiche « Internal Server Error ») |

## Passage en production

1.  Remplacez l'URL de l'API sandbox par celle de production : `https://api-v2.feexpay.me`.
2.  Remplacez la clé `test_key_…` par votre clé de production, obtenue sur le [dashboard de production](https://app-v2.feexpay.me) après validation KYC.
3.  Utilisez de vrais numéros : les suffixes de test n'ont aucun effet en production.

Gérez la réponse PENDING dès le départ

En production, MTN, Wave CI et Orange CI répondent toujours `PENDING`, et le statut final n'arrive que par webhook. En sandbox, ces canaux répondent directement `SUCCESSFUL` ou `FAILED` (sauf avec `05`/`06`). Votre code doit donc gérer une réponse `PENDING` dès le départ.

 [Précédent

Codes d'erreur]
