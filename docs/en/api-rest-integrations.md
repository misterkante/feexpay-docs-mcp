---
id: api-rest-integrations
title: "API - Payin"
group: api
lang: en
source: https://docs.feexpay.me/?section=api-rest-integrations&version=v2
updated_at: 2026-11-25T15:33:43.610Z
---

# API - Payin

Welcome to the FeexPay API Payin section. Learn how to integrate our payment solutions into your applications.

##### Amount Limits

Please note that the minimum amount is 100 and the maximum is 2,000,000 XOF

 [Benin]  [Togo]  [Côte d'Ivoire]  [Congo Brazzaville]  [Senegal]  [Burkina Faso]  [Nigeria] 

### Available networks

 [MTN BENIN]  [MOOV BENIN]  [CELTIIS BENIN]  [CORIS BENIN]  [BMO BENIN] 

#### MTN Mobile Money Benin

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/mtn`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | 10-digit number with 01 prefix | 2290166000000 |
| amount | Required | Transaction amount | 100 |
| shop | Required | Shop identifier | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| description | Optional | No special characters | Achat de produit |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/mtn",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: '63e581fe4c35f54de9749c',
    amount: 100,
    phoneNumber: 2290166000000,
  }
});
```

##### B) Response

```json
{
"reference": "6a00a986-fcb9-4491-93d5-28693034ef95",
"message": "Accepted",
"status": "PENDING",
"amount": 10,
"description": "",
"callback_info": null,
"phoneNumber": "2290167919150"
}
```

---

## Tab: Togo

[TOGOCOM]  [MOOV TOGO]

#### Togocom

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/togocom_tg`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | Togocom phone number | 22866000000 |
| amount | Required | Transaction amount (minimum 100) | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/togocom_tg",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_8x9wpyCm2NmzMF6u6kh22IAtZyOw8VjnrZzqLd5PwecrYVQsEWGLElmcrK5uWemb',
  },
  data: {
    amount: 100,
    last_name: 'LOUGBEGNON',
    first_name: 'Amedee',
    phoneNumber: '22866000000',
    shop: '63dda25708903272fb93d12a',
  }
});
```

##### Response (example)

```json
{
  "responsemsg": "Demande en cours de traitement",
  "reference": "9LpRcBGrTkPN5PgYnU",
  "transref": "9LpRcBGrTkPN5PgYnU",
  "status": "PENDING",
  "statusCode": 200
}
```

---

## Tab: Côte d'Ivoire

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

#### MTN Mobile Money Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/mtn_ci`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | Phone number in Côte d'Ivoire international format | 2256766000000 |
| amount | Required | Transaction amount (minimum 100) | 100 |
| shop | Required | FeexPay shop identifier | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| description | Optional | Text without special characters describing the transaction (40 characters maximum) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/mtn_ci",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 100,
    phoneNumber: 2256766000000,
    first_name: 'FeexPay',
    last_name: 'FeexPay',
    description: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "reference": "385a0f60-1a0b-4401-9c16-74ac6f30cdfd",
  "message": "Accepted",
  "status": "PENDING"
}
```

---

## Tab: Congo Brazzaville

[MTN CONGO BRAZZAVILLE]

#### MTN Mobile Money Congo Brazzaville

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/mtn_cg`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | MTN Congo phone number (international format) | 242676600000000 |
| amount | Required | Transaction amount (minimum 100) | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| description | Optional | Description without special characters (40 characters maximum) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/mtn_cg",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: '63e581fe4c35f54de9749c',
    amount: 100,
    phoneNumber: 242676600000000,
    first_name: 'FeexPay',
    last_name: 'FeexPay',
    description: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "reference": "e7de7b4b-27f2-47fb-b43b-4db058994602",
  "message": "Accepted",
  "status": "PENDING"
}
```

---

## Tab: Senegal

[ORANGE SENEGAL]  [WAVE SENEGAL]  [FREE SENEGAL]

#### Orange Money Senegal

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/orange_sn`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 221771740000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (Developer menu on FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| return\_url | Optional | URL the customer is redirected to after a successful payment | http://feexpay.me |
| cancel\_url | Optional | Redirect URL when payment fails | http://feexpay.me/cancel |
| description | Optional | Transaction description (no special characters, 40 characters maximum) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/orange_sn",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 200,
    phoneNumber: 221771740002,
    return_url: 'http://feexpay.me',
    cancel_url: 'http://feexpay.me/cancel',
  }
});
```

##### Response (example)

```json
{
  "reference": "dSOiM3Qc6HXF",
  "status": "PENDING",
  "message": "Transaction initiated successfully",
  "payment_url": "https://sugu.orange-sonatel.com/mp/dmeHRjpE-cIy9AHDkEON"
}
```

Payment flow

The user must be redirected to **payment\_url** to complete the payment. Once the payment succeeds, they will be redirected to your **return\_url**.

---

## Tab: Burkina Faso

[MOOV BURKINA]  [ORANGE BURKINA]  [WAVE BURKINA]

#### Moov Burkina Faso

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov_bf`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 22670000000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (Developer menu on FeexPay) | Ayg9lkjkhurIvNp |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 100, phoneNumber: 22670000000 }
});
```

##### Response (example)

```json
{
  "reference": "176068f8-3334-46eb-b654-59753iuezur3232",
  "message": "Accepted",
  "status": "PENDING",
  "description": "Paiement Moov bf",
  "callback_info": null,
  "phone_number": "22366694381"
}
```

---

## Tab: Nigeria

[BANK TRANSFER]  [PAY WITH BANK]

##### Collecting payments in Nigeria

In Nigeria, your customers do not pay with mobile money but from their bank account. FeexPay offers two methods. Choose the one that fits your checkout, or offer both to your customers.

|  | Bank Transfer | Pay with Bank |
| --- | --- | --- |
| How it works | FeexPay generates a temporary bank account reserved for this payment. The customer sends a transfer to it from their banking app. | The customer picks their bank (Opay, PalmPay…) and is redirected to it to approve the payment. |
| What you receive | An account number, the bank, the exact amount and an expiry time | A payment link (payment\_url) |
| What you must do | Show this information to your customer | Redirect your customer to the link |
| Customer banks | All Nigerian banks | Only the banks in the list (/banks route) |
| Minimum amount | NGN 100 | NGN 200 |

All amounts are in naira (NGN), as whole numbers. Nigeria is only available on API v2.

How do I know the customer has paid?

The creation response always returns the PENDING status: the customer has not paid yet. Never deliver based on this response. The final status (SUCCESSFUL or FAILED) is sent to you by webhook (see the Webhooks section), and you can check it at any time with the reference (see the Payin status section).

#### Bank Transfer (transfer to a temporary account)

##### The flow in 4 steps

1.  You call the API with the amount: FeexPay returns a temporary bank account (bank\_account) and the exact amount to transfer (amount\_expected).
2.  You show your customer: the bank name, the account number, the account name, the exact amount and the deadline (expires\_at). A countdown and a Copy button make payment easier.
3.  The customer opens their banking app (GTBank, Access, Opay, Kuda…) and makes a regular transfer to this account.
4.  As soon as the transfer is received, the transaction becomes SUCCESSFUL: you receive the webhook and your Bank Transfer balance is credited.

Show this clearly to your customer

-   The amount to transfer is amount\_expected, to the naira. A transfer of a different amount is sent back to the customer by the bank and the payment stays pending.
-   The account is only valid until expires\_at. After that time, the customer must start a new payment.
-   Each account can only be used once: do not reuse it for another payment.

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/bank_transfer_ng`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| amount | Required | Amount to collect in NGN (whole number, 100 to 10,000,000) | 5000 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| description | Optional | Payment description (40 characters max) | Order 1234 |
| first\_name | Optional | Customer first name | Ada |
| last\_name | Optional | Customer last name | Okafor |
| email | Optional | Customer email | ada@example.com |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/bank_transfer_ng",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 5000, description: 'Order 1234', email: 'ada@example.com' }
});
```

##### Response (example)

```json
{
  "reference": "241065f1-1b48-4c1e-b044-ef306500b535",
  "status": "PENDING",
  "message": "Accepted",
  "description": "Order 1234",
  "callback_info": null,
  "amount_expected": 5000,
  "bank_account": {
    "account_name": "FEE-CHKOUT",
    "account_number": "1494901612",
    "bank_name": "Wema Bank",
    "bank_code": "035",
    "expires_at": "2026-11-20T17:43:59.845Z"
  }
}
```

##### Response fields to display

| Parameter | Description | Example |
| --- | --- | --- |
| amount\_expected | Exact amount the customer must transfer, in NGN | 5000 |
| bank\_account.account\_number | Number of the temporary account to pay into | 1494901612 |
| bank\_account.account\_name | Account name (show it to the customer) | FEE-CHKOUT |
| bank\_account.bank\_name | Bank of the temporary account | Wema Bank |
| bank\_account.expires\_at | Transfer deadline (UTC, ISO 8601) | 2026-11-20T17:43:59Z |

---

## Tab: MOOV BENIN

#### Moov Mobile Money Benin

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | 10-digit number with 01 prefix | 2290163000000 |
| amount | Required | Transaction amount | 100 |
| shop | Required | Shop ID | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| description | Optional | No special characters | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: '63e581fe4c35f54de9749c',
    amount: 100,
    phoneNumber: 2290163000000,
  }
});
```

