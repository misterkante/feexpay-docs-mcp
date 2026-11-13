---
id: webhook
title: "Webhook"
group: general
lang: en
source: https://docs.feexpay.me/?section=webhook&version=v2
updated_at: 2026-11-13T14:52:32.783Z
---

# Webhook

### Overview

A webhook is a **POST** request with a JSON body, sent based on the selected events from FeexPay to the URL(s) configured by the merchant in their account. Each time the selected event occurs, the request is triggered and sends information to your URL. It’s your responsibility to listen to these requests, retrieve them, and process them to perform your server-side checks.

The **payload** sent by the webhook is a JSON object containing essential transaction information: **reference**, **amount**, **status**, and **callback\_info**, as well as other useful fields (last name, first name, email, network, etc.).

#### Example payload received for a failed transaction

```json
{
  "reference":"1e636dff-6b81-499e-bf8b-64b4a07a02a8",
  "order_id":"1e636dff-6b81-499e-bf8b-64b4a07a02a8",
  "status":"FAILED",
  "amount":250,
  "callback_info":"",
  "last_name":"",
  "first_name":"",
  "email":"lougbegnona@gmail.com",
  "type":"Paiement",
  "phoneNumber":"2290190877433",
  "date":"2026-05-25T10:06:26.662Z",
  "reseau":"MTN CI",
  "ref_link":"",
  "description":"test de 10",
  "reason":"PAYER_NOT_FOUND",
  "ref_operator":""
}
```

#### Example payload received for a successful transaction

```json
{
  "reference":"1e636dff-6b81-499e-bf8b-64b4a07a02a8",
  "order_id":"1e636dff-6b81-499e-bf8b-64b4a07a02a8",
  "status":"SUCCESSFUL",
  "amount":250,
  "callback_info":"",
  "last_name":"",
  "first_name":"",
  "email":"lougbegnona@gmail.com",
  "type":"Paiement",
  "phoneNumber":"2290190877433",
  "date":"2026-05-25T10:06:26.662Z",
  "reseau":"MTN CI",
  "ref_link":"",
  "description":"test de 10",
  "reason":"",
  "ref_operator":""
}
```

### Configuration

