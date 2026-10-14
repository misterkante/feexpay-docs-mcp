---
id: sandbox
title: "Sandbox environment"
group: api
lang: en
source: https://docs.feexpay.me/?section=sandbox&version=v2
updated_at: 2026-10-14T10:10:02.461Z
---

# Sandbox environment

The sandbox is an isolated test environment: **no real operator is contacted and no money moves**. This isolation is enforced in code, whatever the configuration.

The outcome of each transaction depends on the **last 2 digits of the phone number** (see [Test numbers](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-test-numbers)).

Requests, responses and webhooks are the same as in production. Only the webhook `env` field differs: it is set to `"sandbox"`.

No prior configuration is required.

##### API URL

`https://sandbox-api.feexpay.me`

##### Merchant dashboard

`https://sandbox-app.feexpay.me`

##### Swagger documentation

`https://sandbox-api.feexpay.me/docs`

## Create a test account

1.  Sign up on the [sandbox dashboard](https://sandbox-app.feexpay.me/) with your first name, last name, email and shop name.
2.  You land directly on the password page: choose a password (at least 8 characters) and accept the terms. Your account is then activated.

As soon as the password is set, the sandbox automatically creates:

-   the merchant account;
-   a **single shop**, named after the shop name given at sign-up: in sandbox, an account can only have one shop;
-   a pair of test API keys, prefixed with `test_key_`.

### Good to know

-   **Sign-up interrupted before the password**: sign up again with the same email to resume.
-   **Logging in before choosing a password**: a message says the sign-up is not complete.
-   **Password page**: its link is valid for **3 hours**.

### Signing up through the API

To create the account through the API instead of the dashboard:

1.  `POST /api/auth/register` with `first_name`, `last_name`, `email` and `shop`. The response contains `data.registration_token`.
2.  `PUT /api/auth/register/init-password` with `token`, `password` and `terms_accepted`.

## Authentication

Once logged in to the sandbox dashboard, get the following from the API keys section:

-   your **private key**: this is the one used to call the API;
-   your **shop public ID**, to pass in the `shop` field of every request.

Every call carries the following headers:

```http
Authorization: Bearer test_key_...
Content-Type: application/json
```

### Possible errors

-   `401 UNAUTHORIZED` — missing or invalid key
-   `401 API_KEY_BLOCKED` — key disabled

The private key can be regenerated from the dashboard.

Never expose the private key

The private key must never appear in client-side code (browser, mobile app…). Call the API from your server.

## Postman collection

Download the sandbox Postman collection to test every simulated channel and test scenario without writing code. It is preconfigured with the sandbox API URL.

 [Download the sandbox collection] 

### Collection contents

| Folder | Contents |
| --- | --- |
| 1\. Payin | one payin per simulated channel, with a number ending in `00` (success) |
| 2\. Scénarios de test | one MTN Benin payin per test suffix (`00` to `06`) and one unrecognised number |
| 3\. Payout | one payout per simulated channel |
| 4\. Statut | status of the last payin (by reference or by description) and of the last payout |
| 5\. Erreurs | channel not simulated, invalid API key, shop not found |

### Using the collection

1.  In Postman, click **Import** and select the downloaded file.
2.  Open the **FeexPay Sandbox** collection, **Variables** tab, and fill in:
    -   `api_key`: your sandbox private key (prefix `test_key_`);
    -   `shop`: your sandbox shop public ID.
3.  Select a request and click **Send**.

-   The reference returned by each transaction is saved automatically in `payin_reference` or `payout_reference`. The **Statut** folder uses these variables.
-   Requests whose outcome is known in advance include Postman tests, shown in the **Test Results** tab.

Fund the channel before testing a payout

The balance is kept per channel: first send the payin for the same channel (**Payin** folder) for an amount covering the payout and its fees. Otherwise, the API returns `400 Low Balance`.

## Available channels

### Payin (collection)

| Channel | Endpoint (POST) | Phone number format | Success example |
| --- | --- | --- | --- |
| MTN Benin | `/api/transactions/public/requesttopay/mtn` | free | `22997000000` |
| Moov Benin | `/api/transactions/public/requesttopay/moov` | `22901` + 8 digits | `2290197000000` |
| Celtiis Benin | `/api/transactions/public/requesttopay/celtiis_bj` | `22901` + 8 digits | `2290197000000` |
| MTN Côte d'Ivoire | `/api/transactions/public/requesttopay/mtn_ci` | free | `2250500000000` |
| Moov Côte d'Ivoire | `/api/transactions/public/requesttopay/moov_ci` | `2250` + 9 digits | `2250100000000` |
| Wave Côte d'Ivoire | `/api/transactions/public/requesttopay/wave_ci` | starts with `225` | `2250700000000` |
| Orange Côte d'Ivoire | `/api/transactions/public/requesttopay/orange_ci` | starts with `225` | `2250700000000` |
| MTN Congo | `/api/transactions/public/requesttopay/mtn_cg` | free (currency `XAF`) | `242061000000` |
| Wave Senegal | `/api/transactions/public/requesttopay/wave_sn` | `221` + 9 digits | `221770000000` |
| Orange Senegal | `/api/transactions/public/requesttopay/orange_sn` | `221` + 9 digits (minimum amount: 100 F) | `221780000000` |
| Free Senegal | `/api/transactions/public/requesttopay/free_sn` | `221` + 9 digits | `221760000000` |
| Togocom Togo (T-Money) | `/api/transactions/public/requesttopay/togocom_tg` | starts with `228` | `22870000000` |
| Moov Togo (Flooz) | `/api/transactions/public/requesttopay/moov_tg` | starts with `228` | `22890000000` |

### Request body

| Field | Required | Rule |
| --- | --- | --- |
| `amount` | ✅ | integer from 10 to 1,000,000 |
| `phoneNumber` | ✅ | see the channel format |
| `shop` | ✅ | shop public ID |
| `description` | — | 40 characters max |
| `first_name``last_name``email` | — | — |
| `callback_info` | — | returned as-is in the webhook |
| `return_url``cancel_url` | — | Wave and Orange only |

`callback_info` can be a string (2,000 characters max), a number or a JSON object (5,000 characters once serialized, depth 5, 50 keys per level).

### Request example

```bash
curl -X POST https://sandbox-api.feexpay.me/api/transactions/public/requesttopay/mtn \
  -H "Authorization: Bearer test_key_..." \
  -H "Content-Type: application/json" \
  -d '{"amount":500,"phoneNumber":"22997000000","shop":"<SHOP_ID>",
       "description":"Commande 42","callback_info":{"order":"cmd-42"}}'
```

### Response (MTN Benin, immediate success)

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

-   With a PENDING number (suffix `05`), the response contains `"message": "Accepted"` and `"status": "PENDING"`.
-   For Wave CI and Orange CI, the response also contains a `payment_url`, which is fake in sandbox.

### Immediate response by channel

-   **Final status directly in the response**: MTN, Moov BJ, Wave CI and Orange CI.
-   **`PENDING` first, then the final status within a few seconds**: Celtiis BJ, Moov CI, Senegal and Togo channels.

Whatever the channel, treat the webhook (or the status route) as the only reliable source for the final status, as in production.

### Payout (disbursement)

| Channel | Endpoint (POST) | Specifics |
| --- | --- | --- |
| MTN Benin / Moov Benin | `/api/payouts/public/transfer/global` | `network` field: `"MTN"` or `"MOOV"` |
| MTN Côte d'Ivoire | `/api/payouts/public/mtn_ci` | — |
| MTN Congo | `/api/payouts/public/mtn_cg` | number starting with `242` |
| Moov Côte d'Ivoire | `/api/payouts/public/moov_ci` | `2250` + 9 digits |
| Celtiis Benin | `/api/payouts/public/celtiis_bj` | — |
| Wave Côte d'Ivoire | `/api/payouts/public/wave_ci` | — |
| Wave Senegal | `/api/payouts/public/wave_sn` | number `221` + 9 digits, minimum amount 100 F |
| Orange Senegal | `/api/payouts/public/orange_sn` | number `221` + 9 digits, minimum amount 100 F |
| Free Senegal | `/api/payouts/public/free_sn` | number `221` + 9 digits, minimum amount 100 F |
| Togocom Togo / Moov Togo | `/api/payouts/public/togo` | `network` field: `"TOGOCOM TG"` or `"MOOV TG"` |

Orange Côte d'Ivoire payout is not available yet: it returns a `503` "not available yet" error.

### Request body

| Field | Required | Rule |
| --- | --- | --- |
| `shop` | ✅ | shop public ID |
| `amount` | ✅ | integer from 10 to 1,000,000 |
| `phoneNumber` | ✅ | see the channel format |
| `motif` | ✅ | 30 characters max for MTN BJ, MTN CI, MTN CG and Moov BJ |
| `email` | — | — |
| `callback_info` | — | returned as-is in the webhook |

### Balance and fees

-   **Credit**: every `SUCCESSFUL` payin credits the shop balance on the channel concerned with the net amount (after fees).
-   **Debit**: a payout debits the amount plus fees. For example, at the default rates, a payout of 300 costs 306 in Senegal and 309 in Togo.
-   **Refund**: a `FAILED` payout is refunded automatically.

A payout must be funded

The balance is kept **per channel**. To test an MTN CI payout, first complete one or more successful MTN CI payins (number ending in `00`) for an amount covering the payout and its fees. Otherwise, the API returns `400 Low Balance`.

### Channels not simulated

Channels in the other countries (Burkina Faso, Kenya, Tanzania, Ghana) are not simulated. They return:

```json
{
  "success": false,
  "status": "FAILED",
  "code": "CHANNEL_NOT_AVAILABLE_IN_SANDBOX",
  "statusCode": 400
}
```

## Test numbers

The outcome of a transaction depends on the last 2 digits of the phone number used:

| Number ending in | Payin | Payout |
| --- | --- | --- |
| 00 | `SUCCESSFUL` | `SUCCESSFUL` |
| 01 | `FAILED`, insufficient balance | `FAILED`, balance refunded |
| 02 | HTTP error `503`, transaction `FAILED` 2 | `FAILED`, balance refunded |
| 03 | `FAILED` after 5 to 8 s (timeout) | `FAILED`, balance re-credited |
| 04 | HTTP error `400 INVALID_PHONE_NUMBER`, transaction `FAILED` 2 | `FAILED`, balance refunded |
| 05 | `PENDING`, then `SUCCESSFUL` after about 20 s | `PENDING`, then `SUCCESSFUL` 1 |
| 06 | `PENDING`, then `FAILED` (declined by the customer) | `PENDING`, then `FAILED`, balance refunded 1 |
| Any other suffix | Error `400 INVALID_SANDBOX_TEST_NUMBER`, no transaction created | Error `400 INVALID_SANDBOX_TEST_NUMBER`, no transaction created |

1 For Moov BJ, Celtiis BJ, Wave CI and the three Senegal payouts, suffixes `05`/`06` return the final status directly, without going through PENDING.

2 For the Senegal channels and Moov TG, there is no HTTP error: the response directly returns the transaction as `FAILED`.

Only the 00 suffix gives an immediate success

`00` is the **only** immediate success. A real customer number is always rejected, and no transaction is created:

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

-   With `05`/`06`, the transaction stays PENDING for about 20 seconds. The final status usually arrives in under 30 seconds.
-   The number must also match the channel format (see [Available channels](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-channels)). For example, for Moov BJ, the `00` scenario is written `2290197000000`.

## Check a transaction status

| Type | Endpoint (GET) |
| --- | --- |
| Payin | `/api/transactions/public/single/status/{reference}` |
| Payout | `/api/payouts/status/public/{reference}` |

-   **Alternative lookup**: `?by=description` or `?by=callback_info` lets you search by another field. The value must be a single word, with no spaces.
-   **Multiple matches**: if several transactions match, the API returns `409 SEARCHKEY_AMBIGUOUS`.
-   **Missing reference**: the API returns `400 MISSING_REFERENCE`.
-   **Possible statuses**: `PENDING`, `SUCCESSFUL` or `FAILED`.

## Webhooks

### Configuration

From the dashboard, in the shop **Webhooks** section, fill in:

-   a public **HTTPS** URL;
-   the events to receive:
    -   `transaction.successful` and `transaction.failed` for payins;
    -   `payout.successful` and `payout.failed` for payouts;
    -   `all` to receive everything;
-   optionally, authentication: `auth_type` is `Bearer` or `Basic` and `auth_value` holds the secret. FeexPay then sends an `Authorization` header made of the type followed by the secret (e.g. `Authorization: Bearer my_secret`).

### Delivery

FeexPay sends a JSON `POST` for each final status, usually less than 30 seconds after the transaction is created. Each webhook is sent only once. **No webhook is sent while the transaction is PENDING.**

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

-   `type` is `Paiement` for a payin and `Payout` for a payout.
-   On failure, `reason` holds the cause, for example `Insufficient balance`.

### Delivery rules

-   Your server must respond with a `2xx` code within **15 seconds**.
-   A `4xx` response is not retried: it is treated as a permanent error.
-   A `5xx` or `429` response, or a network error, triggers **a single** retry, 5 seconds later.

What you need to do

-   Process webhooks idempotently, using `reference` as the key.
-   Check the `env` field so you never process a sandbox event as a real payment.

## Common errors

| HTTP status / code | Cause |
| --- | --- |
| 400 (validation) | missing or malformed field (number format, `amount`…) |
| 400 INVALID\_SANDBOX\_TEST\_NUMBER | number that is not a test number (see [Test numbers](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-test-numbers)) |
| 400 INVALID\_PHONE\_NUMBER | test scenario `04` |
| 400 CHANNEL\_NOT\_AVAILABLE\_IN\_SANDBOX | channel not simulated |
| 400 Low Balance | payout not funded (see [Payout](https://docs.feexpay.me/?section=sandbox&version=v2#sandbox-channels)) |
| 401 UNAUTHORIZED / API\_KEY\_BLOCKED | missing, invalid or disabled key |
| 404 Merchant or Shop not found | wrong shop ID, or a shop belonging to another account |
| 409 EMAIL\_ALREADY\_EXISTS | sign-up with an email that is already activated |
| 503 | test scenario `02` (the body shows "Internal Server Error") |

## Going live

1.  Replace the sandbox API URL with the production one: `https://api-v2.feexpay.me`.
2.  Replace the `test_key_…` key with your production key, available on the [production dashboard](https://app-v2.feexpay.me/) after KYC validation.
3.  Use real numbers: test suffixes have no effect in production.

Two rules that do not exist in sandbox also apply in production:

-   email confirmation is mandatory at sign-up;
-   an IP whitelist is required for payouts.

Handle the PENDING response from day one

In production, MTN, Wave and Orange always respond `PENDING`, and the final status only arrives by webhook. In sandbox, MTN, Wave CI and Orange CI respond directly with `SUCCESSFUL` or `FAILED` (except with `05`/`06`). Your code must therefore handle a `PENDING` response from the start.

 [Previous

Error Codes]
