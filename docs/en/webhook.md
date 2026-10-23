---
id: webhook
title: "Webhook"
group: general
lang: en
source: https://docs.feexpay.me/?section=webhook&version=v2
updated_at: 2026-10-23T10:08:13.250Z
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
