---
id: javascript-sdk
title: "JavaScript"
group: sdks
lang: fr
source: https://docs.feexpay.me/?section=javascript-sdk&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# JavaScript

Suivez ces quelques étapes très simples pour intégrer FeexPay dans votre application JavaScript.

### 1\. Créer un compte FeexPay

Si vous avez déjà un compte, passez à l'étape suivante.

### 2\. Ajouter ce code dans la balise head

```html
<script src="https://api-v2.feexpay.me/feexpay-javascript-sdk/index.js"></script>
```

### 3\. Ajouter un conteneur dans le body

Ajoutez ce code dans le body de votre site web (ou remplacez par l'ID que vous avez défini dans `id_custom_button`, puis initialisez avec le même ID).

```html
<div id="render"></div>
```

Important

Sans ce bout de code, vous ne pourrez pas initialiser le script de la page de paiement sur votre site web.

### 4\. Initialiser et ajouter un bouton de paiement

Placez ce code dans une balise <script></script> (ou un fichier JS chargé sur la page).

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

### 5\. Modal de paiement

![Modal de paiement](https://docs.feexpay.me/sdk/sdkjs.png)

### Paramètres de FeexPayButton.init()

-   `id` : Identifiant de votre boutique.
-   `amount` : Montant à payer (obligatoire).
-   `token` : Votre clé d'API.
-   `callback` : Fonction appelée après paiement.
-   `callback_url` : Lien de retour après paiement.
-   `error_callback_url` : Lien de retour si le paiement échoue.
-   `currency` : Devise de la transaction (CAD, USD seulement pour paiements carte).
-   `mode` : **SANDBOX** (test) ou **LIVE** (production).
-   `custom_button` : `true` pour un bouton personnalisé, sinon `false`.
-   `id_custom_button` : ID du bouton personnalisé qui déclenche le paiement.
-   `custom_id` : Chaîne aléatoire pour référencer et suivre une transaction.
-   `case` : Type de paiement
    -   `MOBILE` : Paiement mobile uniquement
    -   `CARD` : Paiement par carte uniquement
    -   `WALLET` : Paiement wallet uniquement
    -   Laisser vide pour afficher les trois
-   `description` : Description de la transaction (optionnel, 40 caractères maximum).
-   `fields_to_hide` : Champs à cacher.
-   `networks` : (Optionnel) Filtrer les réseaux affichés dans la modale selon le pays. Utilisez les noms exacts ci-dessous.
    
    | Pays | Réseaux disponibles |
    | --- | --- |
    | Benin | MTN, MOOV, CELTIIS, CORIS |
    | Togo | MOOV, TOGOCOM |
    | Côte d'Ivoire | MTN, ORANGE, MOOV, WAVE |
    | Senegal | ORANGE, WAVE, FREE |
    | Burkina Faso | ORANGE, MOOV, WAVE |
    | Congo-Brazzaville | MTN |
    

 [Suivant

React SDK]