##### Operator response (example)

```json
{
  "reference": "32D6CC4C-8AA1-4DFF-80A2-84D34C1BD19F",
  "status": "FAILED",
  "response_operator": {
    "description": [
      "Balance is insufficient"
    ],
    "referenceid": [
      "030865895286"
    ],
    "status": [
      "10"
    ],
    "transid": [
      "32D6CC4C-8AA1-4DFF-80A2-84D34C1BD19F"
    ]
  },
  "statusCode": "10"
}
```

Moov behavior

For Moov Benin, the response may already contain the final status (e.g. FAILED if the balance is insufficient), without needing to call the status-check API. If the customer confirms the code, the response will be directly SUCCESSFUL.

---

## Tab: CELTIIS BENIN

#### Celtiis Benin

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/celtiis_bj`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | 10-digit number with 01 prefix | 2290140000000 |
| amount | Required | Transaction amount | 100 |
| shop | Required | Shop ID | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| description | Optional | No special characters | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/celtiis_bj",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: '63e581fe4c35f54de9749c',
    amount: 100,
    phoneNumber: 2290140000000,
  }
});
```

##### Operator response (example)

```json
{
  "reference": "AG_20251202_701033309a4e1387a99b",
  "message": "Accept the service request successfully.",
  "status": "PENDING",
  "normal_response": "<?xml version="1.0" encoding="utf-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"><soapenv:Body><api:Response xmlns:api="http://cps.huawei.com/cpsinterface/api_requestmgr" xmlns:res="http://cps.huawei.com/cpsinterface/response"><res:Header><res:Version>1.0</res:Version><res:ConversationID>AG_20251202_701033309a4e1387a99b</res:ConversationID></res:Header><res:Body><res:ResponseCode>0</res:ResponseCode><res:ResponseDesc>Accept the service request successfully.</res:ResponseDesc><res:ServiceStatus>0</res:ServiceStatus></res:Body></api:Response></soapenv:Body></soapenv:Envelope>",
  "response_operator": {
    "soapenv:Envelope": {
      "$": {
        "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/"
      },
      "soapenv:Body": [
        {
          "api:Response": [
            {
              "$": {
                "xmlns:api": "http://cps.huawei.com/cpsinterface/api_requestmgr",
                "xmlns:res": "http://cps.huawei.com/cpsinterface/response"
              },
              "res:Header": [
                {
                  "res:Version": [
                    "1.0"
                  ],
                  "res:ConversationID": [
                    "AG_20251202_701033309a4e1387a99b"
                  ]
                }
              ],
              "res:Body": [
                {
                  "res:ResponseCode": [
                    "0"
                  ],
                  "res:ResponseDesc": [
                    "Accept the service request successfully."
                  ],
                  "res:ServiceStatus": [
                    "0"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "statusCode": "0"
}
```

