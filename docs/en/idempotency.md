---
id: idempotency
title: "Request idempotency (Idempotency-Key)"
group: api
lang: en
source: https://docs.feexpay.me/?section=idempotency&version=v2
updated_at: 2026-11-13T14:52:32.783Z
---

# Request idempotency (Idempotency-Key)

A network outage, a timeout or a client-side crash can leave you unsure whether your payment was created. The Idempotency-Key header lets you resend the same request without risking a duplicate transaction.

## Usage

Add the header to your POST payment (payin) and transfer (payout) requests:

```http
Idempotency-Key: 3f2b8c1e-9a4d-4e7b-8c2a-1d5e6f7a8b9c
```

-   Format: a UUID (v4 recommended), with no prefix. Case does not matter.
-   One key per operation: generate a new key for each new payment. Reuse the same key only to retry that same payment.
-   Optional: without the header, the request is processed normally, but without duplicate protection.
-   Ignored on other methods: the header is only taken into account on POST requests.

### Example

```javascript
const { randomUUID } = require('crypto');

// Generate the key once and store it with your order
const idempotencyKey = randomUUID();

// On timeout, resend exactly this request with the same key
await axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/mtn",
  method: 'post',
  headers: {
    Authorization: 'Bearer <votre-api-key>',
    'Idempotency-Key': idempotencyKey,
  },
  data: {
    shop: '63e581fe4c35f54de9749c',
    amount: 1000,
    phoneNumber: 2290166000000,
  },
});
```

## Behavior

| Situation | Response |
| --- | --- |
| First request with the key | Normal processing. |
| Same key, same body, request already processed | The original response is returned with the same HTTP status code. No new transaction is created. Two fields are added: idempotency\_code and idempotency\_notice. |
| Same key, original request still in progress | 
409 · IDEMPOTENCY\_IN\_PROGRESS

Retry in a few seconds. |
| Same key, different body or another operation | 

422 · IDEMPOTENCY\_PAYLOAD\_MISMATCH

The key is already associated with another request. |
| Key is not a UUID | 

400 · IDEMPOTENCY\_KEY\_INVALID

The key format is invalid. |
| The original request failed with an error (validation, server error…) | The key is not consumed: you can retry with the same key. |

Payment declined by the operator

If the original request succeeded (200 response) but the transaction has the FAILED status, that response is stored and will be replayed as is. To retry this payment, generate a new key.

## Replayed response example

```json
{
  "reference": "3cc70b08-616f-4a7e-9171-0be488ba7fd7",
  "status": "PENDING",
  "message": "Accepted",
  "amount": 1000,
  "description": "test",
  "callback_info": null,
  "idempotency_code": "IDEMPOTENCY_KEY_REUSED",
  "idempotency_notice": "This Idempotency-Key was already used"
}
```

Use reference to track the transaction: it is the same as in the first request.

## Validity period

-   For 48 hours, the original response is returned as is.
-   After that, the key remains reserved for this transaction on your account. A new submission returns a response rebuilt from the transaction (reference, status, amount, etc., plus idempotency\_code). Some fields may differ slightly from the original response: rely on reference.

## Best practices

-   Generate the key before the first submission and store it with your order.
-   On a timeout or network error, resend exactly the same request with the same key.
-   Never reuse a key for another payment, even if the amount is the same.
-   On a 409, wait a few seconds before retrying.
-   On a 422, do not retry: fix the request, or generate a new key if it is a new operation.
