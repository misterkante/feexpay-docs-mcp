---
id: api-rest-integrations
title: "API - Payin"
group: api
lang: fr
source: https://docs.feexpay.me/?section=api-rest-integrations&version=v2
updated_at: 2026-11-25T15:33:43.610Z
---

# API - Payin

Bienvenue dans la section API Payin de FeexPay. Découvrez comment intégrer nos solutions de paiement dans vos applications.

##### Limites de montant

Veuillez noter que le montant minimum est de 100 et le maximum est de 2.000.000 XOF

 [Bénin]  [Togo]  [Côte d'Ivoire]  [Congo Brazzaville]  [Sénégal]  [Burkina Faso]  [Nigeria] 

### Réseaux disponibles

 [MTN BENIN]  [MOOV BENIN]  [CELTIIS BENIN]  [CORIS BENIN]  [BMO BENIN] 

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

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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
| return\_url | Optionnel | URL vers laquelle le client est redirigé après un paiement réussi | http://feexpay.me |
| cancel\_url | Optionnel | URL de redirection en cas d’échec | http://feexpay.me/cancel |
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
    return_url: 'http://feexpay.me',
    cancel_url: 'http://feexpay.me/cancel',
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

Processus de paiement

L'utilisateur doit être redirigé vers **payment\_url** pour finaliser le paiement. Une fois le paiement réussi, il sera redirigé vers votre **return\_url**.

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

## Tab: Nigeria

[BANK TRANSFER]  [PAY WITH BANK]

##### Encaisser au Nigeria

Au Nigeria, vos clients ne paient pas par mobile money mais depuis leur compte bancaire. FeexPay propose deux méthodes. Choisissez celle qui convient à votre parcours, ou proposez les deux à vos clients.

|  | Bank Transfer | Pay with Bank |
| --- | --- | --- |
| Principe | FeexPay génère un compte bancaire temporaire, réservé à ce paiement. Le client y fait un virement depuis l'application de sa banque. | Le client choisit sa banque (Opay, PalmPay…) et est redirigé vers elle pour valider le paiement. |
| Ce que vous recevez | Un numéro de compte, la banque, le montant exact et une date d'expiration | Un lien de paiement (payment\_url) |
| Ce que vous devez faire | Afficher ces informations à votre client | Rediriger votre client vers le lien |
| Banques du client | Toutes les banques nigérianes | Uniquement les banques de la liste (route /banks) |
| Montant minimum | 100 NGN | 200 NGN |

Tous les montants sont en nairas (NGN), en nombre entier. Le Nigeria est disponible uniquement sur l'API v2.

Comment savoir si le client a payé ?

La réponse de création renvoie toujours le statut PENDING : le client n'a pas encore payé. Ne livrez jamais sur la base de cette réponse. Le statut final (SUCCESSFUL ou FAILED) vous est envoyé par webhook (voir la section Webhooks), et vous pouvez le consulter à tout moment avec la référence (voir la section Statut des payins).

#### Bank Transfer (virement vers un compte temporaire)

##### Le parcours en 4 étapes

1.  Vous appelez l'API avec le montant : FeexPay vous renvoie un compte bancaire temporaire (bank\_account) et le montant exact à virer (amount\_expected).
2.  Vous affichez à votre client : le nom de la banque, le numéro de compte, le nom du compte, le montant exact et l'heure limite (expires\_at). Un compte à rebours et un bouton « Copier » facilitent le paiement.
3.  Le client ouvre l'application de sa banque (GTBank, Access, Opay, Kuda…) et fait un virement classique vers ce compte.
4.  Dès que le virement est reçu, la transaction passe en SUCCESSFUL : vous recevez le webhook et votre solde Bank Transfer est crédité.

À afficher clairement à votre client

-   Le montant à virer est amount\_expected, au naira près. Un virement d'un autre montant est renvoyé au client par la banque et le paiement reste en attente.
-   Le compte n'est valable que jusqu'à expires\_at. Après cette heure, le client doit relancer un nouveau paiement.
-   Chaque compte ne sert qu'une seule fois : ne le réutilisez pas pour un autre paiement.

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/bank_transfer_ng`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| amount | Obligatoire | Montant à encaisser en NGN (entier, de 100 à 10 000 000) | 5000 |
| shop | Obligatoire | Id de la boutique (menu Développeur FeexPay) | Ayg9lkjkhurIvNp |
| description | Optionnel | Description du paiement (40 caractères maximum) | Order 1234 |
| first\_name | Optionnel | Prénom client | Ada |
| last\_name | Optionnel | Nom client | Okafor |
| email | Optionnel | E-mail du client | ada@example.com |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/bank_transfer_ng",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 5000, description: 'Order 1234', email: 'ada@example.com' }
});
```

##### Réponse de la requête (exemple)

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

##### Champs de la réponse à afficher

| Paramètre | Description | Exemple |
| --- | --- | --- |
| amount\_expected | Montant exact que le client doit virer, en NGN | 5000 |
| bank\_account.account\_number | Numéro du compte temporaire à créditer | 1494901612 |
| bank\_account.account\_name | Nom du compte (à afficher au client) | FEE-CHKOUT |
| bank\_account.bank\_name | Banque du compte temporaire | Wema Bank |
| bank\_account.expires\_at | Heure limite du virement (UTC, format ISO 8601) | 2026-11-20T17:43:59Z |

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

## Tab: BMO BENIN

#### B-MO Bénin

Paiements via B-MO (Bénin) en 3 appels séparés : initiation (envoi d'un code par SMS), confirmation (avec le code), et annulation en cas d'abandon.

Code valable 1 minute seulement

Contrairement aux autres opérateurs, B-MO annule automatiquement la demande si le code n'est pas confirmé dans la minute qui suit l'étape 1. Aucun renvoi de code n'est possible : en cas d'expiration, annulez la demande puis recommencez une nouvelle initiation.

Conservez le 0 initial du numéro

Envoyez le numéro local béninois tel quel, par exemple 0167399785 : ne retirez pas le 0 initial et n'ajoutez pas l'indicatif 229. La réponse renvoie ensuite le numéro au format international (+2290167399785).

Processus B-MO

1) Appelez /requesttopay/bmo pour déclencher l'envoi du code par SMS. 2) Appelez /requesttopay/bmo/confirm avec la reference et le code reçu. 3) En cas d'abandon, appelez /requesttopay/bmo/cancel avec la reference.

##### Étape 1 — Initier la demande (envoi du code par SMS)

###### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/bmo`

POST

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro local béninois, sans indicatif : conservez le 0 initial | 0167399785 |
| amount | Obligatoire | Montant de la transaction, entier entre 200 et 2 000 000 XOF | 1500 |
| shop | Obligatoire | ID de la boutique | Ayg9lkjkhurIvNp |
| first\_name | Conditionnel | Prénom du client — obligatoire uniquement si le numéro n'est pas déjà client B-MO | Jean |
| last\_name | Conditionnel | Nom du client — obligatoire uniquement si le numéro n'est pas déjà client B-MO | Kouassi |
| email | Optionnel | Adresse e-mail du client | jean.kouassi@exemple.com |
| description | Optionnel | Description de la transaction (40 caractères maximum) | Paiement commande |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

first\_name / last\_name conditionnels

B-MO exige first\_name et last\_name uniquement si le numéro n'est pas déjà connu comme client B-MO. Nous recommandons de toujours les renseigner : cela n'a aucun effet si le client existe déjà.

Si ces champs manquent pour un client inconnu de B-MO, la requête échoue :

```json
{
  "message": "first_name and last_name are required: customer is not an existing BMO customer",
  "status": "FAILED"
}
```

###### Exemple (axios) — Étape 1 : initiation

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

##### Étape 2 — Confirmer avec le code reçu par SMS

Appelez /requesttopay/bmo/confirm avec la reference reçue à l'étape 1 et le code OTP reçu par SMS.

###### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/bmo/confirm`

POST

```json
{
  "reference": "4oJPO7co4G2M",
  "otp": "118422"
}
```

###### Exemple (axios) — Étape 2 : confirmation

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

La réponse donne le statut final : SUCCESSFUL ou FAILED. Si le code est invalide ou a expiré, annulez la demande puis recommencez à l'étape 1 (nouveau SMS).

Pas de webhook B-MO

Le statut final n'est connu qu'à la réponse de l'étape 2 (confirmation), ou en interrogeant l'API de statut générique avec la reference.

##### Étape 3 — Annuler (si le client abandonne)

Appelez /requesttopay/bmo/cancel avec la reference si le client ne confirme jamais le code.

###### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/bmo/cancel`

POST

```json
{
  "reference": "4oJPO7co4G2M"
}
```

###### Exemple (axios) — Étape 3 : annulation

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

##### Codes d'erreur B-MO

| Cas | Code HTTP | Message |
| --- | --- | --- |
| Numéro inconnu de B-MO, sans prénom ni nom | 400 | `first_name and last_name are required: customer is not an existing BMO customer` |
| Code SMS invalide ou expiré | 400 | code invalide ou expiré : proposez au client de recommencer |
| Transaction déjà finalisée (SUCCESSFUL ou FAILED) | 400 | `Transaction already SUCCESSFUL` |
| Référence inconnue | 404 | `Transaction not found` |
| B-MO temporairement indisponible | 503 | `B-MO service is temporarily unavailable, please retry later` |

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

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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
| return\_url | Optionnel | URL de redirection après paiement | URL de redirection après paiement | http://feexpay.me |
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

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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
| return\_url | Optionnel | URL vers laquelle le client est redirigé après un paiement réussi | http://feexpay.me |
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

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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
| return\_url | Optionnel | URL de redirection après paiement | http://feexpay.me |
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

## Tab: Côte d'Ivoire › DJAMO COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

#### Djamo Côte d'Ivoire

Djamo permet à vos clients de payer depuis leur compte Djamo (Djamo vers Djamo uniquement). L'API crée une demande de paiement et renvoie un lien (payment\_url) que le client ouvre pour valider le paiement dans son application Djamo.

Déroulement du paiement

1\. Appelez l'endpoint : la transaction est créée au statut PENDING. 2. Redirigez le client vers payment\_url (ou affichez-le en QR code s'il paie depuis un autre appareil). 3. Le client valide dans son application Djamo, puis Djamo le renvoie vers return\_url (ou cancel\_url s'il annule). 4. Le statut final vous est envoyé par webhook ; vous pouvez aussi le lire avec l'API de statut. Sans paiement sous 1 heure, la demande expire et la transaction passe FAILED.

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/djamo_ci`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro du compte Djamo du client : 225 suivi des 10 chiffres | 2250700000000 |
| amount | Obligatoire | Montant en XOF (entre 10 et 2 000 000) | 1000 |
| shop | Obligatoire | Id de la boutique (menu Développeur FeexPay) | Ayg9lkjkhurIvNp |
| first\_name | Optionnel | Prénom client | FeexPay |
| last\_name | Optionnel | Nom client | FeexPay |
| email | Optionnel | Adresse e-mail du client | client@example.com |
| return\_url | Optionnel | URL vers laquelle Djamo renvoie le client après un paiement réussi | https://votre-site.com/merci |
| cancel\_url | Optionnel | URL vers laquelle Djamo renvoie le client s'il annule le paiement | https://votre-site.com/panier |
| description | Optionnel | Description du paiement, affichée au client dans Djamo (100 caractères maximum) | Commande 123 |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

La réponse est toujours PENDING : le paiement n'est confirmé qu'après validation par le client. Ne livrez jamais sur la seule base de la redirection vers return\_url : confirmez le statut par le webhook ou l'API de statut.

URL de retour

return\_url et cancel\_url doivent être des URL publiques avec un nom de domaine (ex. https://votre-site.com/merci). Une adresse locale comme http://localhost:3000 est refusée par Djamo : FeexPay utilise alors sa page de confirmation par défaut.

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
| return\_url | Optionnel | URL vers laquelle le client est redirigé après un paiement réussi | http://feexpay.me |
| cancel\_url | Optionnel | URL de redirection en cas d’échec | http://feexpay.me/cancel |
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
    cancel_url: 'http://feexpay.me/cancel',
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

L'utilisateur doit être redirigé vers **payment\_url** pour finaliser le paiement. Une fois le paiement réussi, il sera redirigé vers votre **return\_url**.

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

L'utilisateur doit être redirigé vers **payment\_url** pour finaliser le paiement. Une fois le paiement réussi, il sera redirigé vers votre **return\_url**.

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

---

## Tab: Nigeria › PAY WITH BANK

[BANK TRANSFER]  [PAY WITH BANK]

##### Encaisser au Nigeria

Au Nigeria, vos clients ne paient pas par mobile money mais depuis leur compte bancaire. FeexPay propose deux méthodes. Choisissez celle qui convient à votre parcours, ou proposez les deux à vos clients.

|  | Bank Transfer | Pay with Bank |
| --- | --- | --- |
| Principe | FeexPay génère un compte bancaire temporaire, réservé à ce paiement. Le client y fait un virement depuis l'application de sa banque. | Le client choisit sa banque (Opay, PalmPay…) et est redirigé vers elle pour valider le paiement. |
| Ce que vous recevez | Un numéro de compte, la banque, le montant exact et une date d'expiration | Un lien de paiement (payment\_url) |
| Ce que vous devez faire | Afficher ces informations à votre client | Rediriger votre client vers le lien |
| Banques du client | Toutes les banques nigérianes | Uniquement les banques de la liste (route /banks) |
| Montant minimum | 100 NGN | 200 NGN |

Tous les montants sont en nairas (NGN), en nombre entier. Le Nigeria est disponible uniquement sur l'API v2.

Comment savoir si le client a payé ?

La réponse de création renvoie toujours le statut PENDING : le client n'a pas encore payé. Ne livrez jamais sur la base de cette réponse. Le statut final (SUCCESSFUL ou FAILED) vous est envoyé par webhook (voir la section Webhooks), et vous pouvez le consulter à tout moment avec la référence (voir la section Statut des payins).

#### Pay with Bank (redirection vers la banque)

##### Le parcours en 4 étapes

1.  Vous récupérez la liste des banques disponibles (route /banks ci-dessous) et la proposez à votre client.
2.  Le client choisit sa banque : vous appelez l'API avec le code de la banque (bank\_code) et l'adresse de retour (redirect\_url).
3.  Vous redirigez votre client vers le payment\_url renvoyé. Il se connecte à sa banque et valide le paiement.
4.  La banque renvoie le client sur votre redirect\_url, et vous recevez le webhook avec le statut final.

Bon à savoir

-   Le retour du client sur votre redirect\_url ne prouve pas le paiement : attendez le webhook ou vérifiez le statut.
-   Montant minimum : 200 NGN.

##### Étape 1 : liste des banques disponibles

Renvoie les banques que vos clients peuvent utiliser avec Pay with Bank. Passez le champ code dans bank\_code.

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/pay_with_bank_ng/banks`

##### Méthode

GET

```json
{
  "banks": [
    { "code": "100004", "name": "Opay" },
    { "code": "100033", "name": "PalmPay" }
  ]
}
```

##### Pay with Bank (redirection vers la banque)

##### URL

`https://api-v2.feexpay.me/api/transactions/public/requesttopay/pay_with_bank_ng`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| amount | Obligatoire | Montant à encaisser en NGN (entier, de 200 à 10 000 000) | 5000 |
| bank\_code | Obligatoire | Code de la banque choisie par le client (route /banks) | 100004 |
| redirect\_url | Optionnel | Adresse où renvoyer le client après le paiement (à ne pas confondre avec payment\_url). Par défaut : https://feexpay.me | https://myshop.com/thanks |
| shop | Obligatoire | Id de la boutique (menu Développeur FeexPay) | Ayg9lkjkhurIvNp |
| description | Optionnel | Description du paiement (40 caractères maximum) | Order 1234 |
| first\_name | Optionnel | Prénom client | Ada |
| last\_name | Optionnel | Nom client | Okafor |
| email | Optionnel | E-mail du client | ada@example.com |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/pay_with_bank_ng",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 5000, bank_code: '100004', redirect_url: 'https://myshop.com/thanks', email: 'ada@example.com' }
});
```

##### Réponse de la requête (exemple)

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

##### Champs de la réponse à afficher

| Paramètre | Description | Exemple |
| --- | --- | --- |
| payment\_url | Lien de paiement vers lequel rediriger le client (page de sa banque) | https://… |
| bank\_name | Banque choisie par le client | Opay |
