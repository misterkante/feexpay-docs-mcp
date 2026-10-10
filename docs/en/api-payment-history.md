---
id: api-payment-history
title: "API — Transaction history"
group: api
lang: en
source: https://docs.feexpay.me/?section=api-payment-history&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# API — Transaction history

This API lets you retrieve the PayIn and PayOut history of a shop. Two modes are available:

-   direct lookup, for a short date range;
-   asynchronous processing with the result delivered via webhook, recommended for large histories.

##### Authentication

Authorization: Bearer <votre-api-key>

Always add this header. Without it, the request will be rejected.

### A. Query the history directly

##### URL

`https://api-v2.feexpay.me/api/transactions/history`

POST

This route returns matching transactions immediately. It is suited for short lookups.

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| start\_date | Required | Start date, inclusive, format YYYY-MM-DD | 2026-07-01 |
| end\_date | Required | End date, inclusive, format YYYY-MM-DD | 2026-07-31 |
| shop | Required | Shop public identifier. | xP1h6IfiPPJQjHy |
| type | Optional | PAYIN, PAYOUT or ALL | ALL |
| status | Optional | PENDING, SUCCESSFUL, FAILED or ALL | SUCCESSFUL |
| reseau | Optional | Network code. Use ALL for every network. | MOOV CI |

Accepted network codes (reseau parameter)

ALLMTNMOOVCELTIIS BJCORISMTN CIMOOV CIORANGE CIWAVE CIMTN CGMOOV TGTOGOCOM TGORANGE SNFREE SNWAVE SNMOOV BFORANGE BF

Use ALL to every network at once. Codes must be written exactly as shown above, in uppercase.

Important rules

-   The date range cannot exceed 31 days.
-   The response is capped at 500 transactions.
-   If there are more than 500 results, narrow the date range or use the asynchronous flow instead.

##### Axios example

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

##### Response

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

Type field

The type field of each result corresponds to the transaction trigger, e.g. PAYMENT\_API, PAYOUT\_API, FEEX\_LINK or FEEX\_PAGE.

### B. Request an asynchronous history

Use this route for large volumes. The request is queued, then FeexPay delivers the result to your webhook.

##### URL

`https://api-v2.feexpay.me/api/transactions/history/async`

POST

Prerequisites

-   The shop specified in shop must have an active webhook configured from the dashboard.
-   Select **All events** or the event `payment_history`.

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| start\_date | Required | Start date, inclusive, format YYYY-MM-DD | 2026-07-01 |
| end\_date | Required | End date, inclusive, format YYYY-MM-DD | 2026-07-31 |
| shop | Required | Public identifier of the shop that owns the configured webhook | xP1h6IfiPPJQjHy |
| type | Optional | PAYIN, PAYOUT or ALL | ALL |
| status | Optional | PENDING, SUCCESSFUL, FAILED or ALL | ALL |
| reseau | Optional | Network code. Use ALL for every network. | ALL |

Accepted network codes (reseau parameter)

ALLMTNMOOVCELTIIS BJCORISMTN CIMOOV CIORANGE CIWAVE CIMTN CGMOOV TGTOGOCOM TGORANGE SNFREE SNWAVE SNMOOV BFORANGE BF

Use ALL to every network at once. Codes must be written exactly as shown above, in uppercase.

##### Axios example

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

##### Immediate response — 202 Accepted

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

Remember

Keep request\_id to track the request.

Possible error

`409 HISTORY_WEBHOOK_NOT_CONFIGURED` — no subscription to the webhook history event for this shop.

### C. Track an asynchronous request

##### URL

`https://api-v2.feexpay.me/api/transactions/history/async/78fc15b3bff32d60e89f7d87`

GET

##### Axios example

```javascript
axios({
  url: 'https://api-v2.feexpay.me/api/transactions/history/async/78fc15b3bff32d60e89f7d87',
  method: 'get',
  headers: {
    Authorization: 'Bearer fp_votre_api_key',
  },
});
```

##### Possible statuses

| Status | Description |
| --- | --- |
| PENDING | Request recorded or currently being generated by the worker. |
| FAILED | Generation failed. |
| COMPLETED | Result available and webhook sent. |

##### Response once processing is complete

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

Result expiration

result\_url is temporary. Download the file before expires\_at.

### D. Result webhook

When processing succeeds, FeexPay sends a POST request to the webhook URL configured for the shop.

##### Event

payment\_history

##### Payload example

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

The webhook includes the data directly in data and also provides result\_url to fetch the full JSON file.

No webhook on failure

No webhook is sent if generation fails — poll GET .../async/{request\_id} to find out why (error field).
