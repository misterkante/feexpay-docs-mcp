---
id: services-payout
title: "API - Payout"
group: api
lang: fr
source: https://docs.feexpay.me/?section=services-payout&version=v2
updated_at: 2026-11-25T15:33:43.610Z
---

# API - Payout

Cette section regroupe les **Payouts** par pays et par réseau. Utilisez les onglets pour choisir un pays, puis cliquez sur un réseau pour voir les étapes (URL, méthode, corps, entêtes, exemples).

Attention

Vous pouvez également configurer vous-même la liste d'IP directement depuis votre dashboard dans l'onglet 'IP List'.

Comportement V2 : statut PENDING au lancement

Sur la V2, le lancement d'un payout renvoie immédiatement un statut PENDING. Vous devez ensuite vérifier le statut final (SUCCESSFUL ou FAILED) via la section Statut des payouts.

 [Bénin]  [Côte d'Ivoire]  [Togo]  [Sénégal]  [Congo]  [Burkina Faso]  [Nigeria] 

### Réseaux disponibles

 [MTN/MOOV]  [CELTIIS BJ]  [BMO BJ] 

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

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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

## Tab: Nigeria

[BANK TRANSFER]  [PAY WITH BANK]

#### Payout au Nigeria : virement vers un compte bancaire — BANK TRANSFER

Au Nigeria, un payout est un virement en nairas vers n'importe quel compte bancaire nigérian (banques classiques, Opay, PalmPay, Kuda…). Le bénéficiaire est identifié par sa banque (bank\_code) et son numéro de compte à 10 chiffres (account\_number).

Quel solde est débité ?

Il existe deux routes de payout, qui font exactement le même virement. La seule différence est le solde débité : /bank\_transfer\_ng débite votre solde Bank Transfer, /pay\_with\_bank\_ng débite votre solde Pay with Bank. Utilisez celle du solde sur lequel vous avez des fonds.

##### Le parcours en 4 étapes

1.  Récupérez la liste des banques (route /ng/banks) pour obtenir le bank\_code du bénéficiaire.
2.  Vérifiez le compte (route /ng/resolve\_account) : FeexPay renvoie le nom du titulaire. Affichez-le pour confirmation avant d'envoyer l'argent.
3.  Lancez le payout. La réponse renvoie le statut PENDING : le virement est en cours.
4.  Le statut final (SUCCESSFUL ou FAILED) arrive par webhook, en général en quelques minutes. En cas d'échec, le montant débité est automatiquement recrédité sur votre solde.

Tous les montants sont en nairas (NGN), en nombre entier. Le Nigeria est disponible uniquement sur l'API v2.

##### Étape 1 : liste des banques

Renvoie toutes les banques nigérianes acceptées pour un payout. Passez le champ code dans bank\_code.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/ng/banks`

##### Méthode

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

##### Étape 2 : vérifier le compte du bénéficiaire

Renvoie le nom du titulaire du compte. Si le compte n'existe pas, l'API répond 400 avec le code INVALID\_BANK\_ACCOUNT. Cette vérification est aussi faite automatiquement au lancement du payout, avant tout débit de votre solde.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/ng/resolve_account`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| bank\_code | Obligatoire | Code de la banque du bénéficiaire (route /ng/banks) | 058 |
| account\_number | Obligatoire | Numéro de compte du bénéficiaire (NUBAN, 10 chiffres) | 0123456789 |

```json
{
  "bank_code": "058",
  "bank_name": "Guaranty Trust Bank",
  "account_number": "0123456789",
  "account_name": "ADA OKAFOR"
}
```

##### Étape 3 : lancer le payout

##### URL

`https://api-v2.feexpay.me/api/payouts/public/bank_transfer_ng`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| amount | Obligatoire | Montant à envoyer en NGN (entier, de 100 à 10 000 000) | 25000 |
| shop | Obligatoire | Id de la boutique (menu Développeur FeexPay) | Ayg9lkjkhurIvNp |
| bank\_code | Obligatoire | Code de la banque du bénéficiaire (route /ng/banks) | 058 |
| account\_number | Obligatoire | Numéro de compte du bénéficiaire (NUBAN, 10 chiffres) | 0123456789 |
| motif | Optionnel | Motif du virement | Salary November |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | payout\_789 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/bank_transfer_ng",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 25000, bank_code: '058', account_number: '0123456789', motif: 'Salary November' }
});
```

##### Réponse de la requête (exemple)

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

Frais

Les frais de payout s'ajoutent au montant envoyé : votre solde est débité du montant plus les frais. Le bénéficiaire reçoit exactement amount.

Suivi du statut

Une fois la réponse reçue, vérifiez le statut avec la **reference** après environ 5 minutes (voir la section Status des payouts).

##### Erreurs fréquentes

<table class="min-w-full text-sm text-left text-gray-700 dark:text-gray-300"><tbody><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">400 INVALID_BANK_ACCOUNT</td><td class="py-2 pr-4">Le compte n'existe pas pour cette banque. Rien n'est débité.</td></tr><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">400 (validation)</td><td class="py-2 pr-4">amount hors limites (100 à 10 000 000 NGN), bank_code ou account_number mal formé.</td></tr><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">Solde insuffisant</td><td class="py-2 pr-4">Le solde choisi ne couvre pas le montant plus les frais.</td></tr><tr class="align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">202 PENDING, message Processing</td><td class="py-2 pr-4">Notre partenaire n'a pas encore confirmé la réception. Ne relancez pas le payout : le statut final arrivera par webhook.</td></tr></tbody></table>

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

## Tab: BMO BJ

#### Payout BMO Bénin

Permet d'effectuer des payouts vers BMO (wallet) au Bénin

##### URL

`https://api-v2.feexpay.me/api/payouts/public/bmo`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro de téléphone béninois du bénéficiaire — conservez le 0 initial du numéro local (ex: 0167399785) | 0167399785 |
| amount | Obligatoire | Montant de la transaction, entier entre 10 et 2 000 000 XOF | 1500 |
| shop | Obligatoire | ID boutique | Ayg9lkjkhurIvNp |
| motif | Obligatoire | Motif / description de la transaction | FeexPay |
| first\_name | Conditionnel | Prénom du bénéficiaire — obligatoire uniquement si le numéro n'est pas déjà client B-MO | Jean |
| last\_name | Conditionnel | Nom du bénéficiaire — obligatoire uniquement si le numéro n'est pas déjà client B-MO | Kouassi |
| email | Optionnel | Adresse e-mail du bénéficiaire | jean.kouassi@exemple.com |
| callback\_info | Optionnel | Informations libres, renvoyées telles quelles | order\_12345 |

