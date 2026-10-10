---
id: services-payout
title: "API - Payout"
group: api
lang: fr
source: https://docs.feexpay.me/?section=services-payout&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# API - Payout

Cette section regroupe les **Payouts** par pays et par réseau. Utilisez les onglets pour choisir un pays, puis cliquez sur un réseau pour voir les étapes (URL, méthode, corps, entêtes, exemples).

Attention

Vous pouvez également configurer vous-même la liste d'IP directement depuis votre dashboard dans l'onglet 'IP List'.

Comportement V2 : statut PENDING au lancement

Sur la V2, le lancement d'un payout renvoie immédiatement un statut PENDING. Vous devez ensuite vérifier le statut final (SUCCESSFUL ou FAILED) via la section Statut des payouts.

 [Bénin]  [Côte d'Ivoire]  [Togo]  [Sénégal]  [Congo]  [Burkina Faso] 

### Réseaux disponibles

 [MTN/MOOV]  [CELTIIS BJ] 

#### A) Payout Global Bénin (MTN/Moov)

Permet d'effectuer des payouts vers Mobile Money au Bénin (MTN Mobile Money et Moov Money)

##### URL

`https://api-v2.feexpay.me/api/payouts/public/transfer/global`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro 10 chiffres avec préfixe 01 | 2290166000000 |
| amount | Obligatoire | Montant minimum 50 | 100 |
| shop | Obligatoire | ID boutique | Ayg9lkjkhurIvNp |
| network | Obligatoire | Réseau (MTN ou MOOV) | MTN |
| motif | Obligatoire | Description transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

##### B) Réponse de la requête

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

Permet d'effectuer des payouts vers MTN Mobile Money en Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/payouts/public/mtn_ci`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro MTN CI | 2250507700000 |
| amount | Obligatoire | Montant minimum 100 | 100 |
| shop | Obligatoire | ID boutique | Ayg9lkjkhurIvNp |
| motif | Obligatoire | Description transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| email | Optionnel | Email bénéficiaire | johndoe@gmail.com |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

#### Payout Global Togo (TOGOCOM/Moov TG)

Permet d'effectuer des payouts vers Mobile Money au Togo (TOGOCOM et Moov Togo)

##### URL

`https://api-v2.feexpay.me/api/payouts/public/togo`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 22871000000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| network | Obligatoire | Le réseau mobile (TOGOCOM TG ou MOOV TG) | TOGOCOM TG |
| email | Optionnel | L'adresse mail du client qui reçoit les sous | johndoe@gmail.com |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

## Tab: Sénégal

[ORANGE SENEGAL]  [FREE SENEGAL]  [WAVE SENEGAL]

#### Payout Orange Sénégal

Permet d'effectuer des payouts vers Orange Money au Sénégal

##### URL

`https://api-v2.feexpay.me/api/payouts/public/orange_sn`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 221771740000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| email | Optionnel | L'adresse mail du client qui reçoit les sous | johndoe@gmail.com |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

Permet d'effectuer des payouts vers MTN Mobile Money au Congo Brazzaville

##### URL

`https://api-v2.feexpay.me/api/payouts/public/mtn_cg`

##### Méthode

POST

##### Entetes (Headers)

Dans l’en-tête de votre requête (header), il doit avoir une clé `Authorization` qui aura comme valeur `Bearer <votre-api-key>`.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 242676600000000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (à retrouver dans le menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| email | Optionnel | L'adresse mail du client qui reçoit les sous | johndoe@gmail.com |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 22670000000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/moov_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { phoneNumber: 22670000000, amount: 100, shop: 'Ayg9lkjkhurIvNp', motif: 'FeexPay' }
});
```

##### Réponse de la requête (exemple)

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

#### Payout CELTIIS Bénin

Permet d'effectuer des payouts vers CELTIIS au Bénin

##### URL

`https://api-v2.feexpay.me/api/payouts/public/celtiis_bj`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro CELTIIS 10 chiffres | 2290140000000 |
| amount | Obligatoire | Montant minimum 50 | 100 |
| shop | Obligatoire | ID boutique | Ayg9lkjkhurIvNp |
| network | Obligatoire | Réseau CELTIIS BJ | CELTIIS BJ |
| motif | Obligatoire | Description transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

