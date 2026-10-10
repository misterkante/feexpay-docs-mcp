---
id: postman
title: "Collection Postman"
group: tools
lang: fr
source: https://docs.feexpay.me/?section=postman&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# Collection Postman

Testez l'API FeexPay facilement avec Postman

Nous fournissons une collection Postman complète avec tous les endpoints de l'API FeexPay. Importez-la dans Postman pour tester rapidement toutes les fonctionnalités.

### Télécharger la collection

La collection Postman inclut tous les endpoints avec des exemples de requêtes et de réponses.

 [Télécharger la collection JSON] 

### Instructions d'installation

1

#### Télécharger et installer Postman

Si vous n'avez pas encore Postman, téléchargez-le depuis [postman.com/downloads](https://www.postman.com/downloads/)

2

#### Importer la collection

1.  Ouvrez Postman
2.  Cliquez sur 'Import' en haut à gauche
3.  Sélectionnez le fichier JSON téléchargé
4.  Cliquez sur 'Import'

3

#### Configurer l'environnement

Créez un nouvel environnement et ajoutez ces variables :

-   `base_url`https://api-v2.feexpay.me
-   `fp_api_key`Votre clé API FeexPay (commence par fp\_)
-   `shop`Votre identifiant de boutique

4

#### Tester les endpoints

Sélectionnez une requête dans la collection et cliquez sur 'Send' pour la tester. Les variables d'environnement seront automatiquement utilisées.

### Contenu de la collection

#### Payin

Toutes les requêtes de collecte par pays

#### Payout

Toutes les requêtes de reversement