Celtiis note

The response may include a SOAP payload. The status field may initially be PENDING; check the status API for final confirmation.

---

## Tab: CORIS BENIN

#### Coris Benin

Payments via Coris Mobile Money Benin are done in two steps: (1) send OTP, (2) validate with OTP.

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/coris`

##### Method

POST

##### Step 1 — Send the OTP code

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | Phone number (with 229 prefix) | 2290166000000 |
| amount | Required | Transaction amount (min. 100) | 100 |
| shop | Required | Shop ID | Ayg9lkjkhurIvNp |
| otp | Leave empty | Field to fill in step 2 | "" |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | Client |
| description | Optional | Transaction description (40 characters maximum) | Paiement Coris |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

###### Example (axios) — Step 1

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/coris",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_votreApiKey',
  },
  data: {
    shop: '63e581fe4c35f54de9749c',
    amount: 100,
    phoneNumber: 2290166000000,
    first_name: 'FeexPay',
    last_name: 'Client',
    description: 'Paiement test',
    otp: ''
  }
});
```

##### Step 2 — Validate the transaction (with OTP)

Send the same request again, adding the OTP code received by SMS.

```json
{
  "shop": "63e581fe4c35f54de9749c",
  "amount": 100,
  "phoneNumber": 2290166000000,
  "first_name": "FeexPay",
  "last_name": "Client",
  "description": "Paiement test",
  "otp": "45243"
}
```

