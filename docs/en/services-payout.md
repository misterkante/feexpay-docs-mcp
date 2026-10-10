---
id: services-payout
title: "API - Payout"
group: api
lang: en
source: https://docs.feexpay.me/?section=services-payout&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# API - Payout

This section groups **Payouts** by country and network. Use the tabs to choose a country, then click on a network to see the steps (URL, method, body, headers, examples).

Warning

You can also configure the IP list yourself directly from your dashboard in the 'IP List' tab.

V2 behavior: PENDING status on launch

On V2, launching a payout immediately returns a PENDING status. You must then verify the final status (SUCCESSFUL or FAILED) via the Payout Status section.

 [Benin]  [Côte d'Ivoire]  [Togo]  [Senegal]  [Congo]  [Burkina Faso] 

### Available networks

 [MTN/MOOV]  [CELTIIS BJ] 

#### A) Global Payout Benin (MTN/Moov)

Allows making payouts to Mobile Money in Benin (MTN Mobile Money and Moov Money)

##### URL

`https://api-v2.feexpay.me/api/payouts/public/transfer/global`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | 10-digit number with 01 prefix | 2290166000000 |
| amount | Required | Minimum amount 50 | 100 |
| shop | Required | Shop ID | Ayg9lkjkhurIvNp |
| network | Required | Network (MTN or MOOV) | MTN |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/transfer/global",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 100,
    phoneNumber: 2290166000000,
    network: 'MTN',
    motif: 'FeexPay'
  }
});
```

##### B) Response

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Côte d'Ivoire

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]

#### Payout MTN Côte d'Ivoire

Allows making payouts to MTN Mobile Money in Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/payouts/public/mtn_ci`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | MTN CI phone number | 2250507700000 |
| amount | Required | Minimum amount 100 | 100 |
| shop | Required | Shop ID | Ayg9lkjkhurIvNp |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| email | Optional | Beneficiary email | johndoe@gmail.com |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/mtn_ci",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 100,
    phoneNumber: 2250507700000,
    motif: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Togo

[TOGOCOM / MOOV TG]

#### Global Payout Togo (TOGOCOM/Moov TG)

Allows making payouts to Mobile Money in Togo (TOGOCOM and Moov Togo)

##### URL

`https://api-v2.feexpay.me/api/payouts/public/togo`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 22871000000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| network | Required | Mobile network (TOGOCOM TG or MOOV TG) | TOGOCOM TG |
| email | Optional | Customer email address receiving the funds | johndoe@gmail.com |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/togo",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    phoneNumber: 22871000000,
    amount: 100,
    shop: 'Ayg9lkjkhurIvNp',
    network: 'TOGOCOM TG',
    email: 'johndoe@gmail.com',
    motif: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Senegal

[ORANGE SENEGAL]  [FREE SENEGAL]  [WAVE SENEGAL]

#### Payout Orange Senegal

Allows making payouts to Orange Money in Senegal

##### URL

`https://api-v2.feexpay.me/api/payouts/public/orange_sn`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 221771740000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| email | Optional | Customer email address receiving the funds | johndoe@gmail.com |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/orange_sn",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    phoneNumber: 221771740000,
    amount: 100,
    shop: 'Ayg9lkjkhurIvNp',
    email: 'johndoe@gmail.com',
    motif: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Congo

[MTN CONGO BRAZZAVILLE]

#### Payout MTN Congo Brazzaville

Allows making payouts to MTN Mobile Money in Congo Brazzaville

##### URL

`https://api-v2.feexpay.me/api/payouts/public/mtn_cg`

##### Method

POST

##### Headers