Prénom et nom conditionnels

B-MO exige first\_name et last\_name uniquement si le bénéficiaire n'est pas déjà client B-MO. Envoyez-les toujours : cela n'a aucun effet si le bénéficiaire existe déjà.

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>` dans les headers.

Important

Sans cet entête au niveau de votre requête vous ne serez pas autorisé(e) et votre requête n'aboutira pas.

##### Exemple (axios)

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

##### Réponse de la requête (exemple)

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

-   `SUCCESSFUL` — le transfert est effectué ;
-   `FAILED` — le transfert a échoué, le champ message donne le motif ;
-   `PENDING` — le transfert est traité automatiquement en arrière-plan, aucune action n'est requise de votre part.

---

## Tab: Côte d'Ivoire › ORANGE COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

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

## Tab: Côte d'Ivoire › DJAMO COTE D'IVOIRE

[MTN COTE D'IVOIRE]  [ORANGE COTE D'IVOIRE]  [MOOV COTE D'IVOIRE]  [WAVE COTE D'IVOIRE]  [DJAMO COTE D'IVOIRE]

#### Payout Djamo Côte d'Ivoire

Permet d'effectuer des transferts vers un compte Djamo en Côte d'Ivoire (entre 500 et 500 000 XOF par transfert). Le bénéficiaire doit avoir un compte Djamo.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/djamo_ci`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| phoneNumber | Obligatoire | Numéro du compte Djamo du bénéficiaire : 225 suivi des 10 chiffres | 2250700000000 |
| amount | Obligatoire | Montant en XOF (entre 500 et 500 000) | 5000 |
| shop | Obligatoire | Id de la boutique (menu Développeur sur FeexPay) | Ayg9lkjkhurIvNp |
| email | Optionnel | L'adresse mail du client qui reçoit les sous | johndoe@gmail.com |
| motif | Obligatoire | Motif du transfert, visible par le bénéficiaire (100 caractères maximum) | FeexPay |
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
    phoneNumber: '2250700000000',
    amount: 5000,
    shop: 'Ayg9lkjkhurIvNp',
    email: 'johndoe@gmail.com',
    motif: 'Remboursement commande 123'
  }
});
```

Suivi du statut

Une fois la réponse reçue, vérifiez le statut avec la <strong>reference</strong> après environ 5 minutes (voir la section Status des payouts). Pour Djamo, la réponse est généralement PENDING : le statut final arrive par webhook.

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

---

## Tab: Nigeria › PAY WITH BANK

[BANK TRANSFER]  [PAY WITH BANK]

#### Payout au Nigeria : virement vers un compte bancaire — PAY WITH BANK

Au Nigeria, un payout est un virement en nairas vers n'importe quel compte bancaire nigérian (banques classiques, Opay, PalmPay, Kuda…). Le bénéficiaire est identifié par sa banque (bank\_code) et son numéro de compte à 10 chiffres (account\_number).

Quel solde est débité ?

Il existe deux routes de payout, qui font exactement le même virement. La seule différence est le solde débité : /bank\_transfer\_ng débite votre solde Bank Transfer, /pay\_with\_bank\_ng débite votre solde Pay with Bank. Utilisez celle du solde sur lequel vous avez des fonds.

##### Le parcours en 4 étapes

1.  Récupérez la liste des banques (route /ng/banks) pour obtenir le bank\_code du bénéficiaire.
2.  Vérifiez le compte (route /ng/resolve\_account) : FeexPay renvoie le nom du titulaire. Affichez-le pour confirmation avant d'envoyer l'argent.
3.  Lancez le payout. La réponse renvoie le statut PENDING : le virement est en cours.
4.  Le statut final (SUCCESSFUL ou FAILED) arrive par webhook, en général en quelques minutes. En cas d'échec, le montant débité est automatiquement recrédité sur votre solde.

Tous les montants sont en nairas (NGN), en nombre entier. Le Nigeria est disponible uniquement sur l'API v2.

##### Étape 1 : liste des banques

Renvoie toutes les banques nigérianes acceptées pour un payout. Passez le champ code dans bank\_code.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/ng/banks`

