---
id: services-payout
title: "API - Payout"
group: api
lang: en
source: https://docs.feexpay.me/?section=services-payout&version=v2
updated_at: 2026-11-25T15:33:43.610Z
---

# API - Payout

This section groups **Payouts** by country and network. Use the tabs to choose a country, then click on a network to see the steps (URL, method, body, headers, examples).

Warning

You can also configure the IP list yourself directly from your dashboard in the 'IP List' tab.

V2 behavior: PENDING status on launch

On V2, launching a payout immediately returns a PENDING status. You must then verify the final status (SUCCESSFUL or FAILED) via the Payout Status section.

 [Benin]  [Côte d'Ivoire]  [Togo]  [Senegal]  [Congo]  [Burkina Faso]  [Nigeria] 

### Available networks

 [MTN/MOOV]  [CELTIIS BJ]  [BMO BJ] 

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

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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

## Tab: Nigeria

[BANK TRANSFER]  [PAY WITH BANK]

#### Payouts in Nigeria: transfer to a bank account — BANK TRANSFER

In Nigeria, a payout is a naira transfer to any Nigerian bank account (traditional banks, Opay, PalmPay, Kuda…). The recipient is identified by their bank (bank\_code) and their 10-digit account number (account\_number).

Which balance is debited?

There are two payout routes that make exactly the same transfer. The only difference is the balance debited: /bank\_transfer\_ng debits your Bank Transfer balance, /pay\_with\_bank\_ng debits your Pay with Bank balance. Use the one whose balance has funds.

##### The flow in 4 steps

1.  Fetch the list of banks (/ng/banks route) to get the recipient's bank\_code.
2.  Verify the account (/ng/resolve\_account route): FeexPay returns the account holder's name. Show it for confirmation before sending money.
3.  Start the payout. The response returns the PENDING status: the transfer is in progress.
4.  The final status (SUCCESSFUL or FAILED) arrives by webhook, usually within a few minutes. If it fails, the debited amount is automatically credited back to your balance.

All amounts are in naira (NGN), as whole numbers. Nigeria is only available on API v2.

##### Step 1: list of banks

Returns all Nigerian banks accepted for payouts. Pass the code field as bank\_code.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/ng/banks`

##### Method

GET

```json
{
  "banks": [
    { "code": "044", "name": "Access Bank" },
    { "code": "058", "name": "Guaranty Trust Bank" },
    { "code": "100004", "name": "Opay" }
  ]
}
```

##### Step 2: verify the recipient's account

Returns the account holder's name. If the account does not exist, the API responds 400 with the INVALID\_BANK\_ACCOUNT code. This check is also done automatically when you start the payout, before your balance is debited.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/ng/resolve_account`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| bank\_code | Required | Recipient's bank code (/ng/banks route) | 058 |
| account\_number | Required | Recipient's account number (NUBAN, 10 digits) | 0123456789 |

```json
{
  "bank_code": "058",
  "bank_name": "Guaranty Trust Bank",
  "account_number": "0123456789",
  "account_name": "ADA OKAFOR"
}
```

##### Step 3: start the payout

##### URL

`https://api-v2.feexpay.me/api/payouts/public/bank_transfer_ng`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| amount | Required | Amount to send in NGN (whole number, 100 to 10,000,000) | 25000 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| bank\_code | Required | Recipient's bank code (/ng/banks route) | 058 |
| account\_number | Required | Recipient's account number (NUBAN, 10 digits) | 0123456789 |
| motif | Optional | Transfer reason | Salary November |
| callback\_info | Optional | Additional information returned by the webhook | payout\_789 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/bank_transfer_ng",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 25000, bank_code: '058', account_number: '0123456789', motif: 'Salary November' }
});
```

##### Response (example)

```json
{
  "reference": "c7e1f0a2-5b3d-4e8f-9a6c-2d4b8e1f3a57",
  "message": "Accepted",
  "status": "PENDING",
  "description": "Salary November",
  "bank_code": "058",
  "account_number": "0123456789",
  "account_name": "ADA OKAFOR",
  "amount": 25000,
  "callback_info": null
}
```

Fees

Payout fees are added to the amount sent: your balance is debited with the amount plus fees. The recipient receives exactly amount.

Status Tracking

Once the response is received, check the status with the **reference** after about 5 minutes (see the Payout Status section).

##### Common errors

<table class="min-w-full text-sm text-left text-gray-700 dark:text-gray-300"><tbody><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">400 INVALID_BANK_ACCOUNT</td><td class="py-2 pr-4">The account does not exist at this bank. Nothing is debited.</td></tr><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">400 (validation)</td><td class="py-2 pr-4">amount out of range (NGN 100 to 10,000,000), or malformed bank_code or account_number.</td></tr><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">Insufficient balance</td><td class="py-2 pr-4">The chosen balance does not cover the amount plus fees.</td></tr><tr class="align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">202 PENDING, message Processing</td><td class="py-2 pr-4">Our partner has not confirmed receipt yet. Do not retry the payout: the final status will arrive by webhook.</td></tr></tbody></table>

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

## Tab: BMO BJ

#### B-MO Benin Payout

Send payouts to B-MO (wallet) in Benin

##### URL

`https://api-v2.feexpay.me/api/payouts/public/bmo`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | Beneficiary's Benin phone number — keep the leading 0 of the local number (e.g. 0167399785) | 0167399785 |
| amount | Required | Transaction amount, integer between 10 and 2,000,000 XOF | 1500 |
| shop | Required | Shop ID | Ayg9lkjkhurIvNp |
| motif | Required | Reason / description of the transaction | FeexPay |
| first\_name | Conditional | Beneficiary's first name — required only if the number is not already a B-MO customer | Jean |
| last\_name | Conditional | Beneficiary's last name — required only if the number is not already a B-MO customer | Kouassi |
| email | Optional | Beneficiary's email address | jean.kouassi@exemple.com |
| callback\_info | Optional | Free-form data, returned as-is | order\_12345 |

