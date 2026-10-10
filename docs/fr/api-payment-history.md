---
id: api-payment-history
title: "API — Historique des transactions"
group: api
lang: fr
source: https://docs.feexpay.me/?section=api-payment-history&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# API — Historique des transactions

Cette API permet de récupérer l'historique des PayIn et PayOut d'une boutique. Deux modes sont disponibles :

-   consultation directe, pour une plage courte ;
-   traitement asynchrone avec résultat envoyé par webhook, recommandé pour les historiques volumineux.

##### Authentification

Authorization: Bearer <votre-api-key>

Ajoutez toujours cette en-tête. Sans elle, la requête sera refusée.

### A. Consulter l'historique directement

##### URL

`https://api-v2.feexpay.me/api/transactions/history`

POST

Cette route renvoie immédiatement les transactions trouvées. Elle est adaptée aux consultations courtes.

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| start\_date | Obligatoire | Date de début incluse, format YYYY-MM-DD | 2026-07-01 |
| end\_date | Obligatoire | Date de fin incluse, format YYYY-MM-DD | 2026-07-31 |
| shop | Obligatoire | Identifiant public de la boutique. | xP1h6IfiPPJQjHy |
| type | Optionnel | PAYIN, PAYOUT ou ALL | ALL |
| status | Optionnel | PENDING, SUCCESSFUL, FAILED ou ALL | SUCCESSFUL |
| reseau | Optionnel | Code réseau. Utilisez ALL pour tous les réseaux. | MOOV CI |

Paramètres reseaux acceptés

ALLMTNMOOVCELTIIS BJCORISMTN CIMOOV CIORANGE CIWAVE CIMTN CGMOOV TGTOGOCOM TGORANGE SNFREE SNWAVE SNMOOV BFORANGE BF

Utilisez ALL pour tous les réseaux à la fois. Les codes doivent être écrits exactement comme ci-dessus, en majuscules.

Règles importantes

-   La plage de dates ne peut pas dépasser 31 jours.
-   La réponse est limitée à 500 transactions.
-   S'il y a plus de 500 résultats, réduisez la plage de dates ou utilisez le traitement asynchrone.

##### Exemple Axios

```javascript
axios({
  url: 'https://api-v2.feexpay.me/api/transactions/history',
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_votre_api_key',
  },
  data: {
    start_date: '2026-07-01',
    end_date: '2026-07-31',
    shop: 'xP1h6IfiPPJQjHy',
    type: 'ALL',
    status: 'ALL',
    reseau: 'ALL',
  },
});
```

##### Réponse

```json
{
  "success": true,
  "total": 2,
  "data": [
    {
      "reference": "571ABAA9-3BBC-492D-8B7E-97A8A486315B",
      "type": "PAYMENT_API",
      "status": "SUCCESSFUL",
      "amount": 5000,
      "reseau": "MOOV CI",
      "phone_number": "2250700000000",
      "financial_transaction_id": "operator-reference",
      "custom_id": "order_12345",
      "description": "Achat de produit",
      "callback_info": {
        "order_id": "order_12345"
      },
      "reason": null,
      "date": "2026-07-30T10:15:00.000Z"
    },
    {
      "reference": "9C2F41D7-58E0-4A1B-BD33-1E7C5A9F0244",
      "type": "PAYOUT_API",
      "status": "FAILED",
      "amount": 12000,
      "reseau": "MTN CI",
      "phone_number": "2250500000000",
      "financial_transaction_id": null,
      "custom_id": "payout_98765",
      "description": "Remboursement client",
      "callback_info": {
        "order_id": "payout_98765"
      },
      "reason": "Insufficient balance",
      "date": "2026-07-30T14:42:00.000Z"
    }
  ]
}
```

Champ type

Le champ type de chaque résultat correspond au à la source de paiement, par exemple PAYMENT\_API, PAYOUT\_API, FEEX\_LINK ou FEEX\_PAGE.

### B. Demander un historique asynchrone

Utilisez cette route pour les gros volumes. La demande est placée dans une file de traitement, puis FeexPay envoie le résultat à votre webhook.

##### URL

`https://api-v2.feexpay.me/api/transactions/history/async`

POST

Pré-requis

-   La boutique indiquée dans shop doit posséder une webhook active configurée depuis le dashboard.
-   Sélectionnez **Tous les événements** ou l'événement `payment_history`.

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| start\_date | Obligatoire | Date de début incluse, format YYYY-MM-DD | 2026-07-01 |
| end\_date | Obligatoire | Date de fin incluse, format YYYY-MM-DD | 2026-07-31 |
| shop | Obligatoire | Identifiant public de la boutique devant posséder la webhook configurée | xP1h6IfiPPJQjHy |
| type | Optionnel | PAYIN, PAYOUT ou ALL | ALL |
| status | Optionnel | PENDING, SUCCESSFUL, FAILED ou ALL | ALL |
| reseau | Optionnel | Code réseau. Utilisez ALL pour tous les réseaux. | ALL |