###### Example (axios) — Step 2

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/coris",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_votreApiKey',
  },
  data: {
    shop: '63e581fe4c35f54de9749c',
    amount: 100,
    phoneNumber: 2290166000000,
    first_name: 'FeexPay',
    last_name: 'Client',
    description: 'Paiement test',
    otp: '45243'
  }
});
```

Coris process

1) Send the request to trigger the OTP. 2) Send the same request again with the otp field filled.

---

## Tab: BMO BENIN

#### B-MO Benin

B-MO payments use 3 separate calls: initiation (a code is sent by SMS), confirmation (with the code), and cancellation if the customer gives up.

Code valid for 1 minute only

Unlike other operators, B-MO automatically cancels the request if the code is not confirmed within one minute of step 1. The code cannot be resent: if it expires, cancel the request and start a new initiation.

Keep the leading 0 of the number

Send the local Benin number as is, for example 0167399785: do not remove the leading 0 and do not add the 229 country code. The response then returns the number in international format (+2290167399785).

B-MO process

1) Call /requesttopay/bmo to trigger the SMS code. 2) Call /requesttopay/bmo/confirm with the reference and the code received. 3) If the customer gives up, call /requesttopay/bmo/cancel with the reference.

##### Step 1 — Initiate the request (code sent by SMS)

###### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/bmo`

POST

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | Local Benin number, without country code: keep the leading 0 | 0167399785 |
| amount | Required | Transaction amount, integer between 200 and 2,000,000 XOF | 1500 |
| shop | Required | Shop ID | Ayg9lkjkhurIvNp |
| first\_name | Conditional | Customer's first name — required only if the number is not already a B-MO customer | Jean |
| last\_name | Conditional | Customer's last name — required only if the number is not already a B-MO customer | Kouassi |
| email | Optional | Customer's email address | jean.kouassi@exemple.com |
| description | Optional | Transaction description (40 characters maximum) | Paiement commande |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

Conditional first\_name / last\_name

B-MO requires first\_name and last\_name only if the number is not already a known B-MO customer. We recommend always sending them: it has no effect if the customer already exists.

If these fields are missing for a customer unknown to B-MO, the request fails:

```json
{
  "message": "first_name and last_name are required: customer is not an existing BMO customer",
  "status": "FAILED"
}
```

###### Example (axios) — Step 1: initiation

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/bmo",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_votreApiKey',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 1500,
    phoneNumber: '0167399785',
    first_name: 'Jean',
    last_name: 'Kouassi',
    description: 'Paiement commande'
  }
});
```

```json
{
  "reference": "4oJPO7co4G2M",
  "message": "Un code de confirmation a été envoyé par SMS",
  "status": "PENDING",
  "requires_otp": true,
  "amount": 1500,
  "description": "Paiement commande",
  "callback_info": null,
  "phoneNumber": "+2290167399785"
}
```

##### Step 2 — Confirm with the code received by SMS

Call /requesttopay/bmo/confirm with the reference received in step 1 and the OTP code received by SMS.

###### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/bmo/confirm`