Conditional first and last name

B-MO requires first\_name and last\_name only if the beneficiary is not already a B-MO customer. Always send them: it has no effect if the beneficiary already exists.

##### Headers

Add `Authorization: Bearer <votre-api-key>` to the headers.

Important

Without this header in your request, you will not be authorized and your request will not succeed.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/bmo",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 1500,
    phoneNumber: '0167399785',
    motif: 'FeexPay',
    first_name: 'Jean',
    last_name: 'Kouassi'
  }
});
```

##### Response (example)

```json
{
  "reference": "a30d7ad5-2c88-4121-aee1-d1bc9959a939",
  "status": "SUCCESSFUL",
  "description": "FeexPay",
  "phone_number": "+2290167399785",
  "amount": 1500,
  "callback_info": null
}
```

-   `SUCCESSFUL` — the transfer is complete;
-   `FAILED` — the transfer failed, the message field gives the reason;
-   `PENDING` — the transfer is processed automatically in the background, no action is needed on your side.

---

## Tab: Côte d'Ivoire › ORANGE COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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

## Tab: Côte d'Ivoire › DJAMO COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

#### Djamo Côte d'Ivoire payout

Send transfers to a Djamo account in Côte d'Ivoire (between 500 and 500,000 XOF per transfer). The recipient must have a Djamo account.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/djamo_ci`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | Recipient's Djamo account number: 225 followed by the 10 digits | 2250700000000 |
| amount | Required | Amount in XOF (between 500 and 500,000) | 5000 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| email | Optional | Customer email address receiving the funds | johndoe@gmail.com |
| motif | Required | Reason for the transfer, visible to the recipient (100 characters maximum) | FeexPay |
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
    phoneNumber: '2250700000000',
    amount: 5000,
    shop: 'Ayg9lkjkhurIvNp',
    email: 'johndoe@gmail.com',
    motif: 'Remboursement commande 123'
  }
});
```

Status Tracking

Once the response is received, check the status with the <strong>reference</strong> after about 5 minutes (see the Payout Status section). For Djamo, the response is usually PENDING: the final status is sent to your webhook.

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

---

## Tab: Nigeria › PAY WITH BANK

[BANK TRANSFER]  [PAY WITH BANK]

#### Payouts in Nigeria: transfer to a bank account — PAY WITH BANK

In Nigeria, a payout is a naira transfer to any Nigerian bank account (traditional banks, Opay, PalmPay, Kuda…). The recipient is identified by their bank (bank\_code) and their 10-digit account number (account\_number).

Which balance is debited?

There are two payout routes that make exactly the same transfer. The only difference is the balance debited: /bank\_transfer\_ng debits your Bank Transfer balance, /pay\_with\_bank\_ng debits your Pay with Bank balance. Use the one whose balance has funds.

##### The flow in 4 steps

1.  Fetch the list of banks (/ng/banks route) to get the recipient's bank\_code.
2.  Verify the account (/ng/resolve\_account route): FeexPay returns the account holder's name. Show it for confirmation before sending money.
3.  Start the payout. The response returns the PENDING status: the transfer is in progress.
4.  The final status (SUCCESSFUL or FAILED) arrives by webhook, usually within a few minutes. If it fails, the debited amount is automatically credited back to your balance.

All amounts are in naira (NGN), as whole numbers. Nigeria is only available on API v2.

##### Step 1: list of banks

Returns all Nigerian banks accepted for payouts. Pass the code field as bank\_code.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/ng/banks`

