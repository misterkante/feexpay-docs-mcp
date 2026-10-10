---
id: api-rest-card
title: "Card payment collection"
group: api
lang: en
source: https://docs.feexpay.me/?section=api-rest-card&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# Card payment collection

This guide explains how to accept credit card payments through the FeexPay API. Card collections use a dedicated endpoint, separate from Mobile Money collections, because the customer completes the payment themselves on a FeexPay checkout page.

Activation is mandatory

No merchant can accept card payments before submitting and getting their KYB file approved. Activation is a prerequisite for card collection.

## Prerequisite: card KYB activation

The card collection endpoint can only be used once your shop KYB file has been approved. Until activation is granted, calls to this endpoint are rejected. Please submit and validate your KYB form at the URL below: [https://app-v2.feexpay.me/card-kyb](https://app-v2.feexpay.me/card-kyb)

## How a card collection works

Unlike Mobile Money, the transaction is not confirmed from the customer's phone: the customer is redirected to a checkout page hosted by FeexPay, where they enter their card details.

1.  Call the card collection endpoint from your server with the customer details
2.  FeexPay registers the transaction and returns the operation reference along with the payment URL (payment\_url)
3.  Redirect the customer to the payment URL received
4.  The customer enters their card details on the FeexPay checkout page
5.  The payment is authenticated via 3D Secure with the issuing bank
6.  FeexPay notifies the transaction result by webhook

Payment link expiry

The payment URL remains valid until the expires\_at date returned in the response. After that deadline, the transaction is abandoned and its status becomes FAILED.

## Initiate a card collection

### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/init`

### Method

POST

### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

### Request body

All fields are required, except description and callback\_info.

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| shop | Required | Shop identifier (available in the Developers menu of your dashboard) | Ayg9lkjkhurIvNp |
| amount | Required | Transaction amount, sent as a string | 100 |
| currency | Required | Transaction currency (XOF) | XOF |
| first\_name | Required | Customer first name, cardholder | John |
| last\_name | Required | Customer last name, cardholder | DOE |
| email | Required | Customer email address, used to send the receipt | johndoe@gmail.com |
| phoneNumber | Required | Customer phone number with country code | 2290160000000 |
| city | Required | Customer city of residence | Cotonou |
| zip | Required | Customer postal code | 00229 |
| country | Required | Customer ISO country code (e.g. BJ, CI, SN, TG) | BJ |
| description | Optional | A description of the transaction | Achat de produit |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

### Example (JavaScript)

```javascript
const response = await axios({
  url: 'https://api-v2.feexpay.me/api/transactions/public/requesttopay/init',
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: '100',
    currency: 'XOF',
    first_name: 'John',
    last_name: 'DOE',
    email: 'johndoe@gmail.com',
    phoneNumber: '2290160000000',
    city: 'Cotonou',
    zip: '00229',
    country: 'BJ',
    description: 'Achat de produit',
    callback_info: 'order_12345',
  },
});

// Rediriger le client vers la page de paiement
window.location.href = response.data.payment_url;
```

### Response

```json
{
  "reference": "ZYzcn5VhSYJ1",
  "message": "Accepted",
  "payment_url": "https://checkout.feexpay.me/checkout/card-details?ref=ZYzcn5VhSYJ1",
  "status": "PENDING",
  "description": "",
  "expires_at": "2026-09-30T19:11:20.182Z"
}
```

| Field | Description |
| --- | --- |
| reference | Unique transaction identifier, keep it for tracking |
| message | Confirmation that the request was accepted |
| payment\_url | URL of the checkout page where the customer must pay |
| status | Initial transaction status, always PENDING on creation |
| description | Optional transaction description |
| expires\_at | Expiry date and time of the payment\_url |

## Checkout page

The customer enters all their details on a checkout page hosted by FeexPay. No card data ever passes through your website.

### Card details page

On this page the customer enters the card number, expiry date and CVV, then validates the payment through 3D Secure.

![Card checkout page](https://docs.feexpay.me/card/checkout.png)

FeexPay card checkout page

Checkout URL structure

The returned payment\_url points to [https://checkout.feexpay.me/checkout/card-details](https://checkout.feexpay.me/checkout/card-details)

### Payment receipt

Once the payment is approved, a receipt is generated for the customer and sent to the email address provided during the collection.

![Card payment receipt](https://docs.feexpay.me/card/receipt.png)

Card payment receipt