Paramètres reseaux acceptés

ALLMTNMOOVCELTIIS BJCORISMTN CIMOOV CIORANGE CIWAVE CIMTN CGMOOV TGTOGOCOM TGORANGE SNFREE SNWAVE SNMOOV BFORANGE BF

Utilisez ALL pour tous les réseaux à la fois. Les codes doivent être écrits exactement comme ci-dessus, en majuscules.

##### Exemple Axios

```javascript
axios({
  url: 'https://api-v2.feexpay.me/api/transactions/history/async',
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_votre_api_key',
  },
  data: {
    start_date: '2026-07-01',
    end_date: '2026-07-31',
    shop: 'xP1h6IfiPPJQjHy',
    type: 'ALL',
    status: 'ALL',
    reseau: 'ALL',
  },
});
```

##### Réponse immédiate — 202 Accepted

```json
{
  "success": true,
  "data": {
    "request_id": "78fc15b3bff32d60e89f7d87",
    "status": "PENDING",
    "created_at": "2026-07-31T10:00:00.000Z",
    "expires_at": "2026-08-01T10:00:00.000Z"
  }
}
```

À retenir

Conservez request\_id pour suivre la demande.

Erreur possible

`409 HISTORY_WEBHOOK_NOT_CONFIGURED` — aucune souscription à l'événement webhook history pour cette boutique.

### C. Suivre une demande asynchrone

##### URL

`https://api-v2.feexpay.me/api/transactions/history/async/78fc15b3bff32d60e89f7d87`

GET

##### Exemple Axios

```javascript
axios({
  url: 'https://api-v2.feexpay.me/api/transactions/history/async/78fc15b3bff32d60e89f7d87',
  method: 'get',
  headers: {
    Authorization: 'Bearer fp_votre_api_key',
  },
});
```

##### Statuts possibles

| Statut | Description |
| --- | --- |
| PENDING | Demande enregistrée ou en cours de génération par le worker. |
| FAILED | La génération a échoué. |
| COMPLETED | Résultat disponible et webhook envoyée. |

##### Réponse lorsque le traitement est terminé

```json
{
  "success": true,
  "data": {
    "request_id": "78fc15b3bff32d60e89f7d87",
    "status": "COMPLETED",
    "row_count": 1250,
    "processed_rows": 1250,
    "result_format": "json",
    "result_url": "https://storage.feexpay.me/...",
    "error": null,
    "expires_at": "2026-08-01T10:00:00.000Z",
    "completed_at": "2026-07-31T10:02:15.000Z",
    "created_at": "2026-07-31T10:00:00.000Z"
  }
}
```

Expiration du résultat

result\_url est temporaire. Téléchargez le fichier avant expires\_at.

### D. Webhook de résultat

Lorsque le traitement réussit, FeexPay envoie une requête POST vers l'URL webhook configurée pour la boutique.

##### Événement

payment\_history

##### Exemple de payload

```json
{
  "request_id": "78fc15b3bff32d60e89f7d87",
  "status": "COMPLETED",
  "amount": 0,
  "type": "PAYMENT_HISTORY",
  "date": "2026-07-31T10:02:15.000Z",
  "row_count": 2,
  "result_format": "json",
  "result_url": "https://storage.feexpay.me/...",
  "expires_at": "2026-08-01T10:00:00.000Z",
  "data": [
    {
      "reference": "571ABAA9-3BBC-492D-8B7E-97A8A486315B",
      "type": "PAYMENT_API",
      "status": "SUCCESSFUL",
      "amount": 5000,
      "reseau": "MOOV CI",
      "phone_number": "2250700000000",
      "financial_transaction_id": "operator-reference",
      "custom_id": "order_12345",
      "description": "Achat de produit",
      "callback_info": {
        "order_id": "order_12345"
      },
      "reason": null,
      "date": "2026-07-30T10:15:00.000Z"
    },
    {
      "reference": "9C2F41D7-58E0-4A1B-BD33-1E7C5A9F0244",
      "type": "PAYOUT_API",
      "status": "FAILED",
      "amount": 12000,
      "reseau": "MTN CI",
      "phone_number": "2250500000000",
      "financial_transaction_id": null,
      "custom_id": "payout_98765",
      "description": "Remboursement client",
      "callback_info": {
        "order_id": "payout_98765"
      },
      "reason": "Insufficient balance",
      "date": "2026-07-30T14:42:00.000Z"
    }
  ]
}
```

Note

La webhook contient directement les données dans data et fournit également result\_url pour récupérer le fichier JSON complet.

Pas de webhook en cas d'échec

Aucune webhook n'est envoyée si la génération échoue — interrogez GET .../async/{request\_id} pour connaître la raison (champ error).
