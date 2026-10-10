---
id: services-payout-method
title: "Feex Method"
group: services
lang: en
source: https://docs.feexpay.me/?section=services-payout-method&version=v2
updated_at: 2026-10-10T13:29:12.014Z
---

# Feex Method

### Creating a FeexLink payment link via API

Follow these very simple steps to create a FeexLink payment link via API:

1.  Create a FeexPay account. If you already have an account, proceed to the next step.
2.  The POST request URL is:`https://api-v2.feexpay.me/api/feexlinks/generate`

Authorization header required

In your request headers, add the Authorization key with the value Bearer "your-api-key" (available in the Developer menu of your FeexPay account). Without this header, your request will be rejected.

#### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| shop | Required | Shop ID (Developer menu on FeexPay) | Ayg9lkjkhurIvNp |
| amount | Required | Transaction amount (minimum 50) | 100 |
| description | Required | Transaction description (no special characters) | FeexPay |
| paymentMethod | Required | Payment method (MOBILE, CARD, ALL) | MOBILE |
| range | Required | Number of uses (minimum 1) | 2 |
| expireIn | Required | Expiration time in minutes | 2 |
| callback\_url | Optional | Redirect URL after successful payment | https://app-v2.feexpay.me/feexmethod/success |
| callback\_error | Optional | Redirect URL after failed payment | https://app-v2.feexpay.me/feexmethod/error |

**paymentMethod :** paymentMethod: use MOBILE for Mobile Money only, CARD for bank cards only, or ALL to accept both payment methods.

#### Response (example)

```json
{
  "urlPay": "https://link.feexpay.me/2Cskdj&É"
}
```

### FeexMarket

With FeexMarket, quickly and securely manage payments for multiple items or products at once by creating your online store.

Are you interested? [Try here](https://app-v2.feexpay.me/feexmarket).

### FeexLink

**FeexLink** FeexLink allows you to securely create payment links that you can send to your customers by email or any other channel of your choice. You can use it for:

-   Direct item sale.
-   Service payment.
-   Bill payment.
-   Ticket payment.

Are you interested? [Try here](https://app-v2.feexpay.me/feexLinks).

### QuickLink

**QuickLink** QuickLink is a variant of FeexLink that allows you to quickly generate payment links and QR codes without defining an amount in advance. The customer enters the amount themselves at the time of payment, which is ideal for:

-   Free collection in store or at counter.
-   Payments where the amount varies from one customer to another.
-   Donations, contributions, collections, etc.

The customer can either scan the QR code or click on the QuickLink link to access the payment page and enter the desired amount.

### FeexCorporate

FeexCorporate makes life easier by making mass payments to your employees, customers, suppliers, etc.

Are you interested? [Try here](https://app-v2.feexpay.me/feexcorporate).

### FeexPage

With FeexPage, customize your payment pages and offer a better experience to your customers.

Are you interested? [Click here](https://app-v2.feexpay.me/feexpage).