You can find the **[Webhook](https://app-v2.feexpay.me/webhook)** menu in your FeexPay dashboard. There, you can configure a URL to which our system will send the payload. This payload is a JSON containing the reference, the amount, the status, and the `callback_info` field. It is sent once a payment is successful (or based on the events enabled on your account).

This is a **POST** request sent to your URL: make sure your endpoint accepts the POST method, returns an appropriate HTTP status code (e.g., 200), and that no middleware or guard blocks receipt of the payload.

### Webhook signatures (HMAC)

Each webhook can be **signed** by FeexPay with a secret specific to your URL. By verifying this signature, your server makes sure the request really comes from FeexPay, that its content was not altered in transit, and that it is not an old delivery being replayed. We strongly recommend enabling it and **rejecting any request whose signature is missing or invalid**.

#### Enable signing

-   **When creating the webhook**: in the Webhook menu of the dashboard, choose the **HMAC signature** security mode (selected by default). A secret is generated and shown right away.
-   **On an existing webhook**: open the webhook details, then click **Enable signing** in the “HMAC signature” block.
-   The secret starts with `fxp_whsec_`. Use it **as is, prefix included**, as the HMAC key. Each webhook URL has its own secret.

The secret is shown **only once**. Copy it immediately and store it server-side (environment variable, secrets manager). Never expose it in a front-end or mobile app, and never commit it. If you lose it, rotate it.

#### Headers sent

When signing is enabled, every POST request carries the following headers, in addition to the usual JSON body:

| Header | Description |
| --- | --- |
| `x-feexpay-timestamp` | Time the attempt was sent, in seconds since the Unix epoch (UTC). Used to reject requests that are too old. |
| `x-feexpay-delivery-id` | Unique identifier of the delivery (UUID). It stays **the same** across automatic retries of a delivery: use it to process each delivery only once. |
| `x-feexpay-event` | Event type, for example `transaction.successful`, `transaction.failed`, `payout.successful` or `payout.failed`. |
| `x-feexpay-signature` | One or more signatures in the `v1=&lt;hex&gt;` format, separated by commas. There are two during a secret rotation (one per valid secret). |

```http
POST /webhooks/feexpay HTTP/1.1
Content-Type: application/json
x-feexpay-timestamp: 1762790400
x-feexpay-delivery-id: 9b2f6c1e-4d7a-4b8e-a1c3-5e6f7a8b9c0d
x-feexpay-event: transaction.successful
x-feexpay-signature: v1=eea4da5dab69a92b2daf07af713c0a474b7bcc1fdaf5b4bea38ff22b63300664

{"reference":"1e636dff-6b81-499e-bf8b-64b4a07a02a8","status":"SUCCESSFUL","amount":250}
```

#### How the signature is computed

FeexPay computes an **HMAC-SHA256**, encoded as lowercase hexadecimal, of the string made of the `x-feexpay-timestamp` value, a dot, the `x-feexpay-delivery-id` value, a dot, then the **raw body** of the request, byte for byte. The delivery id is part of the signature so it cannot be changed to bypass your deduplication.

```text
signature = HEX( HMAC_SHA256( secret, "{x-feexpay-timestamp}.{x-feexpay-delivery-id}.{raw_body}" ) )
```

#### Verify the signature on your server

1.  Read the **raw body** of the request (the bytes received), before any JSON parsing.
2.  Reject the request if `x-feexpay-timestamp` differs from your server time by more than **5 minutes**. This blocks replays of an intercepted request. Keep your server clock synchronized (NTP).
3.  Compute the expected signature with your secret: `HMAC_SHA256(secret, timestamp + "." + delivery_id + "." + raw_body)`, in hexadecimal.
4.  Split `x-feexpay-signature` on commas and accept the request if **at least one** `v1=…` value equals your signature. Compare in **constant time** (`crypto.timingSafeEqual`, `hash_equals`, `hmac.compare_digest`), never with `==`. Otherwise, respond `401`.
5.  Before processing the event, check that you have not already processed this `x-feexpay-delivery-id`. If you have, simply respond `200`.

**Most common mistake:** computing the signature over re-serialized JSON (for example `JSON.stringify(req.body)` after `express.json()`). Any change in whitespace or key order makes the signature invalid. Always use the raw body exactly as received.

#### Example — Node.js (Express)

```javascript
const crypto = require('crypto');
const express = require('express');

const app = express();
const WEBHOOK_SECRET = process.env.FEEXPAY_WEBHOOK_SECRET; // fxp_whsec_...
const TOLERANCE_SECONDS = 300;

function isValidFeexpaySignature(rawBody, headers, secret) {
  const timestamp = headers['x-feexpay-timestamp'];
  const deliveryId = headers['x-feexpay-delivery-id'];
  const signatureHeader = headers['x-feexpay-signature'];
  if (!timestamp || !deliveryId || !signatureHeader) return false;

  // Reject requests older than 5 minutes (replay protection)
  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(age) || age > TOLERANCE_SECONDS) return false;

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${timestamp}.${deliveryId}.`)
    .update(rawBody)
    .digest('hex');

  // During a rotation, the header holds one signature per valid secret
  return signatureHeader.split(',').some((part) => {
    const [version, value] = part.trim().split('=');
    if (version !== 'v1' || !value || value.length !== expected.length) return false;
    return crypto.timingSafeEqual(Buffer.from(value), Buffer.from(expected));
  });
}

