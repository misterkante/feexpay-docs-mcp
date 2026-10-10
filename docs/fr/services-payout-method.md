---
id: services-payout-method
title: "Feex Methode"
group: services
lang: fr
source: https://docs.feexpay.me/?section=services-payout-method&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# Feex Methode

### Création d'un lien de paiement FeexLink par API

Suivez ces quelques étapes très simples pour créer un lien de paiement FeexLink par API :

1.  Créer un compte FeexPay. Si vous avez déjà un compte, passez à l'étape suivante.
2.  L'URL de la requête de type POST est :`https://api-v2.feexpay.me/api/feexlinks/generate`

Entête Authorization obligatoire

Dans l'entête de votre requête (headers), ajoutez la clé Authorization avec la valeur Bearer "votre-api-key" (récupérable dans le menu Développeur de votre compte FeexPay). Sans cet header, votre requête sera refusée.

#### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| amount | Obligatoire | Montant de la transaction (minimum 50) | 100 |
| description | Obligatoire | Description de la transaction (sans caractères spéciaux) | FeexPay |
| paymentMethod | Obligatoire | Moyen de paiement (MOBILE, CARD, ALL) | MOBILE |
| range | Obligatoire | Nombre d'utilisations (minimum 1) | 2 |
| expireIn | Obligatoire | Durée d'expiration en minutes | 2 |
| callback\_url | Optionnel | URL de redirection après un paiement réussi | https://app-v2.feexpay.me/feexmethod/success |
| callback\_error | Optionnel | URL de redirection après un paiement échoué | https://app-v2.feexpay.me/feexmethod/error |

**paymentMethod :** paymentMethod : utilisez MOBILE pour Mobile Money uniquement, CARD pour cartes bancaires uniquement, ou ALL pour accepter les deux modes de paiement.

#### Réponse (exemple)

```json
{
  "urlPay": "https://link.feexpay.me/2Cskdj&É"
}
```

### FeexMarket

Avec FeexMarket, gérez rapidement et de façon sécurisée les paiements de plusieurs articles ou produits à la fois en créant votre boutique en ligne.

Êtes-vous intéressé ? [Essayer ici](https://app-v2.feexpay.me/feexmarket).

### FeexLink

**FeexLink** FeexLink vous permet de créer des liens de paiement en toute sécurité que vous pouvez envoyer à vos clients par e-mail ou par tout autre canal de votre choix. Vous pouvez l'utiliser pour :

-   Vente directe d'article.
-   Paiement de service.
-   Règlement de facture.
-   Paiement de tickets.

Êtes-vous intéressé ? [Essayer ici](https://app-v2.feexpay.me/feexLinks).

### QuickLink

**QuickLink** QuickLink est une variante de FeexLink qui permet de générer rapidement des liens et des codes QR de paiement sans définir de montant à l'avance. Le client saisit lui-même le montant au moment du paiement, ce qui est idéal pour :

-   Encaissement libre en boutique ou au comptoir.
-   Paiements où le montant varie d'un client à un autre.
-   Donations, contributions, collectes, etc.

Le client peut soit scanner le QR code, soit cliquer sur le lien QuickLink pour accéder à la page de paiement et saisir le montant souhaité.

### FeexCorporate

FeexCorporate facilite la vie en effectuant des paiements en masse vers vos employés, clients, fournisseurs, etc.

Êtes-vous intéressé ? [Essayer ici](https://app-v2.feexpay.me/feexcorporate).

### FeexPage

Avec FeexPage, personnalisez vos pages de paiement et offrez une meilleure expérience à vos clients.

Êtes-vous intéressé ? [Cliquez ici](https://app-v2.feexpay.me/feexpage).
