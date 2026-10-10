---
id: php-sdk
title: "PHP"
group: sdks
lang: fr
source: https://docs.feexpay.me/?section=php-sdk&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# PHP

Suivez ces quelques étapes très simples pour intégrer FeexPay dans votre application développée avec PHP.

### 1\. Structure recommandée

```bash
src/
vendor/
```

### 2\. Installer avec Composer

```bash
composer require feexpay/feexpay-php:^3.0
```

Version 3 du SDK : PHP ≥ 7.1 avec les extensions `curl` et `json`. Le SDK utilise l'API v2 (`https://api-v2.feexpay.me`) ; les versions antérieures ne fonctionnent plus, mettez à jour.

### 3\. Utilisation via les méthodes du SDK

Pour les réseaux mobiles **MTN, MOOV, CELTIIS BJ, MOOV TG, TOGOCOM TG, MTN CI, MTN CG, MOOV CI, FREE SN**, utilisez `paiementLocal`. Cette méthode déclenche un push USSD côté client.

NB: seuls les réseaux listés ci-dessus sont pris en charge par `paiementLocal`. Un autre réseau renverra une erreur.

```php
$skeleton = new Feexpay\FeexpayPhp\FeexpayClass("shop's id", "token key API", "callback_url", "mode (LIVE, SANDBOX)");

// paiementLocal(amount, phoneNumber, network, fullname, email, callback_info, custom_id, otp = "")
$reference = $skeleton->paiementLocal(
  1000,
  "2290166000000",
  "MTN", // MTN, MOOV, CELTIIS BJ, MOOV TG, TOGOCOM TG, MTN CI, MTN CG, MOOV CI, FREE SN
  "Jon Doe",
  "jondoe@gmail.com",
  json_encode(["order_id" => "1042"]), // callback_info (renvoyé par le webhook)
  "CMD_20260613_001"                    // custom_id : référence unique de votre commande
);

if ($reference === null) {
  // Raison de l'échec renvoyée par l'API
  echo $skeleton->getLastError()["message"];
  exit();
}

$status = $skeleton->getPaiementStatus($reference);

var_dump($status);
```

`paiementLocal` renvoie la référence de la transaction, ou `null` en cas d'échec : la raison est alors disponible via `getLastError()`. La requête attend que le client valide le paiement sur son téléphone.

`getPaiementStatus($reference)` renvoie un tableau `["amount", "clientNum", "status", "reference"]`, où `status` vaut `SUCCESSFUL`, `PENDING` ou `FAILED`.

### 4\. Paiement via URL (redirection)

Pour les réseaux **ORANGE SN, WAVE SN, ORANGE CI, WAVE CI**, utilisez `requestToPayWeb`. Cette méthode retourne une URL de paiement vers laquelle rediriger le client.

NB: seuls les réseaux listés sont acceptés par `requestToPayWeb`.

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
  exit("Paiement refusé");
}

$reference = $response["reference"];
$url = $response["payment_url"]; // URL vers laquelle rediriger le client

$status = $skeleton->getPaiementStatus($reference);

var_dump($status);
```

`requestToPayWeb` renvoie `["payment_url", "reference", "order_id"]`, ou `false` si les paramètres sont refusés.

### 5\. Paiement par cartes (VISA / MASTERCARD)

```php
// paiementCard(amount, currency, firstName, lastName, email, phoneNumber, city, zip, country)
$responseCard = $skeleton->paiementCard(
  1000,
  "XOF",          // XOF, USD, EUR
  "Jon",
  "Doe",
  "jondoe@gmail.com",
  "22966000000",  // indicatif + numéro
  "Cotonou",      // ville
  "00229",        // code postal
  "BJ"            // pays : code ISO à 2 lettres
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

Attention : `callback_url` n'est pas utilisé quand vous appelez directement les méthodes du SDK. Vous pouvez passer "" pour cet argument. Respectez l'ordre exact des paramètres. Pour `paiementCard`, tous les arguments sont obligatoires et `country` est un code ISO à 2 lettres (`BJ`, `CI`, `SN`…). La méthode renvoie `["url", "payment_url", "reference"]`, ou `null` en cas d'échec (raison via `getLastError()`).

### 6\. Bouton de paiement côté interface (ex: Laravel)

Ajoutez un bouton et initialisez le SDK pour afficher la modale de paiement.

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

#### Explication des paramètres

-   `$price` : Montant de la transaction
-   `$id` : Identifiant de votre boutique FeexPay
-   `$token` : Clé d'API liée à votre compte FeexPay
-   `$callback_url` : URL de redirection après paiement réussi
-   `$mode` : SANDBOX (test) ou LIVE (production)
-   `$error_callback_url` : (Optionnel, 5e argument du constructeur) URL de redirection après un paiement échoué

`init()` insère lui-même le script du SDK JavaScript : inutile de l'ajouter dans le `&lt;head&gt;`.

Pour utiliser un bouton personnalisé :

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
    $result = $feexpayclass->init($price, "button_payee", true, "custom_button", "Commande 001")
@endphp
```

**Note:**

-   `true` : utiliser un bouton personnalisé
-   `custom_button` : identifiant (id) du bouton HTML
-   `"Commande 001"` : description de la transaction (optionnel, 40 caractères maximum)

### 7\. Modal de paiement

![Modal de paiement](https://docs.feexpay.me/sdk/sdkjs.png)

 [Précédent

React SDK]  [Suivant

Flutter & Android SDK]
