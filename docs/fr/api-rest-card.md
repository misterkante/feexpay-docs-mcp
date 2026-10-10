---
id: api-rest-card
title: "Collecte par carte bancaire"
group: api
lang: fr
source: https://docs.feexpay.me/?section=api-rest-card&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# Collecte par carte bancaire

Ce guide explique comment accepter les paiements par carte bancaire via l'API FeexPay. La collecte par carte utilise un endpoint dédié, distinct des collections Mobile Money, car le client finalise lui-même le paiement sur une page de checkout FeexPay.

Activation obligatoire

Aucun marchand ne peut encaisser par carte avant d'avoir soumis et validé son dossier KYB. L'activation est un préalable indispensable à la collecte par carte.

## Prérequis: activation du KYB carte

L'endpoint de collecte par carte n'est utilisable qu'après validation du dossier KYB de votre boutique. Tant que l'activation n'est pas faite, les appels à cet endpoint sont refusés. Veuillez faire la validation du formulaire à l'URL ci : [https://app-v2.feexpay.me/card-kyb](https://app-v2.feexpay.me/card-kyb)

## Déroulement de la collecte par carte

Contrairement au Mobile Money, la transaction n'est pas validée depuis le téléphone du client : celui-ci est redirigé vers une page de checkout hébergée par FeexPay, sur laquelle il saisit les données de sa carte.

1.  Appel de l'endpoint de collecte par carte depuis votre serveur, avec les informations du client
2.  Enregistrement de la transaction par FeexPay, qui retourne la référence de l'opération et l'URL de paiement (payment\_url)
3.  Redirection du client vers l'URL de paiement reçue
4.  Saisie des données de la carte par le client sur la page de checkout FeexPay
5.  Authentification du paiement par 3D Secure auprès de la banque émettrice
6.  Notification du résultat de la transaction par FeexPay au moyen d'un webhook

Expiration du lien de paiement

L'URL de paiement reste valide jusqu'à la date expires\_at retournée dans la réponse. Au-delà de ce délai, la transaction est abandonnée et son statut passe à FAILED.

## Initier une collecte par carte

### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/init`

### Méthode

POST

### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

### Corps de la requête

Tous les champs sont obligatoires, à l'exception de description et callback\_info.

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| shop | Obligatoire | Identifiant de la boutique (visible dans le menu Développeurs du tableau de bord) | Ayg9lkjkhurIvNp |
| amount | Obligatoire | Montant de la transaction, envoyé en chaîne de caractères | 100 |
| currency | Obligatoire | Devise de la transaction (XOF) | XOF |
| first\_name | Obligatoire | Prénom du client, titulaire de la carte | John |
| last\_name | Obligatoire | Nom du client, titulaire de la carte | DOE |
| email | Obligatoire | Adresse email du client, utilisée pour l'envoi du reçu | johndoe@gmail.com |
| phoneNumber | Obligatoire | Numéro de téléphone du client avec indicatif pays | 2290160000000 |
| city | Obligatoire | Ville de résidence du client | Cotonou |
| zip | Obligatoire | Code postal du client | 00229 |
| country | Obligatoire | Code pays ISO du client (ex: BJ, CI, SN, TG) | BJ |
| description | Optionnel | Une description sur la transaction | Achat de produit |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

### Exemple (JavaScript)

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

### Réponse de la requête

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

| Champ | Description |
| --- | --- |
| reference | Identifiant unique de la transaction, à conserver pour le suivi |
| message | Confirmation de l'acceptation de la requête |
| payment\_url | URL de la page de checkout sur laquelle le client doit payer |
| status | Statut initial de la transaction, toujours PENDING à la création |
| description | Description éventuelle de la transaction |
| expires\_at | Date et heure d'expiration de la payment\_url |

## Page de checkout

Le client effectue la totalité de sa saisie sur une page de checkout hébergée par FeexPay. Aucune donnée de carte ne transite par votre site.

### Page de saisie des informations de carte

Sur cette page, le client saisit le numéro de carte, la date d'expiration et le cryptogramme visuel, puis valide le paiement via 3D Secure.

![Page de checkout par carte](https://docs.feexpay.me/card/checkout.png)

Page de checkout par carte FeexPay

Structure de l'URL de checkout

La payment\_url renvoyée pointe vers [https://checkout.feexpay.me/checkout/card-details](https://checkout.feexpay.me/checkout/card-details)

### Reçu de paiement

Une fois le paiement validé, un reçu est généré pour le client et envoyé à l'adresse email communiquée lors de la collecte.

![Reçu de paiement par carte](https://docs.feexpay.me/card/receipt.png)

Reçu de paiement par carte
