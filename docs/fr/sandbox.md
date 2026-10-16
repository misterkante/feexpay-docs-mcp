---
id: sandbox
title: "Environnement sandbox"
group: api
lang: fr
source: https://docs.feexpay.me/?section=sandbox&version=v2
updated_at: 2026-10-16T09:46:31.651Z
---

# Environnement sandbox

La sandbox est un environnement de test isolé : **aucun opérateur réel n'est contacté et aucun argent ne circule**. Cette isolation est imposée par le code, quelle que soit la configuration.

Le résultat de chaque transaction dépend des **2 derniers chiffres du numéro de téléphone** (voir [Numéros de test](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-test-numbers)).

La sandbox permet aussi de tester le [paiement par carte](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-card) (Visa, Mastercard), en plus des canaux mobile money.

Les requêtes, les réponses et les webhooks sont ceux de la production. Seul le champ `env` des webhooks diffère : il vaut `"sandbox"`.

Aucune configuration préalable n'est nécessaire.

##### URL de l'API

`https://sandbox-api.feexpay.me`

##### Dashboard marchand

`https://sandbox-app.feexpay.me`

## Créer un compte de test

1.  Inscrivez-vous sur le [dashboard sandbox](https://sandbox-app.feexpay.me/) avec votre prénom, votre nom, votre e-mail et le nom de votre boutique.
2.  Vous arrivez directement sur le choix du mot de passe : choisissez-en un (8 caractères minimum) et acceptez les conditions. Votre compte est alors activé.

Dès que le mot de passe est défini, la sandbox crée automatiquement :

-   le compte marchand ;
-   une **seule boutique**, qui porte le nom donné à l'inscription : en sandbox, un compte ne peut avoir qu'une boutique ;
-   une paire de clés API de test, préfixées `test_key_`.

### À savoir

-   **Inscription interrompue avant le mot de passe** : inscrivez-vous à nouveau avec le même e-mail pour reprendre.
-   **Connexion avant d'avoir choisi le mot de passe** : un message indique que l'inscription n'est pas terminée.
-   **Page du mot de passe** : son lien est valable **3 heures**.

## Authentification

Une fois connecté au dashboard sandbox, récupérez dans la section des clés API :

-   votre **clé privée** : c'est elle qui sert à appeler l'API ;
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

## Collection Postman

Téléchargez la collection Postman de la sandbox pour tester tous les canaux simulés et les scénarios de test sans écrire de code. Elle est préconfigurée avec l'URL de l'API sandbox.

 [Télécharger la collection sandbox] 

### Contenu de la collection

| Dossier | Contenu |
| --- | --- |
| 1\. Payin | un payin par canal simulé, avec un numéro se terminant par `00` (succès) |
| 2\. Scénarios de test | un payin MTN Bénin par suffixe de test (`00` à `06`) et un numéro non reconnu |
| 3\. Payout | un payout par canal simulé |
| 4\. Statut | statut du dernier payin (par référence ou par description) et du dernier payout |
| 5\. Erreurs | canal non simulé, clé API invalide, boutique introuvable |
| 6\. Paiement par carte | préparation d'un paiement en XOF et en EUR (avec `payment_url` à ouvrir), devise non acceptée |

### Utiliser la collection

1.  Dans Postman, cliquez sur **Import** et sélectionnez le fichier téléchargé.
2.  Ouvrez la collection **FeexPay Sandbox**, onglet **Variables**, et renseignez :
    -   `api_key` : votre clé privée sandbox (préfixe `test_key_`) ;
    -   `shop` : l'identifiant public de votre boutique sandbox.
3.  Sélectionnez une requête et cliquez sur **Send**.

-   La référence renvoyée par chaque transaction est enregistrée automatiquement dans `payin_reference` ou `payout_reference`. Le dossier **Statut** utilise ces variables.
-   Les requêtes dont le résultat est connu d'avance contiennent des tests Postman, visibles dans l'onglet **Test Results**.

Financez le canal avant de tester un payout

Le solde est tenu par canal : envoyez d'abord le payin du même canal (dossier **Payin**) pour un montant couvrant le payout et ses frais. Sinon, l'API répond `400 Low Balance`.

## Canaux disponibles

### Payin (encaissement)

| Canal | Endpoint (POST) | Format du numéro | Exemple de succès |
| --- | --- | --- | --- |
| MTN Bénin | `/api/transactions/public/requesttopay/mtn` | libre | `22997000000` |
| Moov Bénin | `/api/transactions/public/requesttopay/moov` | `22901` + 8 chiffres | `2290197000000` |
| Celtiis Bénin | `/api/transactions/public/requesttopay/celtiis_bj` | `22901` + 8 chiffres | `2290197000000` |
| MTN Côte d'Ivoire | `/api/transactions/public/requesttopay/mtn_ci` | libre | `2250500000000` |
| Moov Côte d'Ivoire | `/api/transactions/public/requesttopay/moov_ci` | `2250` + 9 chiffres | `2250100000000` |
| Wave Côte d'Ivoire | `/api/transactions/public/requesttopay/wave_ci` | commence par `225` | `2250700000000` |
| Orange Côte d'Ivoire | `/api/transactions/public/requesttopay/orange_ci` | commence par `225` | `2250700000000` |
| MTN Congo | `/api/transactions/public/requesttopay/mtn_cg` | libre (devise `XAF`) | `242061000000` |
| Wave Sénégal | `/api/transactions/public/requesttopay/wave_sn` | `221` + 9 chiffres | `221770000000` |
| Orange Sénégal | `/api/transactions/public/requesttopay/orange_sn` | `221` + 9 chiffres (montant minimum : 100 F) | `221780000000` |
| Free Sénégal | `/api/transactions/public/requesttopay/free_sn` | `221` + 9 chiffres | `221760000000` |
| Togocom Togo (T-Money) | `/api/transactions/public/requesttopay/togocom_tg` | commence par `228` | `22870000000` |
| Moov Togo (Flooz) | `/api/transactions/public/requesttopay/moov_tg` | commence par `228` | `22890000000` |

### Corps de la requête

| Champ | Requis | Règle |
| --- | --- | --- |
| `amount` | ✅ | entier de 10 à 1 000 000 |
| `phoneNumber` | ✅ | voir le format du canal |
| `shop` | ✅ | identifiant public de la boutique |
| `description` | — | 40 caractères maximum |
| `first_name``last_name``email` | — | — |
| `callback_info` | — | renvoyé tel quel dans le webhook |
| `return_url``cancel_url` | — | Wave et Orange uniquement |

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

### Réponse immédiate selon le canal

-   **Statut final directement dans la réponse** : MTN, Moov BJ, Wave CI et Orange CI.
-   **`PENDING` d'abord, puis statut final en quelques secondes** : Celtiis BJ, Moov CI, canaux du Sénégal et du Togo.

Quel que soit le canal, traitez le webhook (ou la route de statut) comme la seule source fiable du statut final, comme en production.

### Payout (décaissement)

| Canal | Endpoint (POST) | Particularité |
| --- | --- | --- |
| MTN Bénin / Moov Bénin | `/api/payouts/public/transfer/global` | champ `network` : `"MTN"` ou `"MOOV"` |
| MTN Côte d'Ivoire | `/api/payouts/public/mtn_ci` | — |
| MTN Congo | `/api/payouts/public/mtn_cg` | numéro commençant par `242` |
| Moov Côte d'Ivoire | `/api/payouts/public/moov_ci` | `2250` + 9 chiffres |
| Celtiis Bénin | `/api/payouts/public/celtiis_bj` | — |
| Wave Côte d'Ivoire | `/api/payouts/public/wave_ci` | — |
| Wave Sénégal | `/api/payouts/public/wave_sn` | numéro `221` + 9 chiffres, montant minimum 100 F |
| Orange Sénégal | `/api/payouts/public/orange_sn` | numéro `221` + 9 chiffres, montant minimum 100 F |
| Free Sénégal | `/api/payouts/public/free_sn` | numéro `221` + 9 chiffres, montant minimum 100 F |
| Togocom Togo / Moov Togo | `/api/payouts/public/togo` | champ `network` : `"TOGOCOM TG"` ou `"MOOV TG"` |

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

### Solde et frais

-   **Crédit** : chaque payin `SUCCESSFUL` crédite le solde de la boutique sur le canal concerné, du montant net (après frais).
-   **Débit** : un payout débite le montant plus les frais. Par exemple, aux taux par défaut, un payout de 300 coûte 306 au Sénégal et 309 au Togo.
-   **Remboursement** : un payout `FAILED` est remboursé automatiquement.
-   **Solde CARD** : un paiement par carte réussi crédite le solde `CARD` de la boutique, distinct des soldes mobile money, du montant net.

Un payout doit être financé

Le solde est tenu **par canal**. Pour tester un payout MTN CI, réussissez d'abord un ou plusieurs payins MTN CI (numéro se terminant par `00`) pour un montant couvrant le payout et ses frais. Sinon, l'API répond `400 Low Balance`.

### Canaux non simulés

Les canaux des autres pays (Burkina Faso, Kenya, Tanzanie, Ghana) ne sont pas simulés. Ils renvoient :

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
| 02 | Erreur HTTP `503`, transaction `FAILED` 2 | `FAILED`, solde recrédité |
| 03 | `FAILED` après 5 à 8 s (timeout) | `FAILED`, solde recrédité |
| 04 | Erreur HTTP `400 INVALID_PHONE_NUMBER`, transaction `FAILED` 2 | `FAILED`, solde recrédité |
| 05 | `PENDING`, puis `SUCCESSFUL` après environ 20 s | `PENDING`, puis `SUCCESSFUL` 1 |
| 06 | `PENDING`, puis `FAILED` (refus du client) | `PENDING`, puis `FAILED`, solde recrédité 1 |
| Tout autre suffixe | Erreur `400 INVALID_SANDBOX_TEST_NUMBER`, aucune transaction créée | Erreur `400 INVALID_SANDBOX_TEST_NUMBER`, aucune transaction créée |

1 Pour les payouts Moov BJ, Celtiis BJ, Wave CI et les trois canaux du Sénégal, les suffixes `05`/`06` donnent directement le statut final, sans passer par PENDING.

2 Pour les canaux du Sénégal et Moov TG, il n'y a pas d'erreur HTTP : la réponse renvoie directement la transaction en `FAILED`.

Seul le suffixe 00 donne un succès immédiat

`00` est le **seul** succès immédiat. Un vrai numéro client est toujours refusé, sans qu'aucune transaction soit créée :

```json
{
  "success": false,
  "status": "FAILED",
  "code": "INVALID_SANDBOX_TEST_NUMBER",
  "message": "Sandbox: 22997123447 is not a test number. Use a number ending in 00 to 06 (e.g. 22997000000 for a successful payment).",
  "test_numbers": { "00": "SUCCESSFUL", "01": "FAILED (insufficient balance)", "...": "..." },
  "statusCode": 400
}
```

-   Avec `05`/`06`, la transaction reste PENDING environ 20 secondes. Le statut final arrive en général en moins de 30 secondes.
-   Le numéro doit aussi respecter le format du canal (voir [Canaux disponibles](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-channels)). Par exemple, pour Moov BJ, le scénario `00` s'écrit `2290197000000`.
-   Le contrôle des numéros de test ne s'applique pas au [paiement par carte](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-card) : le `phoneNumber` y sert seulement à la facturation.

## Paiement par carte

En sandbox, le paiement par carte (Visa, Mastercard) est disponible pour tous les marchands, **sans KYC carte**.

Aucune vraie carte n'est débitée : la page de paiement est simulée et le résultat dépend de la **carte de test** saisie.

Le parcours, les réponses, les frais, le reçu, le webhook et le crédit du solde sont les mêmes qu'en production.

### Le parcours

1.  Le marchand prépare le paiement avec l'API.
2.  Il redirige son client vers la `payment_url` reçue.
3.  Le client remplit la page de paiement :
    -   ses coordonnées s'affichent pré-remplies ;
    -   il saisit sa carte, choisit la zone d'émission (le montant se met à jour), la date d'expiration et le CVC ;
    -   il clique sur **« Payer »**.
4.  Le client arrive sur un reçu FeexPay. Le bouton **« Terminer »** le renvoie vers l'URL de retour du marchand.
5.  Le marchand reçoit le statut final par webhook, et peut aussi le consulter via la route de statut.

### Étape 1 : préparer le paiement

POST

`https://sandbox-api.feexpay.me/api/transactions/public/requesttopay/init`

En-têtes :

```http
Authorization: Bearer test_key_...
Content-Type: application/json
```

Corps de la requête :

```json
{
  "shop": "<SHOP_ID>",
  "amount": 100,
  "currency": "XOF",
  "first_name": "Awa",
  "last_name": "Kone",
  "email": "awa@exemple.com",
  "phoneNumber": "+22997123456",
  "return_url": "https://marchand.exemple.com/retour",
  "cancel_url": "https://marchand.exemple.com/annulation",
  "description": "Commande 42",
  "callback_info": { "order": "cmd-42" }
}
```

| Champ | Requis | Description |
| --- | --- | --- |
| `shop` | ✅ | identifiant public de la boutique |
| `amount` | ✅ | montant de la commande, dans la devise `currency` |
| `first_name``last_name``email` | ✅ | coordonnées du client, affichées sur la page de paiement |
| `phoneNumber` | ✅ | téléphone du client. Il sert seulement à la facturation : ce n'est pas un numéro de test, n'importe quel numéro valide est accepté |
| `currency` | — | `XOF` par défaut. Voir [Devises](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-card-currencies) |
| `return_url` | — | page du marchand où revient le client (bouton « Terminer » du reçu) |
| `cancel_url` | — | page de retour en cas d'annulation |
| `description``callback_info` | — | repris dans le webhook |

Réponse (200) :

```json
{
  "reference": "FZgr9WLAXnrD",
  "status": "PENDING",
  "message": "Accepted",
  "payment_url": "https://sandbox-api.feexpay.me/api/card/sandbox/checkout/card-details?ref=FZgr9WLAXnrD",
  "currency": "XOF",
  "amount": 100,
  "amount_xof": 100,
  "amount_to_pay_xof": 104,
  "expires_at": "2026-10-15T10:34:53.722Z"
}
```

-   `payment_url` : page vers laquelle rediriger le client ;
-   `amount_to_pay_xof` : montant débité au client, frais compris, avant le choix de la zone. Le taux international (3,9 %) s'applique par défaut ;
-   `expires_at` : fin de validité de la session de paiement (60 minutes).

### Étape 2 : page de paiement et cartes de test

Le résultat dépend des **4 derniers chiffres de la carte**. La date d'expiration et le CVC peuvent être quelconques.

| Carte se terminant par | Résultat |
| --- | --- |
| 0000 | `SUCCESSFUL` |
| 0001 | `FAILED`, fonds insuffisants |
| 0002 | `FAILED`, erreur système |
| 0003 | `FAILED`, carte expirée |
| 0004 | `FAILED`, échec de l'authentification 3-D Secure |
| 0005 | `PENDING` (revue antifraude), puis `SUCCESSFUL` après environ 20 s |
| 0006 | `PENDING` (revue antifraude), puis `FAILED` après environ 20 s |
| Autre | refusée par la page (« Carte de test non reconnue ») : le client peut réessayer |

Exemples : `4000 0000 0000 0000` (Visa, succès) ou `5100 0000 0000 0001` (Mastercard, fonds insuffisants).

### Étape 3 : reçu et retour chez le marchand

Après le paiement, le client voit le reçu FeexPay : « Paiement réussi », « Paiement refusé » ou « Paiement en cours de vérification ». Le bouton **« Terminer »** l'envoie vers :

```text
<return_url>?ref=<reference>&status=<SUCCESSFUL|FAILED|PENDING|CANCELLED>
```

**Choix de l'URL** : si le paiement échoue, c'est `cancel_url` qui est utilisée lorsqu'elle est fournie ; sinon, `return_url`.

Le statut de l'URL n'est qu'une indication

Le paramètre `status` de l'URL peut être modifié par le client. Confirmez toujours le statut par le webhook ou par la route de statut avant de livrer.

### Étape 4 : statut final

-   **Webhook** : un `POST` vers votre URL, au même format que pour le mobile money. Les événements sont `transaction.successful` / `transaction.failed`, et le payload contient `"env": "sandbox"`.
-   **Route de statut** : `GET /api/transactions/public/single/status/{reference}`. Elle renvoie `status` et `reason`, par exemple « Fonds insuffisants sur le compte. ».
-   **Paiement non abouti** : si le client ne paie pas avant `expires_at`, la transaction passe en `FAILED`.

### Frais

| Zone d'émission de la carte | Frais (payés par le client) |
| --- | --- |
| UEMOA | 3,5 % |
| Toute autre zone | 3,9 % |

Exemple : pour une commande de 10 000 F, le client paie 10 350 F avec une carte UEMOA, ou 10 390 F avec une carte émise ailleurs. Le marchand reçoit 10 000 F.

### Devises

-   **Débit toujours en XOF** : le paiement est débité en XOF, quelle que soit la devise de la commande.
-   **Commande en devise étrangère** : si `currency` est une autre devise acceptée (EUR, USD, GBP, CHF, CAD, XAF, NGN, GHS…), le montant est converti en XOF au taux fixe de la sandbox, par exemple 1 EUR = 655,957 XOF ou 1 USD = 600 XOF.
-   **Commission de change** : 3 % du montant converti, retenue au marchand.
-   **Devise non acceptée** : erreur `400 currency_not_supported`, avec la liste des devises acceptées.

Exemple : 1 000 EUR, carte de l'UE

-   montant converti : 655 957 XOF ;
-   payé par le client : 681 539 XOF (frais carte de 3,9 % compris) ;
-   reçu par le marchand : 636 278 XOF (après la commission de change de 3 %).

En production, les taux suivent le marché et sont mis à jour toutes les heures : les montants convertis seront donc différents.

### Solde

Un paiement par carte réussi crédite le solde `CARD` de la boutique, distinct des soldes mobile money, du montant net.

### Erreurs propres au paiement par carte

| Code | Cause |
| --- | --- |
| 400 currency\_not\_supported | devise non acceptée |
| 400 (validation) | champ requis manquant ou mal formé |
| 401 UNAUTHORIZED | clé API absente ou invalide |
| 404 Merchant or Shop not found | identifiant de boutique erroné |

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

FeexPay envoie un `POST` JSON pour chaque statut final, en général moins de 30 secondes après la création de la transaction. Chaque webhook n'est envoyé qu'une fois. **Aucun webhook n'est envoyé tant que la transaction est PENDING.**

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
| 400 INVALID\_SANDBOX\_TEST\_NUMBER | numéro qui n'est pas un numéro de test (voir [Numéros de test](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-test-numbers)) |
| 400 INVALID\_PHONE\_NUMBER | scénario de test `04` |
| 400 CHANNEL\_NOT\_AVAILABLE\_IN\_SANDBOX | canal non simulé |
| 400 Low Balance | payout non financé (voir [Payout](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-channels)) |
| 401 UNAUTHORIZED / API\_KEY\_BLOCKED | clé absente, invalide ou désactivée |
| 404 Merchant or Shop not found | identifiant de boutique erroné, ou boutique d'un autre compte |
| 409 EMAIL\_ALREADY\_EXISTS | inscription avec un e-mail déjà activé |
| 503 | scénario de test `02` (le corps affiche « Internal Server Error ») |

## Passage en production

1.  Remplacez l'URL de l'API sandbox par celle de production : `https://api-v2.feexpay.me`.
2.  Remplacez la clé `test_key_…` par votre clé de production, obtenue sur le [dashboard de production](https://app-v2.feexpay.me/) après validation KYC.
3.  Utilisez de vrais numéros : les suffixes de test n'ont aucun effet en production.

Deux règles absentes de la sandbox s'appliquent aussi en production :

-   la confirmation de l'e-mail est obligatoire à l'inscription ;
-   une liste blanche d'adresses IP est exigée pour les payouts.

Pour le paiement par carte :

-   **KYC carte obligatoire** : le paiement par carte n'est ouvert qu'après validation du KYC carte du marchand ;
-   **vraies cartes**, avec authentification 3-D Secure ;
-   **taux de change du marché**, au lieu des taux fixes de la sandbox ;
-   **réserve de garantie** : une partie de chaque paiement par carte peut être retenue pendant 180 jours pour couvrir les litiges (chargebacks), selon le profil de risque du marchand. Cette réserve n'existe pas en sandbox.

Gérez la réponse PENDING dès le départ

En production, MTN, Wave et Orange répondent toujours `PENDING`, et le statut final n'arrive que par webhook. En sandbox, MTN, Wave CI et Orange CI répondent directement `SUCCESSFUL` ou `FAILED` (sauf avec `05`/`06`). Votre code doit donc gérer une réponse `PENDING` dès le départ.

 [Précédent

Codes d'erreur]