Dans l’en-tête de votre requête (header), il doit avoir une clé `Authorization` qui aura comme valeur `Bearer <votre-api-key>`.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 242676600000000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (find in FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| email | Optional | Customer email address receiving the funds | johndoe@gmail.com |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/mtn_cg",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_jhgfdbhjnkhgfdhjkhgfg',
  },
  data: {
    phoneNumber: 242676600000000,
    amount: 100,
    shop: 'Ayg9lkjkhurIvNp',
    email: 'johndoe@gmail.com',
    motif: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Burkina Faso

[MOOV BURKINA]  [ORANGE BURKINA]  [WAVE BURKINA]

#### Moov Burkina Faso

Effectuer un payout vers un compte Moov Burkina Faso.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/moov_bf`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 22670000000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/moov_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { phoneNumber: 22670000000, amount: 100, shop: 'Ayg9lkjkhurIvNp', motif: 'FeexPay' }
});
```

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: CELTIIS BJ

#### Payout CELTIIS Benin

Allows making payouts to CELTIIS in Benin

##### URL

`https://api-v2.feexpay.me/api/payouts/public/celtiis_bj`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | CELTIIS 10-digit number | 2290140000000 |
| amount | Required | Minimum amount 50 | 100 |
| shop | Required | Shop ID | Ayg9lkjkhurIvNp |
| network | Required | CELTIIS BJ network | CELTIIS BJ |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/celtiis_bj",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 100,
    phoneNumber: 2290140000000,
    network: 'CELTIIS BJ',
    motif: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Côte d'Ivoire › ORANGE COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]

#### Payout Orange Côte d'Ivoire

Allows making payouts to Orange Money in Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/payouts/public/orange_ci`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 2250707700000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| email | Optional | Customer email address receiving the funds | johndoe@gmail.com |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/orange_ci",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    phoneNumber: 2250707700000,
    amount: 100,
    shop: 'Ayg9lkjkhurIvNp',
    email: 'johndoe@gmail.com',
    motif: 'FeexPay'
  }
});
```

Status Tracking

Once the response is received, check the status with the <strong>reference</strong> after about 5 minutes (see the Payout Status section).

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Côte d'Ivoire › MOOV COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]

#### Payout Moov Côte d'Ivoire

Allows making payouts to Moov Money in Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/payouts/public/moov_ci`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 2250140700000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| email | Optional | Customer email address receiving the funds | johndoe@gmail.com |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/moov_ci",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    phoneNumber: 2250140700000,
    amount: 100,
    shop: 'Ayg9lkjkhurIvNp',
    email: 'johndoe@gmail.com',
    motif: 'FeexPay'
  }
});
```

Status Tracking

Once the response is received, check the status with the <strong>reference</strong> after about 5 minutes (see the Payout Status section).

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Côte d'Ivoire › WAVE COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]

#### Payout Wave Côte d'Ivoire

Allows making payouts to Wave in Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/payouts/public/wave_ci`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 2250140700000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| email | Optional | Customer email address receiving the funds | johndoe@gmail.com |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/wave_ci",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    phoneNumber: 2250140700000,
    amount: 100,
    shop: 'Ayg9lkjkhurIvNp',
    email: 'johndoe@gmail.com',
    motif: 'FeexPay'
  }
});
```

Status Tracking

Once the response is received, check the status with the <strong>reference</strong> after about 5 minutes (see the Payout Status section).

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Senegal › FREE SENEGAL

[ORANGE SENEGAL]  [FREE SENEGAL]  [WAVE SENEGAL]

#### Payout Free Senegal

Allows making payouts to Free Money in Senegal

##### URL

`https://api-v2.feexpay.me/api/payouts/public/free_sn`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 221771740000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| email | Optional | Customer email address receiving the funds | johndoe@gmail.com |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/free_sn",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    phoneNumber: 221771740000,
    amount: 100,
    shop: 'Ayg9lkjkhurIvNp',
    email: 'johndoe@gmail.com',
    motif: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Senegal › WAVE SENEGAL

[ORANGE SENEGAL]  [FREE SENEGAL]  [WAVE SENEGAL]

#### Payout Wave Senegal

Allows making payouts to Wave in Senegal

##### URL

`https://api-v2.feexpay.me/api/payouts/public/wave_sn`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 221701740000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| email | Optional | Customer email address receiving the funds | johndoe@gmail.com |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/wave_sn",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    phoneNumber: 221701740000,
    amount: 100,
    shop: 'Ayg9lkjkhurIvNp',
    email: 'johndoe@gmail.com',
    motif: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Burkina Faso › ORANGE BURKINA

[MOOV BURKINA]  [ORANGE BURKINA]  [WAVE BURKINA]

#### Orange Burkina Faso

Effectuer un payout vers un compte Orange Burkina Faso.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/orange_bf`

##### Method

POST

OTP required for Orange Burkina Faso

Before calling this endpoint, the beneficiary must generate an OTP by dialing the USSD code #144\*4\*6\*amount# from their Orange BF phone. The received OTP must be included in the otp field of the request body.

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 22670000000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| otp | Required | OTP code generated via USSD #144\*4\*6\*amount# | 123456 |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/orange_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { phoneNumber: 22670000000, amount: 100, shop: 'Ayg9lkjkhurIvNp', otp: '123456', motif: 'FeexPay' }
});
```

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```

---

## Tab: Burkina Faso › WAVE BURKINA

[MOOV BURKINA]  [ORANGE BURKINA]  [WAVE BURKINA]

#### Wave Burkina Faso

Effectuer un payout vers un compte Wave Burkina Faso.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/wave_bf`

##### Method

POST

OTP required for Wave Burkina Faso

Before calling this endpoint, the beneficiary must generate an OTP via the Wave app or by USSD. The received OTP must be included in the otp field of the request body.

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 22670000000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| otp | Required | OTP généré via l'application Wave ou USSD | 123456 |
| motif | Required | Transaction description (30 characters maximum, no special characters) | FeexPay |

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/wave_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { phoneNumber: 22670000000, amount: 100, shop: 'Ayg9lkjkhurIvNp', otp: '123456', motif: 'FeexPay' }
});
```

##### Response (example)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "status": "PENDING",
  "message": "Payout request accepted",
  "description": "Paiement client",
  "phone_number": "2290167919150",
  "amount": 10,
  "callback_info": null
}
```