POST

```json
{
  "reference": "4oJPO7co4G2M",
  "otp": "118422"
}
```

###### Example (axios) — Step 2: confirmation

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/bmo/confirm",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_votreApiKey',
  },
  data: {
    reference: '4oJPO7co4G2M',
    otp: '118422'
  }
});
```

```json
{
  "reference": "4oJPO7co4G2M",
  "status": "SUCCESSFUL"
}
```

The response gives the final status: SUCCESSFUL or FAILED. If the code is invalid or has expired, cancel the request and start again from step 1 (new SMS).

No B-MO webhook

The final status is only known from the step 2 (confirmation) response, or by querying the generic status API with the reference.

##### Step 3 — Cancel (if the customer gives up)

Call /requesttopay/bmo/cancel with the reference if the customer never confirms the code.

###### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/bmo/cancel`

POST

```json
{
  "reference": "4oJPO7co4G2M"
}
```

###### Example (axios) — Step 3: cancellation

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/bmo/cancel",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_votreApiKey',
  },
  data: {
    reference: '4oJPO7co4G2M'
  }
});
```

##### B-MO error codes

| Case | HTTP code | Message |
| --- | --- | --- |
| Number unknown to B-MO, without first and last name | 400 | `first_name and last_name are required: customer is not an existing BMO customer` |
| Invalid or expired SMS code | 400 | invalid or expired code: offer the customer to start again |
| Transaction already finalized (SUCCESSFUL or FAILED) | 400 | `Transaction already SUCCESSFUL` |
| Unknown reference | 404 | `Transaction not found` |
| B-MO temporarily unavailable | 503 | `B-MO service is temporarily unavailable, please retry later` |

---

## Tab: Togo › MOOV TOGO

[TOGOCOM]  [MOOV TOGO]

#### Moov Togo

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov_tg`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | Moov Togo phone number | 22866000000 |
| amount | Required | Transaction amount (minimum 100) | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov_tg",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_8x9wpyCm2NmzMF6u6kh22IAtZyOw8VjnrZzqLd5PwecrYVQsEWGLElmcrK5uWemb',
  },
  data: {
    amount: 100,
    last_name: 'LOUGBEGNON',
    first_name: 'Amedee',
    phoneNumber: '22866000000',
    shop: '63dda25708903272fb93d12a',
  }
});
```

##### Response (example)

```json
{
  "responsemsg": "Demande en cours de traitement",
  "reference": "9LpRcBGrTkPN5PgYnU",
  "transref": "9LpRcBGrTkPN5PgYnU",
  "status": "PENDING",
  "statusCode": 200
}
```

---

## Tab: Côte d'Ivoire › MOOV COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

#### Moov Money Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov_ci`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | Phone number in Côte d'Ivoire international format | 225XXXXXXXXX |
| amount | Required | Transaction amount | 100 |
| shop | Required | Shop identifier | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| return\_url | Optional | Redirect URL after payment | Redirect URL after payment | http://feexpay.me |
| description | Optional | A description of the transaction (40 characters maximum) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov_ci",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 100,
    phoneNumber: 225XXXXXXXXX,
    first_name: 'FeexPay',
    last_name: 'FeexPay',
    return_url: 'http://feexpay.me',
    description: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "order_id": "9LpRcBGrTkPN5PgYnU",
  "reference": "9LpRcBGrTkPN5PgYnU",
  "payment_url": "https://pay.moov.com/c/cos-244vx60kg2fcr?a=100&c=XOF&m=CHRISTEM%20SHOP%20%2A%20Feex"
}
```

---

## Tab: Côte d'Ivoire › WAVE COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

#### Wave Côte d'Ivoire

Wave account activation required

Before using this API, first activate your Wave account via[https://app-v2.feexpay.me/configuration](https://app-v2.feexpay.me/configuration).

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/wave_ci`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A Wave Côte d'Ivoire phone number | 225XXXXXXXXX |
| amount | Required | Transaction amount (minimum 100) | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| return\_url | Optional | URL the customer is redirected to after a successful payment | http://feexpay.me |
| cancel\_url | Optional | Redirect URL when payment fails | http://feexpay.me/cancel |
| description | Optional | A description of the transaction (40 characters maximum) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/wave_ci",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 100,
    phoneNumber: 225XXXXXXXXX,
    first_name: 'FeexPay',
    last_name: 'FeexPay',
    return_url: 'http://feexpay.me',
    cancel_url: 'http://feexpay.me/cancel',
    description: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "order_id": "9LpRcBGrTkPN5PgYnU",
  "reference": "9LpRcBGrTkPN5PgYnU",
  "payment_url": "https://pay.wave.com/c/cos-244vx60kg2fcr?a=100&c=XOF&m=CHRISTEM%20SHOP%20%2A%20Feex"
}
```

---

## Tab: Côte d'Ivoire › ORANGE COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

#### Orange Money Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/orange_ci`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | An Orange Côte d'Ivoire phone number | 225XXXXXXXXX |
| amount | Required | Transaction amount (minimum 100) | 100 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| return\_url | Optional | Redirect URL after payment | http://feexpay.me |
| description | Optional | A description of the transaction (40 characters maximum) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/orange_ci",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 100,
    phoneNumber: 2250556786596,
    first_name: 'FeexPay',
    last_name: 'FeexPay',
    return_url: 'http://feexpay.me',
    description: 'FeexPay'
  }
});
```

##### Response (example)

```json
{
  "order_id": "9LpRcBGrTkPN5PgYnU",
  "reference": "9LpRcBGrTkPN5PgYnU",
  "payment_url": "https://mpayment.orange-money.com/ci/mpayment/abstract/v1nt2o36xeetqwcnicn4qbmstwc30hpdg5hdnveaynzugmtrdejl8dyh1lvkwnjb"
}
```

---

## Tab: Côte d'Ivoire › DJAMO COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

#### Djamo Côte d'Ivoire

Djamo lets your customers pay from their Djamo account (Djamo to Djamo only). The API creates a payment request and returns a link (payment\_url) that the customer opens to approve the payment in their Djamo app.

Payment flow

1\. Call the endpoint: the transaction is created with status PENDING. 2. Redirect the customer to payment\_url (or show it as a QR code if they pay from another device). 3. The customer approves in their Djamo app, then Djamo sends them back to return\_url (or cancel\_url if they cancel). 4. The final status is sent to your webhook; you can also read it with the status API. Without payment within 1 hour, the request expires and the transaction becomes FAILED.

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/djamo_ci`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | Customer's Djamo account number: 225 followed by the 10 digits | 2250700000000 |
| amount | Required | Amount in XOF (between 10 and 2,000,000) | 1000 |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| email | Optional | Customer's email address | client@example.com |
| return\_url | Optional | URL Djamo sends the customer back to after a successful payment | https://votre-site.com/merci |
| cancel\_url | Optional | URL Djamo sends the customer back to if they cancel the payment | https://votre-site.com/panier |
| description | Optional | Payment description, shown to the customer in Djamo (100 characters maximum) | Commande 123 |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/djamo_ci",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 1000,
    phoneNumber: '2250700000000',
    first_name: 'FeexPay',
    last_name: 'FeexPay',
    return_url: 'https://votre-site.com/merci',
    cancel_url: 'https://votre-site.com/panier',
    description: 'Commande 123'
  }
});
```

##### Response (example)

```json
{
  "reference": "9LpRcBGrTkPN",
  "status": "PENDING",
  "payment_url": "https://pay.djamo.com/c/ch_01JD2X4B7K9M",
  "url": "https://pay.djamo.com/c/ch_01JD2X4B7K9M",
  "description": "Commande 123",
  "callback_info": null,
  "phone_number": "2250700000000"
}
```

The response is always PENDING: the payment is only confirmed once the customer approves it. Never deliver based on the redirect to return\_url alone: confirm the status through the webhook or the status API.

Return URL

return\_url and cancel\_url must be public URLs with a domain name (e.g. https://your-site.com/thanks). A local address such as http://localhost:3000 is rejected by Djamo: FeexPay then uses its default confirmation page.

---

## Tab: Senegal › WAVE SENEGAL

[ORANGE SENEGAL]  [WAVE SENEGAL]  [FREE SENEGAL]

#### Wave Senegal

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/wave_sn`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 221771740000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (Developer menu on FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| return\_url | Optional | URL the customer is redirected to after a successful payment | http://feexpay.me |
| cancel\_url | Optional | Redirect URL when payment fails | http://feexpay.me/cancel |
| description | Optional | A description of the transaction (40 characters maximum) | Paiement test |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/wave_sn",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 100,
    phoneNumber: 221771740000,
    return_url: 'http://feexpay.me',
    cancel_url: 'http://feexpay.me/cancel',
  }
});
```

##### Response (example)

```json
{
  "reference": "GcvSDuSCDZDE",
  "status": "PENDING",
  "message": "Transaction initiated successfully",
  "payment_url": "https://pay.wave.com/c/cos-24temkt4g1pj6?a=100&c=XOF&m=PIXPAY%20SA%20%2A%20Mikaty"
}
```

Payment flow

The user must be redirected to **payment\_url** to complete the payment. Once the payment succeeds, they will be redirected to your **return\_url**.

---

## Tab: Senegal › FREE SENEGAL

[ORANGE SENEGAL]  [WAVE SENEGAL]  [FREE SENEGAL]

#### Free Money Senegal

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/free_sn`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 221771740000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (Developer menu on FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optional | Customer first name | FeexPay |
| last\_name | Optional | Customer last name | FeexPay |
| return\_url | Optional | URL where user will be redirected after payment | http://feexpay.me |
| description | Optional | A description of the transaction (40 characters maximum) | FeexPay |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/free_sn",
  method: 'post',
  headers: {
    Authorization: 'Bearer fp_M6tuzYgsYl39d6kJvdaLmYGQcEAWvLRivVhbeK4UCwbDiyMlj9UPMO',
  },
  data: {
    shop: 'Ayg9lkjkhurIvNp',
    amount: 100,
    phoneNumber: 221771740000,
    return_url: 'http://feexpay.me',
  }
});
```

##### Response (example)

```json
{
  "reference": "LYneHXLO5KP9",
  "status": "PENDING",
  "message": "Transaction initiated successfully"
}
```

Payment flow

The user must be redirected to **payment\_url** to complete the payment. Once the payment succeeds, they will be redirected to your **return\_url**.

---

## Tab: Burkina Faso › ORANGE BURKINA

[MOOV BURKINA]  [ORANGE BURKINA]  [WAVE BURKINA]

#### Orange Burkina Faso

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/orange_bf`

