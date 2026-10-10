---
id: api-rest-integrations
title: "API - Payin"
group: api
lang: fr
source: https://docs.feexpay.me/?section=api-rest-integrations&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# API - Payin

Bienvenue dans la section API Payin de FeexPay. Découvrez comment intégrer nos solutions de paiement dans vos applications.

##### Limites de montant

Veuillez noter que le montant minimum est de 100 et le maximum est de 2.000.000 XOF

 [Bénin]  [Togo]  [Côte d'Ivoire]  [Congo Brazzaville]  [Sénégal]  [Burkina Faso] 

### Réseaux disponibles

 [MTN BENIN]  [MOOV BENIN]  [CELTIIS BENIN]  [CORIS BENIN] 

#### MTN Mobile Money Bénin

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/mtn`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro 10 chiffres avec préfixe 01 | 2290166000000 |
| amount | Obligatoire | Montant de la transaction | 100 |
| shop | Obligatoire | Identifiant de la boutique | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| description | Optionnel | Sans caractères spéciaux | Achat de produit |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### B) Réponse de la requête

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

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro de téléphone Togocom | 22866000000 |
| amount | Obligatoire | Montant de la transaction (minimum 100) | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]

#### MTN Mobile Money Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/mtn_ci`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro de téléphone au format international Côte d'Ivoire | 2256766000000 |
| amount | Obligatoire | Montant de la transaction (minimum 100) | 100 |
| shop | Obligatoire | Identifiant de la boutique FeexPay | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| description | Optionnel | Texte sans caractères spéciaux décrivant la transaction (40 caractères maximum) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro de téléphone MTN Congo (format international) | 242676600000000 |
| amount | Obligatoire | Montant de la transaction (minimum 100) | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| description | Optionnel | Description sans caractères spéciaux (40 caractères maximum) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

```json
{
  "reference": "e7de7b4b-27f2-47fb-b43b-4db058994602",
  "message": "Accepted",
  "status": "PENDING"
}
```

---

## Tab: Sénégal

[ORANGE SENEGAL]  [WAVE SENEGAL]  [FREE SENEGAL]

#### Orange Money Sénégal

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/orange_sn`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 221771740000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| description | Optionnel | Une description sur la transaction (texte sans caractère spécial, 40 caractères maximum) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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
  }
});
```

##### Réponse de la requête (exemple)

```json
{
  "reference": "dSOiM3Qc6HXF",
  "status": "PENDING",
  "message": "Transaction initiated successfully",
  "payment_url": "https://sugu.orange-sonatel.com/mp/dmeHRjpE-cIy9AHDkEON"
}
```

---

## Tab: Burkina Faso

[MOOV BURKINA]  [ORANGE BURKINA]  [WAVE BURKINA]

#### Moov Burkina Faso

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov_bf`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 22670000000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 100, phoneNumber: 22670000000 }
});
```

##### Réponse de la requête (exemple)

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

## Tab: MOOV BENIN

#### Moov Mobile Money Bénin

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro 10 chiffres avec préfixe 01 | 2290163000000 |
| amount | Obligatoire | Montant de la transaction | 100 |
| shop | Obligatoire | ID boutique | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| description | Optionnel | Sans caractères spéciaux | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse opérateur (exemple)

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

Comportement Moov

Pour Moov Bénin, la réponse peut déjà contenir le statut final (par exemple FAILED en cas de solde insuffisant), sans nécessité d'appeler l'API de vérification. Si le client confirme le code, la réponse sera directement SUCCESSFUL.

---

## Tab: CELTIIS BENIN

#### Celtiis Bénin

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/celtiis_bj`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro 10 chiffres avec préfixe 01 | 2290140000000 |
| amount | Obligatoire | Montant de la transaction | 100 |
| shop | Obligatoire | ID boutique | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| description | Optionnel | Sans caractères spéciaux | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse opérateur (exemple)

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

Note Celtiis

La réponse peut inclure une charge utile SOAP. Le champ status peut initialement être PENDING; consultez l'API statut pour confirmation finale.

---

## Tab: CORIS BENIN

#### Coris Bénin

Paiements via Coris Mobile Money Bénin en deux étapes: (1) envoi OTP, (2) validation avec OTP.

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/coris`

##### Méthode

POST

##### Étape 1 — Envoi du code OTP

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro de téléphone (avec indicatif 229) | 2290166000000 |
| amount | Obligatoire | Montant de la transaction (min. 100) | 100 |
| shop | Obligatoire | ID de la boutique | Ayg9lkjkhurIvNp |
| otp | Laisser vide | Champ à remplir lors de l'étape 2 | "" |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | Client |
| description | Optionnel | Description de la transaction (40 caractères maximum) | Paiement Coris |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

###### Exemple (axios) — Étape 1

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

##### Étape 2 — Valider la transaction (avec OTP)

Renvoyez la même requête en ajoutant le code OTP reçu par SMS.

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

###### Exemple (axios) — Étape 2

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

Processus Coris

1) Envoyez la requête pour déclencher l'OTP. 2) Renvoyez la même requête avec le champ otp rempli.

---

## Tab: Togo › MOOV TOGO

[TOGOCOM]  [MOOV TOGO]

