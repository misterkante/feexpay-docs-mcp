---
id: react-sdk
title: "React"
group: sdks
lang: fr
source: https://docs.feexpay.me/?section=react-sdk&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# React

Suivez ces quelques étapes très simples pour intégrer FeexPay dans votre application React.

### 1\. Créer un compte FeexPay

Si vous avez déjà un compte, passez à l'étape suivante.

### 2\. Installer le SDK

Avec npm

```bash
npm install react-sdk-feexpay
```

Avec yarn

```bash
yarn add react-sdk-feexpay
```

### 3\. Importer le composant

```typescript
import FeexPay from 'react-sdk-feexpay';
// ou avec l'alias rétrocompatible :
import { FeexPayButton } from 'react-sdk-feexpay';
```

### 4\. Ajouter le bouton de paiement

```tsx
<FeexPay
  // Montant de la transaction en XOF
  amount={5000}

  // Description affichée dans la modale de paiement (évitez les caractères spéciaux)
  description="Commande #1234"

  // Clé API sécurisée : SANDBOX pour test, LIVE pour production
  token="fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrT"

  // ID de la boutique
  id="Ayg9lkjkhurIvNp"

  // Référence personnalisée de la transaction (idempotence)
  reference="CMD-2026-001"

  // URL de redirection en cas d'échec du paiement (optionnel)
  // error_callback_url='https://example.com/callback/error'

  // URL de redirection après succès du paiement (optionnel si callback utilisé)
  // callback_url="https://example.com/callback"

  // Données supplémentaires à associer à la transaction (optionnel)
  callback_info={{
    adress: "123 Main St, Anytown, USA",
    phone: "1234567890",
    email: "test@example.com",
    fullname: "John Doe",
  }}

  // Mode de paiement : "SANDBOX" (test) ou "LIVE" (production)
  mode="LIVE"

  // Champs à cacher dans le formulaire de paiement (optionnel)
  // fieldsToHide={["email", "name"]}

  // Fonction appelée après le paiement (réussi ou échoué)
  callback={(result) => {
    console.log(result);
  }}

  // Texte du bouton (optionnel)
  // buttonText="Payer maintenant"

  // Style personnalisé du bouton (optionnel)
  // buttonClass="bg-primary hover:bg-secondary text-white font-bold py-3 px-4 rounded-md"

  // Type de paiement : MOBILE, CARD, WALLET (laisser vide pour afficher les trois)
  case=''

  // Devise utilisée pour la transaction (ex: XOF, USD, CAD, XAF)
  currency='XOF'
/>
```

### 5\. Modal de paiement

![Modal de paiement](https://docs.feexpay.me/sdk/sdkjs.png)

### Paramètres

-   `id`: Identifiant de votre boutique
-   `token`: Votre clé d'API
-   `amount`: Montant à payer (XOF)
-   `callback`: Fonction appelée après paiement
-   `callback_url`: Redirection après paiement (optionnel)
-   `callback_info`: Informations complémentaires (optionnel)
-   `error_callback_url`: Redirection si paiement échoue (optionnel)
-   `description`: Texte dans la modale (40 caractères maximum, évitez caractères spéciaux)
-   `reference`: Référence personnalisée de la transaction (idempotence)
-   `first_name`: Pré-remplit le champ nom et prénoms du payeur
-   `email`: Pré-remplit le champ email du payeur
-   `fieldsToHide`: Champs à masquer, ex: `["email", "name"]`
-   `buttonText`: Texte personnalisé du bouton
-   `buttonClass`: Classes CSS personnalisées
-   `buttonStyles`: Styles inline appliqués au bouton (React.CSSProperties)
-   `defaultValueField`: Pré-remplissage champs, ex: `{"country_iban":"BJ","network":"MOOV"}`
-   `case` : Type de paiement
    -   `MOBILE` : Paiement mobile uniquement
    -   `CARD` : Carte uniquement (pour carte, utilisez `currency` = `CAD` ou `USD`)
    -   `WALLET` : Wallet uniquement
    -   Laisser vide pour afficher les trois
-   `currency`: Devise (CAD, USD acceptés pour carte)
-   `mode`: Mode **SANDBOX** ou **LIVE**

## React SDK

V1 — Legacy

Package : `@feexpay/react-sdk`

⚠️ Cette version n'est plus maintenue. Nous recommandons de migrer vers V2 (react-sdk-feexpay).

### 2\. Installer le SDK

Avec npm

```bash
npm install @feexpay/react-sdk
```

Avec yarn

```bash
yarn add @feexpay/react-sdk
```

### 3\. Importer le composant

```typescript
import { FeexPayProvider, FeexPayButton } from '@feexpay/react-sdk';
import '@feexpay/react-sdk/style.css';
```

### 4\. Ajouter le bouton de paiement

```tsx
import { FeexPayProvider, FeexPayButton } from '@feexpay/react-sdk';
import '@feexpay/react-sdk/style.css';

export default function Checkout() {
  return (
    <FeexPayProvider>
      <FeexPayButton
        amount={5000}
        description="Commande #1234"
        token="fp_votre_api_key"
        id="votre_shop_id"
        customId="CMD-2025-001"
        mode="LIVE"
        currency="XOF"
        case=""
        callback={(response) => {
          console.log(response);
        }}
      />
    </FeexPayProvider>
  );
}
```

### Paramètres

-   `id`: Identifiant de votre boutique
-   `token`: Votre clé d'API
-   `amount`: Montant à payer (XOF)
-   `callback`: Fonction appelée après paiement
-   `callback_url`: Redirection après paiement (optionnel)
-   `callback_info`: Informations complémentaires (optionnel)
-   `error_callback_url`: Redirection si paiement échoue (optionnel)
-   `description`: Texte dans la modale (40 caractères maximum, évitez caractères spéciaux)
-   `customId`: Référence personnalisée de la transaction (idempotence)
-   `fields_to_hide`: Champs à masquer, ex: `["email", "name"]`
-   `buttonText`: Texte personnalisé du bouton
-   `buttonClass`: Classes CSS personnalisées
-   `case` : Type de paiement
    -   `MOBILE` : Paiement mobile uniquement
    -   `CARD` : Carte uniquement
    -   `WALLET` : Wallet uniquement
    -   Laisser vide pour afficher les trois
-   `currency`: Devise (CAD, USD acceptés pour carte)
-   `mode`: Mode **SANDBOX** ou **LIVE**

 [Précédent

JavaScript SDK]  [Suivant

PHP SDK]
