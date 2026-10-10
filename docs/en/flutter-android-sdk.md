---
id: flutter-android-sdk
title: "FLUTTER AND ANDROID SDK"
group: sdks
lang: en
source: https://docs.feexpay.me/?section=flutter-android-sdk&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# FLUTTER AND ANDROID SDK

Follow these very simple steps to integrate FeexPay into your Flutter and Android (Flutter) application.

### 1\. Add the plugin

With Dart

```bash
dart pub add feexpay_flutter_v2
```

With Flutter

```bash
flutter pub add feexpay_flutter_v2
```

### 2\. Import the package

```dart
import 'package:feexpay_flutter_v2/feexpay_flutter_sdk.dart';
// Required for the locale parameter (AppLocale is not exported by feexpay_flutter_sdk.dart)
import 'package:feexpay_flutter_v2/l10n/app_translations.dart' show AppLocale;
```

### 3\. Use the payment button

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
          // Confirm the order on the server side
        } else if (result.isFailed) {
          print('Failed: ${result.message}');
        }
      },
    ),
  ),
);
```

### Parameters

-   `token` : Your API key.
-   `id` : Your shop identifier.
-   `amount` : Amount to pay.
-   `redirecturl` : Route or URL to redirect after successful payment.
-   `errorredirecturl` : Route or URL to redirect after failed payment.
-   `reference` : Custom transaction reference (idempotency).
-   `locale` : UI language: `AppLocale.fr` / `AppLocale.en`
-   `hide_identity_form` : Hide the identity form (name / email) if already known.
-   `name_shop` : Shop name displayed in the modal.
-   `trans_key` : Random 15-character string.
-   `callback_info` : Additional data (Map) returned by the webhook.
-   `onPaymentResult` : Callback called after payment. Receives a PaymentResult with: status, reference, message, isSuccess, isFailed.

### 4\. Configure routes in MaterialApp

```dart
MaterialApp(
  title: 'Mon App',
  routes: {
    '/success': (context) => const SuccessPage(),
    '/error': (context) => const EndErrorPage(),
  },
)
```

External redirects (http/https URLs) are also supported.

 [Previous

PHP SDK]  [Next

WordPress]