Permet d'effectuer des payouts vers Orange Money en Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/payouts/public/orange_ci`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 2250707700000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| email | Optionnel | L'adresse mail du client qui reçoit les sous | johndoe@gmail.com |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

Suivi du statut

Une fois la réponse reçue, vérifiez le statut avec la <strong>reference</strong> après environ 5 minutes (voir la section Status des payouts).

##### Réponse de la requête (exemple)

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

Permet d'effectuer des payouts vers Moov Money en Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/payouts/public/moov_ci`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 2250140700000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| email | Optionnel | L'adresse mail du client qui reçoit les sous | johndoe@gmail.com |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

Suivi du statut

Une fois la réponse reçue, vérifiez le statut avec la <strong>reference</strong> après environ 5 minutes (voir la section Status des payouts).

##### Réponse de la requête (exemple)

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

Permet d'effectuer des payouts vers Wave en Côte d'Ivoire

##### URL

`https://api-v2.feexpay.me/api/payouts/public/wave_ci`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 2250140700000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| email | Optionnel | L'adresse mail du client qui reçoit les sous | johndoe@gmail.com |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

Suivi du statut

Une fois la réponse reçue, vérifiez le statut avec la <strong>reference</strong> après environ 5 minutes (voir la section Status des payouts).

##### Réponse de la requête (exemple)

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

## Tab: Sénégal › FREE SENEGAL

[ORANGE SENEGAL]  [FREE SENEGAL]  [WAVE SENEGAL]

#### Payout Free Sénégal

Permet d'effectuer des payouts vers Free Money au Sénégal

##### URL

`https://api-v2.feexpay.me/api/payouts/public/free_sn`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 221771740000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| email | Optionnel | L'adresse mail du client qui reçoit les sous | johndoe@gmail.com |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

## Tab: Sénégal › WAVE SENEGAL

[ORANGE SENEGAL]  [FREE SENEGAL]  [WAVE SENEGAL]

#### Payout Wave Sénégal

Permet d'effectuer des payouts vers Wave au Sénégal

##### URL

`https://api-v2.feexpay.me/api/payouts/public/wave_sn`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 221701740000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| email | Optionnel | L'adresse mail du client qui reçoit les sous | johndoe@gmail.com |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | order\_12345 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

##### Méthode

POST

OTP requis pour Orange Burkina Faso

Avant d'appeler cet endpoint, le bénéficiaire doit générer un OTP en composant le code USSD #144\*4\*6\*montant# depuis son téléphone Orange BF. L'OTP reçu doit être inclus dans le champ otp du corps de la requête.

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 22670000000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| otp | Obligatoire | Code OTP généré via USSD #144\*4\*6\*montant# | 123456 |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/orange_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { phoneNumber: 22670000000, amount: 100, shop: 'Ayg9lkjkhurIvNp', otp: '123456', motif: 'FeexPay' }
});
```

##### Réponse de la requête (exemple)

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

##### Méthode

POST

OTP requis pour Wave Burkina Faso

Avant d'appeler cet endpoint, le bénéficiaire doit générer un OTP via l'application Wave ou par USSD. L'OTP reçu doit être inclus dans le champ otp du corps de la requête.

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Un numéro de téléphone | 22670000000 |
| amount | Obligatoire | Le montant de la transaction minimum 100 | 100 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| otp | Obligatoire | OTP généré via l'application Wave ou USSD | 123456 |
| motif | Obligatoire | Une description sur la transaction (30 caractères maximum, pas de caractères spéciaux) | FeexPay |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/wave_bf",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { phoneNumber: 22670000000, amount: 100, shop: 'Ayg9lkjkhurIvNp', otp: '123456', motif: 'FeexPay' }
});
```

##### Réponse de la requête (exemple)

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
