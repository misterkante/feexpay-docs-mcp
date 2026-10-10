---
id: javascript-sdk
title: "JavaScript"
group: sdks
lang: en
source: https://docs.feexpay.me/?section=javascript-sdk&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# JavaScript

Follow these very simple steps to integrate FeexPay into your JavaScript application.

### 1\. Create a FeexPay account

If you already have an account, proceed to the next step.

### 2\. Add this code in the head tag

```html
<script src="https://api-v2.feexpay.me/feexpay-javascript-sdk/index.js"></script>
```

### 3\. Add a container in the body

Add this code in your website body (or replace it with the ID you set in `id_custom_button`, then initialize using the same ID).

```html
<div id="render"></div>
```

Important

Without this snippet, you won’t be able to initialize the payment page script on your website.

### 4\. Initialize and add a payment button

Place this code inside a <script></script> tag (or in a JS file loaded on the page).

```javascript
FeexPayButton.init("render", {
  // ID de votre boutique FeexPay
  id: "Ayg9lkjkhurIvNp",

  // Montant de la transaction en XOF
  amount: 100,

  // Token API sécurisé (SANDBOX ou LIVE)
  token: "fp_HHNoQGt9Vn8KpZoLaBkGDsEDKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7Ptlytctiked",

  // Fonction de rappel après le paiement
  callback: (response) => {
    console.log("response");
  },

  // (Optionnel) URL de redirection après paiement (sans callback)
  callback_url: "https://feexpay.me",

  // (Optionnel) URL de redirection après un paiement échoué (sans callback)
  error_callback_url: "https://feexpay.me/error",

  // Mode SANDBOX pour test ou LIVE pour production
  mode: "LIVE",

  // Utiliser cette option si vous souhaitez utiliser un bouton personnalisé
  //custom_button: true,

  // ID du bouton personnalisé dans le HTML si vous souhaitez utiliser un bouton personnalisé
  //id_custom_button: "btn-payer",

  // Référence personnalisée (chaîne aléatoire unique)
  custom_id: "CMD_20250613_001",

  // Description de la transaction
  description: "Paiement de la commande #001",

  // (Optionnel) Type de paiement : MOBILE/CARD/WALLET
  //case: "MOBILE",

  // (Optionnel) Champs à cacher
  //fields_to_hide: ["email", "name"],

  // (Optionnel) Filtrer les réseaux affichés par pays
  //networks: {
  //  "Benin": ["MTN", "MOOV"],
  //  "Senegal": ["WAVE", "ORANGE"],
  //  "Côte d'Ivoire": ["MTN", "ORANGE", "WAVE"],
  //  "Burkina Faso": ["ORANGE", "MOOV"],
  //},
});
```

### 5\. Payment modal

![Payment modal](https://docs.feexpay.me/sdk/sdkjs.png)

### FeexPayButton.init() parameters

-   `id` : Your shop identifier.
-   `amount` : Amount to pay (required).
-   `token` : Your API key.
-   `callback` : Function called after payment.
-   `callback_url` : Return URL after payment.
-   `error_callback_url` : Return URL if payment fails.
-   `currency` : Transaction currency (CAD, USD only for card payments).
-   `mode` : **SANDBOX** (test) or **LIVE** (production).
-   `custom_button` : `true` for a custom button, otherwise `false`.
-   `id_custom_button` : ID of the custom HTML button that triggers the payment.
-   `custom_id` : Random string to reference and track a transaction.
-   `case` : Payment type
    -   `MOBILE` : Mobile payment only
    -   `CARD` : Card payment only
    -   `WALLET` : Wallet payment only
    -   Leave empty to show all three
-   `description` : Transaction description (optional, 40 characters maximum).
-   `fields_to_hide` : Fields to hide.
-   `networks` : (Optional) Filter the networks displayed in the modal by country. Use the exact names listed below.
    
    | Country | Available networks |
    | --- | --- |
    | Benin | MTN, MOOV, CELTIIS, CORIS |
    | Togo | MOOV, TOGOCOM |
    | Côte d'Ivoire | MTN, ORANGE, MOOV, WAVE |
    | Senegal | ORANGE, WAVE, FREE |
    | Burkina Faso | ORANGE, MOOV, WAVE |
    | Congo-Brazzaville | MTN |
    

 [Next

React SDK]
