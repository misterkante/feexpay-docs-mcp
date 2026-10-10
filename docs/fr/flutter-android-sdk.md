---
id: flutter-android-sdk
title: "FLUTTER ET ANDROID SDK"
group: sdks
lang: fr
source: https://docs.feexpay.me/?section=flutter-android-sdk&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# FLUTTER ET ANDROID SDK

Suivez ces quelques étapes très simples pour intégrer FeexPay dans votre application développée avec Flutter et Android (Flutter).

### 1\. Ajouter le plugin

Avec Dart

```bash
dart pub add feexpay_flutter_v2
```

Avec Flutter

```bash
flutter pub add feexpay_flutter_v2
```

### 2\. Importer le package

```dart
import 'package:feexpay_flutter_v2/feexpay_flutter_sdk.dart';
// Requis pour le paramètre locale (AppLocale n'est pas exporté par feexpay_flutter_sdk.dart)
import 'package:feexpay_flutter_v2/l10n/app_translations.dart' show AppLocale;
```

### 3\. Utiliser le bouton de paiement

```dart
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => ChoicePage(
      token: 'votre_api_key',
      id: 'votre_shop_id',
      amount: '1500',
      redirecturl: '/success',
      errorredirecturl: '/error',
      reference: 'CMD-2026-001',
      callback_info: {
        'orderId': '1042',
        'userId': 'usr_abc',
      },
      onPaymentResult: (PaymentResult result) {
        if (result.isSuccess) {
          final txRef = result.reference;
          // Confirmer la commande côté serveur
        } else if (result.isFailed) {
          print('Échec: ${result.message}');
        }
      },
    ),
  ),
);
```

### Paramètres

-   `token` : Votre clé d'API.
-   `id` : Identifiant de votre boutique.
-   `amount` : Montant à payer.
-   `redirecturl` : Route ou URL de redirection après paiement réussi.
-   `errorredirecturl` : Route ou URL de redirection après paiement échoué.
-   `reference` : Référence personnalisée de la transaction (idempotence).
-   `locale` : Langue de l'interface : `AppLocale.fr` / `AppLocale.en`
-   `hide_identity_form` : Masque le formulaire d'identité (nom / email) si déjà connu.
-   `name_shop` : Nom de la boutique affiché dans la modale.
-   `trans_key` : Chaîne de 15 caractères aléatoires.
-   `callback_info` : Données additionnelles (Map) renvoyées par le webhook.
-   `onPaymentResult` : Callback appelé après le paiement. Reçoit un PaymentResult avec : status, reference, message, isSuccess, isFailed.

### 4\. Configurer les routes dans MaterialApp

```dart
MaterialApp(
  title: 'Mon App',
  routes: {
    '/success': (context) => const SuccessPage(),
    '/error': (context) => const EndErrorPage(),
  },
)
```

Les redirections externes (URLs http/https) sont également supportées.

 [Précédent

PHP SDK]  [Suivant

WordPress]