#### Moov Togo

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov_tg`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro de téléphone Moov Togo | 22866000000 |
| amount | Obligatoire | Le montant de la transaction (minimum 100) | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]

#### Moov Money Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/moov_ci`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro de téléphone au format international Côte d'Ivoire | 225XXXXXXXXX |
| amount | Obligatoire | Montant de la transaction | 100 |
| shop | Obligatoire | Identifiant de la boutique | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| return\_url | Optionnel | apiPayin.fieldDescriptions.returnUrl | apiPayin.fieldDescriptions.returnUrl | http://feexpay.me |
| description | Optionnel | Une description sur la transaction (40 caractères maximum) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

```json
{
  "order_id": "9LpRcBGrTkPN5PgYnU",
  "reference": "9LpRcBGrTkPN5PgYnU",
  "payment_url": "https://pay.moov.com/c/cos-244vx60kg2fcr?a=100&c=XOF&m=CHRISTEM%20SHOP%20%2A%20Feex"
}
```

---

## Tab: Côte d'Ivoire › WAVE COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]

#### Wave Côte d'Ivoire

Activation obligatoire du compte Wave

Avant d'utiliser cette API, activez d'abord votre compte Wave via[https://app-v2.feexpay.me/configuration](https://app-v2.feexpay.me/configuration).

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/wave_ci`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone Wave Côte d'Ivoire | 225XXXXXXXXX |
| amount | Obligatoire | Montant de la transaction (minimum 100) | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| return\_url | Optionnel | apiPayin.fieldDescriptions.returnUrl | http://feexpay.me |
| cancel\_url | Optionnel | URL de redirection en cas d’échec | http://feexpay.me/cancel |
| description | Optionnel | Une description sur la transaction (40 caractères maximum) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

```json
{
  "order_id": "9LpRcBGrTkPN5PgYnU",
  "reference": "9LpRcBGrTkPN5PgYnU",
  "payment_url": "https://pay.wave.com/c/cos-244vx60kg2fcr?a=100&c=XOF&m=CHRISTEM%20SHOP%20%2A%20Feex"
}
```

---

## Tab: Côte d'Ivoire › ORANGE COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]

#### Orange Money Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/orange_ci`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone Orange Côte d'Ivoire | 225XXXXXXXXX |
| amount | Obligatoire | Montant de la transaction (minimum 100) | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| return\_url | Optionnel | apiPayin.fieldDescriptions.returnUrl | http://feexpay.me |
| description | Optionnel | Une description sur la transaction (40 caractères maximum) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

```json
{
  "order_id": "9LpRcBGrTkPN5PgYnU",
  "reference": "9LpRcBGrTkPN5PgYnU",
  "payment_url": "https://mpayment.orange-money.com/ci/mpayment/abstract/v1nt2o36xeetqwcnicn4qbmstwc30hpdg5hdnveaynzugmtrdejl8dyh1lvkwnjb"
}
```

---

## Tab: Sénégal › WAVE SENEGAL

[ORANGE SENEGAL]  [WAVE SENEGAL]  [FREE SENEGAL]

#### Wave Sénégal

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/wave_sn`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 221771740000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| return\_url | Optionnel | L'url vers laquelle l'utilisateur sera redirigé après paiement | http://feexpay.me |
| description | Optionnel | Une description sur la transaction (40 caractères maximum) | Paiement test |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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
  }
});
```

##### Réponse de la requête (exemple)

```json
{
  "reference": "GcvSDuSCDZDE",
  "status": "PENDING",
  "message": "Transaction initiated successfully",
  "payment_url": "https://pay.wave.com/c/cos-24temkt4g1pj6?a=100&c=XOF&m=PIXPAY%20SA%20%2A%20Mikaty"
}
```

Processus de paiement

L'utilisateur doit être redirigé vers **payment\_url** pour finaliser le paiement. Une fois terminé, il sera redirigé vers votre **return\_url**.

---

## Tab: Sénégal › FREE SENEGAL

[ORANGE SENEGAL]  [WAVE SENEGAL]  [FREE SENEGAL]

#### Free Money Sénégal

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/free_sn`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 221771740000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| return\_url | Optionnel | L'url vers laquelle l'utilisateur sera redirigé après paiement | http://feexpay.me |
| description | Optionnel | Une description sur la transaction (40 caractères maximum) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

```json
{
  "reference": "LYneHXLO5KP9",
  "status": "PENDING",
  "message": "Transaction initiated successfully"
}
```

Processus de paiement

L'utilisateur doit être redirigé vers **payment\_url** pour finaliser le paiement. Une fois terminé, il sera redirigé vers votre **return\_url**.

---

## Tab: Burkina Faso › ORANGE BURKINA

[MOOV BURKINA]  [ORANGE BURKINA]  [WAVE BURKINA]

#### Orange Burkina Faso

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/orange_bf`

##### Méthode

POST

OTP requis — Orange Burkina Faso

Le client doit générer un OTP en composant #144\*4\*6\*montant# depuis son téléphone Orange BF avant l'appel. Inclure l'OTP reçu dans le champ otp.

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 22670000000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| otp | Obligatoire | Code OTP généré via USSD #144\*4\*6\*montant# | 123456 |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/orange_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 100, phoneNumber: 22670000000, otp: '123456' }
});
```

##### Réponse de la requête (exemple)

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

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 22670000000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/wave_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 100, phoneNumber: 22670000000, otp: '123456' }
});
```

##### Réponse de la requête (exemple)

```json
{
  "reference": "dSOiM3Qc6HXF",
  "status": "PENDING",
  "message": "Transaction initiated successfully",
  "payment_url": "https://pay.wave.com/c/cos-xxxxx"
}
```