##### Method

POST

OTP required — Orange Burkina Faso

The customer must generate an OTP by dialing #144\*4\*6\*amount# from their Orange BF phone before the call. Include the received OTP in the otp field.

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 22670000000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (Developer menu on FeexPay) | Ayg9lkjkhurIvNp |
| otp | Required | OTP code generated via USSD #144\*4\*6\*amount# | 123456 |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/orange_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 100, phoneNumber: 22670000000, otp: '123456' }
});
```

##### Response (example)

```json
{
  "reference": "176068f8-3334-46eb-b654-59753024c13b",
  "message": "Accepted",
  "status": "PENDING",
  "description": "Paiement Mobicash",
  "callback_info": null,
  "phone_number": "22366694381"
}
```

---

## Tab: Burkina Faso › WAVE BURKINA

[MOOV BURKINA]  [ORANGE BURKINA]  [WAVE BURKINA]

#### Wave Burkina Faso

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/wave_bf`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| phoneNumber | Required | A phone number | 22670000000 |
| amount | Required | Minimum transaction amount 100 | 100 |
| shop | Required | Shop ID (Developer menu on FeexPay) | Ayg9lkjkhurIvNp |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/wave_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 100, phoneNumber: 22670000000, otp: '123456' }
});
```

##### Response (example)

```json
{
  "reference": "dSOiM3Qc6HXF",
  "status": "PENDING",
  "message": "Transaction initiated successfully",
  "payment_url": "https://pay.wave.com/c/cos-xxxxx"
}
```

---

## Tab: Nigeria › PAY WITH BANK

[BANK TRANSFER]  [PAY WITH BANK]

##### Collecting payments in Nigeria

In Nigeria, your customers do not pay with mobile money but from their bank account. FeexPay offers two methods. Choose the one that fits your checkout, or offer both to your customers.

|  | Bank Transfer | Pay with Bank |
| --- | --- | --- |
| How it works | FeexPay generates a temporary bank account reserved for this payment. The customer sends a transfer to it from their banking app. | The customer picks their bank (Opay, PalmPay…) and is redirected to it to approve the payment. |
| What you receive | An account number, the bank, the exact amount and an expiry time | A payment link (payment\_url) |
| What you must do | Show this information to your customer | Redirect your customer to the link |
| Customer banks | All Nigerian banks | Only the banks in the list (/banks route) |
| Minimum amount | NGN 100 | NGN 200 |

All amounts are in naira (NGN), as whole numbers. Nigeria is only available on API v2.

How do I know the customer has paid?

The creation response always returns the PENDING status: the customer has not paid yet. Never deliver based on this response. The final status (SUCCESSFUL or FAILED) is sent to you by webhook (see the Webhooks section), and you can check it at any time with the reference (see the Payin status section).

#### Pay with Bank (redirect to the bank)

##### The flow in 4 steps

1.  You fetch the list of available banks (/banks route below) and offer it to your customer.
2.  The customer picks their bank: you call the API with the bank code (bank\_code) and your return address (redirect\_url).
3.  You redirect your customer to the returned payment\_url. They log in to their bank and approve the payment.
4.  The bank sends the customer back to your redirect\_url, and you receive the webhook with the final status.

Good to know

-   The customer coming back to your redirect\_url does not prove payment: wait for the webhook or check the status.
-   Minimum amount: NGN 200.

##### Step 1: list of available banks

Returns the banks your customers can use with Pay with Bank. Pass the code field as bank\_code.

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/pay_with_bank_ng/banks`

