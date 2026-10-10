---
id: react-sdk
title: "React"
group: sdks
lang: en
source: https://docs.feexpay.me/?section=react-sdk&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# React

Follow these very simple steps to integrate FeexPay into your React application.

### 1\. Create a FeexPay account

If you already have an account, proceed to the next step.

### 2\. Install the SDK

With npm

```bash
npm install react-sdk-feexpay
```

With yarn

```bash
yarn add react-sdk-feexpay
```

### 3\. Import the component

```typescript
import FeexPay from 'react-sdk-feexpay';
// ou avec l'alias rétrocompatible :
import { FeexPayButton } from 'react-sdk-feexpay';
```

### 4\. Add the payment button

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

### 5\. Payment modal

![Payment modal](https://docs.feexpay.me/sdk/sdkjs.png)

### Parameters

-   `id`: Your shop identifier
-   `token`: Your API key
-   `amount`: Amount to pay (XOF)
-   `callback`: Function called after payment
-   `callback_url`: Redirect after payment (optional)
-   `callback_info`: Additional info (optional)
-   `error_callback_url`: Redirect if payment fails (optional)
-   `description`: Text shown in the modal (40 characters maximum, avoid special characters)
-   `reference`: Custom transaction reference (idempotency)
-   `first_name`: Pre-fills the payer's full name field
-   `email`: Pre-fills the payer's email field
-   `fieldsToHide`: Fields to hide, e.g. `["email", "name"]`
-   `buttonText`: Custom button text
-   `buttonClass`: Custom CSS classes
-   `buttonStyles`: Inline styles applied to the button (React.CSSProperties)
-   `defaultValueField`: Prefill fields, e.g. `{"country_iban":"BJ","network":"MOOV"}`
-   `case` : Payment type
    -   `MOBILE` : Mobile payment only
    -   `CARD` : Card only (for card payments, use `currency` = `CAD` or `USD`)
    -   `WALLET` : Wallet only
    -   Leave empty to show all three
-   `currency`: Currency (CAD, USD accepted for card)
-   `mode`: Mode **SANDBOX** or **LIVE**

## React SDK

V1 — Legacy

Package : `@feexpay/react-sdk`

⚠️ This version is no longer maintained. We recommend migrating to V2 (react-sdk-feexpay).

### 2\. Install the SDK

With npm

```bash
npm install @feexpay/react-sdk
```

With yarn

```bash
yarn add @feexpay/react-sdk
```

### 3\. Import the component

```typescript
import { FeexPayProvider, FeexPayButton } from '@feexpay/react-sdk';
import '@feexpay/react-sdk/style.css';
```

### 4\. Add the payment button

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

### Parameters

-   `id`: Your shop identifier
-   `token`: Your API key
-   `amount`: Amount to pay (XOF)
-   `callback`: Function called after payment
-   `callback_url`: Redirect after payment (optional)
-   `callback_info`: Additional info (optional)
-   `error_callback_url`: Redirect if payment fails (optional)
-   `description`: Text shown in the modal (40 characters maximum, avoid special characters)
-   `customId`: Custom transaction reference (idempotency)
-   `fields_to_hide`: Fields to hide, e.g. `["email", "name"]`
-   `buttonText`: Custom button text
-   `buttonClass`: Custom CSS classes
-   `case` : Payment type
    -   `MOBILE` : Mobile payment only
    -   `CARD` : Card only
    -   `WALLET` : Wallet only
    -   Leave empty to show all three
-   `currency`: Currency (CAD, USD accepted for card)
-   `mode`: Mode **SANDBOX** or **LIVE**

 [Previous

JavaScript SDK]  [Next

PHP SDK]