##### Method

GET

```json
{
  "banks": [
    { "code": "044", "name": "Access Bank" },
    { "code": "058", "name": "Guaranty Trust Bank" },
    { "code": "100004", "name": "Opay" }
  ]
}
```

##### Step 2: verify the recipient's account

Returns the account holder's name. If the account does not exist, the API responds 400 with the INVALID\_BANK\_ACCOUNT code. This check is also done automatically when you start the payout, before your balance is debited.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/ng/resolve_account`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| bank\_code | Required | Recipient's bank code (/ng/banks route) | 058 |
| account\_number | Required | Recipient's account number (NUBAN, 10 digits) | 0123456789 |

```json
{
  "bank_code": "058",
  "bank_name": "Guaranty Trust Bank",
  "account_number": "0123456789",
  "account_name": "ADA OKAFOR"
}
```

##### Step 3: start the payout

##### URL

`https://api-v2.feexpay.me/api/payouts/public/pay_with_bank_ng`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| amount | Required | Amount to send in NGN (whole number, 100 to 10,000,000) | 25000 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| bank\_code | Required | Recipient's bank code (/ng/banks route) | 058 |
| account\_number | Required | Recipient's account number (NUBAN, 10 digits) | 0123456789 |
| motif | Optional | Transfer reason | Salary November |
| callback\_info | Optional | Additional information returned by the webhook | payout\_789 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/pay_with_bank_ng",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 25000, bank_code: '058', account_number: '0123456789', motif: 'Salary November' }
});
```

##### Response (example)

```json
{
  "reference": "c7e1f0a2-5b3d-4e8f-9a6c-2d4b8e1f3a57",
  "message": "Accepted",
  "status": "PENDING",
  "description": "Salary November",
  "bank_code": "058",
  "account_number": "0123456789",
  "account_name": "ADA OKAFOR",
  "amount": 25000,
  "callback_info": null
}
```

Fees

Payout fees are added to the amount sent: your balance is debited with the amount plus fees. The recipient receives exactly amount.

Status Tracking

Once the response is received, check the status with the **reference** after about 5 minutes (see the Payout Status section).

##### Common errors

<table class="min-w-full text-sm text-left text-gray-700 dark:text-gray-300"><tbody><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">400 INVALID_BANK_ACCOUNT</td><td class="py-2 pr-4">The account does not exist at this bank. Nothing is debited.</td></tr><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">400 (validation)</td><td class="py-2 pr-4">amount out of range (NGN 100 to 10,000,000), or malformed bank_code or account_number.</td></tr><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">Insufficient balance</td><td class="py-2 pr-4">The chosen balance does not cover the amount plus fees.</td></tr><tr class="align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">202 PENDING, message Processing</td><td class="py-2 pr-4">Our partner has not confirmed receipt yet. Do not retry the payout: the final status will arrive by webhook.</td></tr></tbody></table>
