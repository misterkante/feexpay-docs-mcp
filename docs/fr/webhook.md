---
id: webhook
title: "Webhook"
group: general
lang: fr
source: https://docs.feexpay.me/?section=webhook&version=v2
updated_at: 2026-10-23T10:08:13.250Z
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