##### Method

GET

```json
{
  "banks": [
    { "code": "100004", "name": "Opay" },
    { "code": "100033", "name": "PalmPay" }
  ]
}
```

##### Pay with Bank (redirect to the bank)

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/pay_with_bank_ng`

##### Method

POST

##### Request body

| Parameter | Status | Description | Example |
| --- | --- | --- | --- |
| amount | Required | Amount to collect in NGN (whole number, 200 to 10,000,000) | 5000 |
| bank\_code | Required | Code of the bank chosen by the customer (/banks route) | 100004 |
| redirect\_url | Optional | Where to send the customer back after payment (not to be confused with payment\_url). Default: https://feexpay.me | https://myshop.com/thanks |
| shop | Required | Shop ID (FeexPay Developer menu) | Ayg9lkjkhurIvNp |
| description | Optional | Payment description (40 characters max) | Order 1234 |
| first\_name | Optional | Customer first name | Ada |
| last\_name | Optional | Customer last name | Okafor |
| email | Optional | Customer email | ada@example.com |
| callback\_info | Optional | Additional information returned by the webhook | order\_12345 |

##### Headers

Add `Authorization: Bearer <votre-api-key>`

Important

Without this header, your request will be rejected.

##### Example (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/pay_with_bank_ng",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 5000, bank_code: '100004', redirect_url: 'https://myshop.com/thanks', email: 'ada@example.com' }
});
```

##### Response (example)

```json
{
  "reference": "8f1c2d3e-4b5a-4c6d-9e7f-0a1b2c3d4e5f",
  "status": "PENDING",
  "message": "Accepted",
  "description": "",
  "callback_info": null,
  "payment_url": "https://checkout.korapay.com/pay-with-bank/KPY-PAY-xxxx",
  "url": "https://checkout.korapay.com/pay-with-bank/KPY-PAY-xxxx",
  "bank_name": "Opay"
}
```

##### Response fields to display

| Parameter | Description | Example |
| --- | --- | --- |
| payment\_url | Payment link to redirect the customer to (their bank's page) | https://… |
| bank\_name | Bank chosen by the customer | Opay |
