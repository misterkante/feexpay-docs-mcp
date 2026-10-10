---
id: php-sdk
title: "PHP"
group: sdks
lang: en
source: https://docs.feexpay.me/?section=php-sdk&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# PHP

Follow these very simple steps to integrate FeexPay into your PHP application.

### 1\. Recommended structure

```bash
src/
vendor/
```

### 2\. Install with Composer

```bash
composer require feexpay/feexpay-php:^3.0
```

SDK version 3: PHP ≥ 7.1 with the `curl` and `json` extensions. The SDK uses API v2 (`https://api-v2.feexpay.me`); earlier versions no longer work, please upgrade.

### 3\. Using SDK methods

For mobile networks **MTN, MOOV, CELTIIS BJ, MOOV TG, TOGOCOM TG, MTN CI, MTN CG, MOOV CI, FREE SN**, use `paiementLocal`. This method triggers a USSD push on the customer side.

Note: only the networks listed above are supported by `paiementLocal`. Any other network will return an error.

```php
$skeleton = new Feexpay\FeexpayPhp\FeexpayClass("shop's id", "token key API", "callback_url", "mode (LIVE, SANDBOX)");

// paiementLocal(amount, phoneNumber, network, fullname, email, callback_info, custom_id, otp = "")
$reference = $skeleton->paiementLocal(
  1000,
  "2290166000000",
  "MTN", // MTN, MOOV, CELTIIS BJ, MOOV TG, TOGOCOM TG, MTN CI, MTN CG, MOOV CI, FREE SN
  "Jon Doe",
  "jondoe@gmail.com",
  json_encode(["order_id" => "1042"]), // callback_info (sent back by the webhook)
  "CMD_20260613_001"                    // custom_id: unique reference of your order
);

if ($reference === null) {
  // Failure reason returned by the API
  echo $skeleton->getLastError()["message"];
  exit();
}

$status = $skeleton->getPaiementStatus($reference);

var_dump($status);
```

`paiementLocal` returns the transaction reference, or `null` on failure: the reason is then available through `getLastError()`. The request waits for the customer to approve the payment on their phone.

`getPaiementStatus($reference)` returns an array `["amount", "clientNum", "status", "reference"]`, where `status` is `SUCCESSFUL`, `PENDING` or `FAILED`.

### 4\. Payment via URL (redirect)

For networks **ORANGE SN, WAVE SN, ORANGE CI, WAVE CI**, use `requestToPayWeb`. This method returns a payment URL to which you should redirect the customer.

Note: only the listed networks are accepted by `requestToPayWeb`.

```php
$skeleton = new Feexpay\FeexpayPhp\FeexpayClass("shop's id", "token key API", "callback_url", "LIVE");

// requestToPayWeb(amount, phoneNumber, network, fullname, email, callback_info, custom_id, cancel_url, return_url)
$response = $skeleton->requestToPayWeb(
  1000,
  "22670168713",
  "ORANGE BF", // ORANGE SN, WAVE SN, ORANGE CI, WAVE CI
  "Jon Doe",
  "jondoe@gmail.com",
  json_encode(["order_id" => "1042"]), // callback_info
  "CMD_20260613_002",                   // custom_id
  "https://feexpay.me",                 // cancel_url
  "https://app-v2.feexpay.me"                 // return_url
);

if ($response === false) {
  exit("Payment refused");
}

$reference = $response["reference"];
$url = $response["payment_url"]; // URL to redirect the customer to

$status = $skeleton->getPaiementStatus($reference);

var_dump($status);
```

`requestToPayWeb` returns `["payment_url", "reference", "order_id"]`, or `false` if the parameters are rejected.

### 5\. Card payment (VISA / MASTERCARD)

```php
// paiementCard(amount, currency, firstName, lastName, email, phoneNumber, city, zip, country)
$responseCard = $skeleton->paiementCard(
  1000,
  "XOF",          // XOF, USD, EUR
  "Jon",
  "Doe",
  "jondoe@gmail.com",
  "22966000000",  // country code + number
  "Cotonou",      // city
  "00229",        // postal code
  "BJ"            // country: 2-letter ISO code
);

if ($responseCard === null) {
  echo $skeleton->getLastError()["message"];
  exit();
}

$reference = $responseCard["reference"];
$redirectUrl = $responseCard["url"];

header("Location: $redirectUrl");
exit();
```

Warning: `callback_url` is not used when you call SDK methods directly. You can pass "" for this argument. Keep the exact parameter order. For `paiementCard`, all arguments are required and `country` is a 2-letter ISO code (`BJ`, `CI`, `SN`…). The method returns `["url", "payment_url", "reference"]`, or `null` on failure (reason via `getLastError()`).

### 6\. UI-side payment button (e.g., Laravel)

Add a button and initialize the SDK to display the payment modal.

```html
<div id='button_payee'></div>
@php
    $price = 50;
    $id= "shop's id";
    $token= "token key api";
    $callback_url= 'https://www.google.com';
    $mode='LIVE';
    $feexpayclass = new Feexpay\FeexpayPhp\FeexpayClass($id, $token, $callback_url, $mode);
    $result = $feexpayclass->init($price, "button_payee")
@endphp
```

#### Parameter explanation

-   `$price` : Transaction amount
-   `$id` : Your FeexPay shop identifier
-   `$token` : API key linked to your FeexPay account
-   `$callback_url` : Redirect URL after successful payment
-   `$mode` : SANDBOX (test) or LIVE (production)
-   `$error_callback_url` : (Optional, 5th constructor argument) Redirect URL after a failed payment

`init()` injects the JavaScript SDK script itself: no need to add it to the `&lt;head&gt;`.

To use a custom button:

```html
<div id='button_payee'></div>
<button id="custom_button">Payer</button>

@php
    $price = 50;
    $id= "shop's id";
    $token= "token key api";
    $callback_url= 'https://www.google.com';
    $mode='LIVE';
    $error_callback_url = 'https://feexpay.me/error';
    $feexpayclass = new Feexpay\FeexpayPhp\FeexpayClass($id, $token, $callback_url, $mode, $error_callback_url);
    // init($amount, $componentId, $use_custom_button, $custom_button_id, $description, $callback_info)
    $result = $feexpayclass->init($price, "button_payee", true, "custom_button", "Order 001")
@endphp
```

**Note:**

-   `true` : use a custom button
-   `custom_button` : HTML button identifier (id)
-   `"Order 001"` : transaction description (optional, 40 characters maximum)

### 7\. Payment modal

![Payment modal](https://docs.feexpay.me/sdk/sdkjs.png)

 [Previous

React SDK]  [Next

Flutter & Android SDK]