##### Méthode

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

##### Étape 2 : vérifier le compte du bénéficiaire

Renvoie le nom du titulaire du compte. Si le compte n'existe pas, l'API répond 400 avec le code INVALID\_BANK\_ACCOUNT. Cette vérification est aussi faite automatiquement au lancement du payout, avant tout débit de votre solde.

##### URL

`https://api-v2.feexpay.me/api/payouts/public/ng/resolve_account`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| bank\_code | Obligatoire | Code de la banque du bénéficiaire (route /ng/banks) | 058 |
| account\_number | Obligatoire | Numéro de compte du bénéficiaire (NUBAN, 10 chiffres) | 0123456789 |

```json
{
  "bank_code": "058",
  "bank_name": "Guaranty Trust Bank",
  "account_number": "0123456789",
  "account_name": "ADA OKAFOR"
}
```

##### Étape 3 : lancer le payout

##### URL

`https://api-v2.feexpay.me/api/payouts/public/pay_with_bank_ng`

##### Méthode

POST

##### Corps de la requête

| Paramètre | Statut | Description | Exemple |
| --- | --- | --- | --- |
| amount | Obligatoire | Montant à envoyer en NGN (entier, de 100 à 10 000 000) | 25000 |
| shop | Obligatoire | Id de la boutique (menu Développeur FeexPay) | Ayg9lkjkhurIvNp |
| bank\_code | Obligatoire | Code de la banque du bénéficiaire (route /ng/banks) | 058 |
| account\_number | Obligatoire | Numéro de compte du bénéficiaire (NUBAN, 10 chiffres) | 0123456789 |
| motif | Optionnel | Motif du virement | Salary November |
| callback\_info | Optionnel | Informations additionnelles renvoyées par le webhook | payout\_789 |

##### Entetes (Headers)

Ajoutez `Authorization: Bearer <votre-api-key>`

Important

Sans cet entete, votre requête sera refusée.

##### Exemple (axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/payouts/public/pay_with_bank_ng",
  method: 'post',
  headers: { Authorization: 'Bearer fp_votre_api_key' },
  data: { shop: 'Ayg9lkjkhurIvNp', amount: 25000, bank_code: '058', account_number: '0123456789', motif: 'Salary November' }
});
```

##### Réponse de la requête (exemple)

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

Frais

Les frais de payout s'ajoutent au montant envoyé : votre solde est débité du montant plus les frais. Le bénéficiaire reçoit exactement amount.

Suivi du statut

Une fois la réponse reçue, vérifiez le statut avec la **reference** après environ 5 minutes (voir la section Status des payouts).

##### Erreurs fréquentes

<table class="min-w-full text-sm text-left text-gray-700 dark:text-gray-300"><tbody><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">400 INVALID_BANK_ACCOUNT</td><td class="py-2 pr-4">Le compte n'existe pas pour cette banque. Rien n'est débité.</td></tr><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">400 (validation)</td><td class="py-2 pr-4">amount hors limites (100 à 10 000 000 NGN), bank_code ou account_number mal formé.</td></tr><tr class="border-b border-gray-100 dark:border-gray-700/60 align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">Solde insuffisant</td><td class="py-2 pr-4">Le solde choisi ne couvre pas le montant plus les frais.</td></tr><tr class="align-top"><td class="py-2 pr-4 font-mono whitespace-nowrap">202 PENDING, message Processing</td><td class="py-2 pr-4">Notre partenaire n'a pas encore confirmé la réception. Ne relancez pas le payout : le statut final arrivera par webhook.</td></tr></tbody></table>