// express.raw: req.body is the raw body (Buffer), required for the signature
app.post('/webhooks/feexpay', express.raw({ type: 'application/json' }), async (req, res) => {
  if (!isValidFeexpaySignature(req.body, req.headers, WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }

  // Process each delivery only once
  const deliveryId = req.headers['x-feexpay-delivery-id'];
  if (await alreadyProcessed(deliveryId)) return res.sendStatus(200);

  const event = JSON.parse(req.body.toString('utf8'));
  await processEvent(req.headers['x-feexpay-event'], event);
  await markAsProcessed(deliveryId);
  res.sendStatus(200);
});
```

#### Example — PHP

```php
<?php
$secret     = getenv('FEEXPAY_WEBHOOK_SECRET'); // fxp_whsec_...
$rawBody    = file_get_contents('php://input');
$timestamp  = $_SERVER['HTTP_X_FEEXPAY_TIMESTAMP'] ?? '';
$deliveryId = $_SERVER['HTTP_X_FEEXPAY_DELIVERY_ID'] ?? '';
$sigHeader  = $_SERVER['HTTP_X_FEEXPAY_SIGNATURE'] ?? '';

if ($timestamp === '' || $deliveryId === '' || $sigHeader === ''
    || abs(time() - (int) $timestamp) > 300) {
    http_response_code(401);
    exit('Invalid signature');
}

$expected = hash_hmac('sha256', $timestamp . '.' . $deliveryId . '.' . $rawBody, $secret);

$valid = false;
foreach (explode(',', $sigHeader) as $part) {
    [$version, $value] = array_pad(explode('=', trim($part), 2), 2, '');
    if ($version === 'v1' && hash_equals($expected, $value)) {
        $valid = true;
        break;
    }
}

if (!$valid) {
    http_response_code(401);
    exit('Invalid signature');
}

$event = json_decode($rawBody, true);
// Valid signature: process the event (skipping delivery ids already processed)
http_response_code(200);
```

#### Example — Python (Flask)

```python
import hashlib, hmac, os, time
from flask import Flask, request, abort

app = Flask(__name__)
SECRET = os.environ["FEEXPAY_WEBHOOK_SECRET"].encode()  # fxp_whsec_...

@app.post("/webhooks/feexpay")
def feexpay_webhook():
    raw_body = request.get_data()  # raw body, before any JSON parsing
    timestamp = request.headers.get("x-feexpay-timestamp", "")
    delivery_id = request.headers.get("x-feexpay-delivery-id", "")
    sig_header = request.headers.get("x-feexpay-signature", "")

    if not (timestamp.isdigit() and delivery_id and sig_header):
        abort(401)
    if abs(time.time() - int(timestamp)) > 300:
        abort(401)

    message = f"{timestamp}.{delivery_id}.".encode() + raw_body
    expected = hmac.new(SECRET, message, hashlib.sha256).hexdigest()

    valid = any(
        part.strip().startswith("v1=")
        and hmac.compare_digest(part.strip()[3:], expected)
        for part in sig_header.split(",")
    )
    if not valid:
        abort(401)

    event = request.get_json()
    # Valid signature: process the event (skipping delivery ids already processed)
    return "", 200
```

#### Test your implementation

With the values below, your code must produce exactly this signature. The body is used as is, with no spaces and no trailing newline.

```text
secret       = fxp_whsec_test_9vQ2kXr7LmN4pT8wZ1yB6cD3fH5jK0sA
timestamp    = 1762790400
delivery_id  = 9b2f6c1e-4d7a-4b8e-a1c3-5e6f7a8b9c0d
raw_body     = {"reference":"1e636dff-6b81-499e-bf8b-64b4a07a02a8","status":"SUCCESSFUL","amount":250}

expected signature = v1=eea4da5dab69a92b2daf07af713c0a474b7bcc1fdaf5b4bea38ff22b63300664
```

#### Rotate, revoke or disable the secret

-   **Rotate the secret**: a new secret is generated and shown only once. The old one stays valid for **24 hours**: during that window, each delivery carries two signatures (`v1=…,v1=…`). Deploy the new secret on your server within that window; your code needs no other change if it already accepts either signature.
-   **Revoke now**: use this if the secret has leaked. The old secret stops being used immediately; the next deliveries will fail verification until your server has the new secret.
-   **Disable signing**: the secret is deleted and the next deliveries are sent without signature headers. If your server requires a signature, it will reject them. Re-enabling generates a new secret.

#### Retries and expected response

-   If your server responds with `429`, a `5xx` error or is unreachable, FeexPay retries with the **same** `x-feexpay-delivery-id`, but a new `x-feexpay-timestamp` and therefore a new signature. Other `4xx` responses (including `401`) are treated as final and are not retried.
-   A manual resend (see below) creates a **new delivery** with a new `x-feexpay-delivery-id`. To be fully idempotent, also deduplicate on your business data (for example on `reference` + `status`).
-   Respond quickly with a `2xx` code (the timeout is 15 seconds), then run long processing in the background.
-   A webhook that has a secret is **never** sent unsigned. If you receive an unsigned request while signing is enabled for that URL, reject it.

### Resend a webhook

If your server did not receive or could not process a webhook, you can ask FeexPay to resend it for a given transaction:

```bash
GET https://api-v2.feexpay.me/api/transactions/resend-webhook/{reference}
```

A webhook can only be resent for a transaction in a final state, `SUCCESSFUL` or `FAILED`. The webhook is queued again and sent to the URL configured on your account, with the same payload as the original.

#### Response — webhook queued

```json
{
  "success": true,
  "message": "Webhook queued for delivery",
  "reference": "1e636dff-6b81-499e-bf8b-64b4a07a02a8",
  "status": "SUCCESSFUL",
  "trigger_code": "PAYMENT_API"
}
```

#### Response — error (400)

```json
{
  "success": false,
  "message": "Cannot resend webhook: transaction is PENDING (must be SUCCESSFUL or FAILED)",
  "reference": "1e636dff-6b81-499e-bf8b-64b4a07a02a8"
}
```

A 400 error is returned if the reference is unknown or if the transaction is still in progress (PENDING).
