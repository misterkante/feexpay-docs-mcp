---
id: webhook
title: "Webhook"
group: general
lang: fr
source: https://docs.feexpay.me/?section=webhook&version=v2
updated_at: 2026-11-13T14:52:32.783Z
---

# Webhook

### Généralités

Le webhook est une requête **POST** avec un body JSON, envoyée selon les évènements choisis, depuis FeexPay vers l’URL ou les URLs configurée(s) par le marchand sur son compte. Chaque fois que l’événement choisi se produit, la requête est déclenchée et envoie des informations à votre URL. C’est à vous d’écouter ces requêtes, de les récupérer et de les traiter pour faire vos contrôles côté serveur.

Le **payload** envoyé par le webhook est un objet JSON contenant les informations essentielles de la transaction : **reference**, **amount**, <code>status</code> et **callback\_info**, ainsi que d’autres champs utiles (nom, prénom, email, réseau, etc.).

#### Exemple de payload reçu pour une transaction échouée

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

#### Exemple de payload reçu pour une transaction réussie

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

Vous disposez du menu **[Webhook](https://app-v2.feexpay.me/webhook)** dans votre tableau de bord FeexPay. Vous pouvez y paramétrer une URL vers laquelle notre système enverra le payload. Ce payload est un JSON contenant la référence, le montant, le statut et le champ `callback_info`. Il est envoyé une fois qu’il y a un succès de paiement (ou selon les évènements activés sur votre compte).

Il s’agit d’une requête **POST** envoyée vers votre URL : vérifiez que votre endpoint accepte bien la méthode POST, qu’il retourne un code HTTP approprié (par ex. 200) et qu’il n’y a pas de middleware ou garde-fou qui bloque la réception du payload.

### Signature des webhooks (HMAC)

Chaque webhook peut être **signé** par FeexPay avec un secret propre à votre URL. En vérifiant cette signature, votre serveur s'assure que la requête vient bien de FeexPay, que son contenu n'a pas été modifié en chemin et qu'il ne s'agit pas d'un ancien envoi rejoué. Nous vous recommandons fortement de l'activer et de **refuser toute requête dont la signature est absente ou invalide**.

#### Activer la signature

-   **À la création du webhook** : dans le menu Webhook du tableau de bord, choisissez le mode de sécurité **Signature HMAC** (proposé par défaut). Un secret est généré et affiché dans la foulée.
-   **Sur un webhook existant** : ouvrez le détail du webhook, puis cliquez sur **Activer la signature** dans le bloc « Signature HMAC ».
-   Le secret commence par `fxp_whsec_`. Il s'utilise **tel quel, préfixe compris**, comme clé HMAC. Chaque URL de webhook a son propre secret.

Le secret n'est affiché **qu'une seule fois**. Copiez-le immédiatement et stockez-le côté serveur (variable d'environnement, gestionnaire de secrets). Ne l'exposez jamais dans une application front-end ou mobile, et ne le committez pas. Si vous le perdez, renouvelez-le.

#### En-têtes envoyés

Lorsque la signature est active, chaque requête POST contient les en-têtes suivants, en plus du body JSON habituel :

| En-tête | Description |
| --- | --- |
| `x-feexpay-timestamp` | Date d'envoi de la tentative, en secondes depuis l'époque Unix (UTC). Sert à rejeter les requêtes trop anciennes. |
| `x-feexpay-delivery-id` | Identifiant unique de l'envoi (UUID). Il reste **identique** lors des nouvelles tentatives automatiques d'un même envoi : utilisez-le pour ne traiter chaque envoi qu'une seule fois. |
| `x-feexpay-event` | Type d'évènement, par exemple `transaction.successful`, `transaction.failed`, `payout.successful` ou `payout.failed`. |
| `x-feexpay-signature` | Une ou plusieurs signatures au format `v1=&lt;hex&gt;`, séparées par des virgules. Il y en a deux pendant le renouvellement du secret (une par secret valide). |

```http
POST /webhooks/feexpay HTTP/1.1
Content-Type: application/json
x-feexpay-timestamp: 1762790400
x-feexpay-delivery-id: 9b2f6c1e-4d7a-4b8e-a1c3-5e6f7a8b9c0d
x-feexpay-event: transaction.successful
x-feexpay-signature: v1=eea4da5dab69a92b2daf07af713c0a474b7bcc1fdaf5b4bea38ff22b63300664

{"reference":"1e636dff-6b81-499e-bf8b-64b4a07a02a8","status":"SUCCESSFUL","amount":250}
```

#### Comment la signature est calculée

FeexPay calcule un **HMAC-SHA256**, encodé en hexadécimal minuscule, de la chaîne formée par la valeur de `x-feexpay-timestamp`, un point, la valeur de `x-feexpay-delivery-id`, un point, puis le **corps brut** de la requête, octet pour octet. Le delivery id est inclus dans la signature pour qu'il ne puisse pas être modifié afin de contourner votre déduplication.

```text
signature = HEX( HMAC_SHA256( secret, "{x-feexpay-timestamp}.{x-feexpay-delivery-id}.{raw_body}" ) )
```

#### Vérifier la signature sur votre serveur

1.  Lisez le **corps brut** de la requête (les octets reçus), avant tout parsing JSON.
2.  Rejetez la requête si `x-feexpay-timestamp` s'écarte de plus de **5 minutes** de l'heure de votre serveur. Cela bloque le rejeu d'une requête interceptée. Gardez l'horloge de votre serveur synchronisée (NTP).
3.  Recalculez la signature attendue avec votre secret : `HMAC_SHA256(secret, timestamp + "." + delivery_id + "." + corps_brut)`, en hexadécimal.
4.  Découpez `x-feexpay-signature` sur les virgules et acceptez la requête si **au moins une** valeur `v1=…` est égale à votre signature. Comparez en **temps constant** (`crypto.timingSafeEqual`, `hash_equals`, `hmac.compare_digest`), jamais avec `==`. Sinon, répondez `401`.
5.  Avant de traiter l'évènement, vérifiez que vous n'avez pas déjà traité ce `x-feexpay-delivery-id`. Si c'est le cas, répondez simplement `200`.

**Erreur la plus fréquente :** calculer la signature sur un JSON re-sérialisé (par exemple `JSON.stringify(req.body)` après `express.json()`). Le moindre changement d'espace ou d'ordre des clés rend la signature invalide. Utilisez toujours le corps brut tel qu'il a été reçu.

#### Exemple — Node.js (Express)

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

  // Rejeter les requêtes de plus de 5 minutes (protection contre le rejeu)
  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(age) || age > TOLERANCE_SECONDS) return false;

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${timestamp}.${deliveryId}.`)
    .update(rawBody)
    .digest('hex');

  // Pendant un renouvellement, l'en-tête contient une signature par secret valide
  return signatureHeader.split(',').some((part) => {
    const [version, value] = part.trim().split('=');
    if (version !== 'v1' || !value || value.length !== expected.length) return false;
    return crypto.timingSafeEqual(Buffer.from(value), Buffer.from(expected));
  });
}

// express.raw : req.body est le corps brut (Buffer), indispensable pour la signature
app.post('/webhooks/feexpay', express.raw({ type: 'application/json' }), async (req, res) => {
  if (!isValidFeexpaySignature(req.body, req.headers, WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }

  // Ne traiter chaque envoi qu'une seule fois
  const deliveryId = req.headers['x-feexpay-delivery-id'];
  if (await alreadyProcessed(deliveryId)) return res.sendStatus(200);

  const event = JSON.parse(req.body.toString('utf8'));
  await processEvent(req.headers['x-feexpay-event'], event);
  await markAsProcessed(deliveryId);
  res.sendStatus(200);
});
```

#### Exemple — PHP

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
// Signature valide : traiter l'évènement (en ignorant les delivery id déjà traités)
http_response_code(200);
```

#### Exemple — Python (Flask)

```python
import hashlib, hmac, os, time
from flask import Flask, request, abort

app = Flask(__name__)
SECRET = os.environ["FEEXPAY_WEBHOOK_SECRET"].encode()  # fxp_whsec_...

@app.post("/webhooks/feexpay")
def feexpay_webhook():
    raw_body = request.get_data()  # corps brut, avant tout parsing JSON
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
    # Signature valide : traiter l'évènement (en ignorant les delivery id déjà traités)
    return "", 200
```

#### Tester votre implémentation

Avec les valeurs ci-dessous, votre code doit obtenir exactement cette signature. Le corps est pris tel quel, sans espace ni retour à la ligne final.

```text
secret       = fxp_whsec_test_9vQ2kXr7LmN4pT8wZ1yB6cD3fH5jK0sA
timestamp    = 1762790400
delivery_id  = 9b2f6c1e-4d7a-4b8e-a1c3-5e6f7a8b9c0d
raw_body     = {"reference":"1e636dff-6b81-499e-bf8b-64b4a07a02a8","status":"SUCCESSFUL","amount":250}

signature attendue = v1=eea4da5dab69a92b2daf07af713c0a474b7bcc1fdaf5b4bea38ff22b63300664
```

#### Renouveler, révoquer ou désactiver le secret

-   **Renouveler le secret** : un nouveau secret est généré et affiché une seule fois. L'ancien reste valide pendant **24 heures** : pendant ce délai, chaque envoi porte deux signatures (`v1=…,v1=…`). Déployez le nouveau secret sur votre serveur dans ce délai ; votre code n'a rien d'autre à changer s'il accepte déjà l'une ou l'autre des signatures.
-   **Révoquer maintenant** : à utiliser si le secret a fuité. L'ancien secret cesse immédiatement d'être utilisé ; les envois suivants échoueront à la vérification tant que votre serveur n'aura pas le nouveau secret.
-   **Désactiver la signature** : le secret est supprimé et les envois suivants partent sans en-têtes de signature. Si votre serveur exige une signature, il les refusera. Une réactivation génère un nouveau secret.

#### Nouvelles tentatives et réponse attendue

-   Si votre serveur répond `429`, une erreur `5xx` ou est injoignable, FeexPay fait une nouvelle tentative avec le **même** `x-feexpay-delivery-id`, mais un nouveau `x-feexpay-timestamp` et donc une nouvelle signature. Les autres réponses `4xx` (dont `401`) sont considérées comme définitives et ne sont pas retentées.
-   Un renvoi manuel (voir ci-dessous) crée un **nouvel envoi** avec un nouveau `x-feexpay-delivery-id`. Pour être totalement idempotent, dédupliquez aussi côté métier (par exemple sur `reference` + `status`).
-   Répondez rapidement par un code `2xx` (le délai d'attente est de 15 secondes), puis effectuez les traitements longs en tâche de fond.
-   Un webhook qui a un secret n'est **jamais** envoyé sans signature. Si vous recevez une requête non signée alors que la signature est active pour cette URL, rejetez-la.

### Renvoyer un webhook

Si votre serveur n'a pas reçu ou n'a pas pu traiter un webhook, vous pouvez demander à FeexPay de le renvoyer pour une transaction donnée :

```bash
GET https://api-v2.feexpay.me/api/transactions/resend-webhook/{reference}
```

Le renvoi n'est possible que pour une transaction à l'état final `SUCCESSFUL` ou `FAILED`. Le webhook est remis en file d'attente puis envoyé à l'URL configurée sur votre compte, avec le même payload que l'envoi initial.

#### Réponse — webhook mis en file d'attente

```json
{
  "success": true,
  "message": "Webhook queued for delivery",
  "reference": "1e636dff-6b81-499e-bf8b-64b4a07a02a8",
  "status": "SUCCESSFUL",
  "trigger_code": "PAYMENT_API"
}
```

#### Réponse — erreur (400)

```json
{
  "success": false,
  "message": "Cannot resend webhook: transaction is PENDING (must be SUCCESSFUL or FAILED)",
  "reference": "1e636dff-6b81-499e-bf8b-64b4a07a02a8"
}
```

Une erreur 400 est renvoyée si la référence est inconnue ou si la transaction est encore en cours (PENDING).
