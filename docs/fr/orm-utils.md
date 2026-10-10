---
id: orm-utils
title: "ORM Utils"
group: api
lang: fr
source: https://docs.feexpay.me/?section=orm-utils&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# ORM Utils

Cette section regroupe les endpoints spéciaux de l'API FeexPay qui ne sont pas directement liés au payin ou au payout, mais qui sont utiles pour la gestion de votre compte et de vos boutiques.

### Consulter le solde par boutique

Cet endpoint vous permet de récupérer le solde de votre boutique pour chaque réseau de paiement disponible.

##### Endpoint

GET`https://api-v2.feexpay.me/api/balance/public/getByShop/{idShop}`

##### Paramètres

| Paramètre | Type | Requis | Description |
| --- | --- | --- | --- |
| idShop | string | Obligatoire | L'identifiant unique de votre boutique (disponible dans le menu Développeurs de votre dashboard) |

##### En-têtes

Ajoutez l'en-tête d'autorisation : `Authorization: Bearer <votre-api-key>`

Important

Votre clé API doit être incluse dans l'en-tête Authorization avec le préfixe 'Bearer'.

##### Exemple de requête (Axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/balance/public/getByShop/Ayg9lkjkhurIvNp",
  method: 'get',
  headers: {
    Authorization: 'Bearer fp_votre_api_key',
  }
});
```

##### Exemple de réponse

```json
{
  "success": true,
  "data": {
    "success": true,
    "data": {
      "shop_public_id": "PAjtgouuFlCibjn",
      "shop_name": "Dev",
      "shop_id": "c1a8136d-195c-49d0-a766-31d4c12016cf",
      "balances": {
        "MOOV": 0,
        "CELTIIS BJ": 0,
        "CORIS": 0,
        "MTN CI": 0,
        "MOOV CI": 0,
        "ORANGE CI": 0,
        "WAVE CI": 0,
        "MTN CG": 0,
        "MOOV TG": 0,
        "TOGOCOM TG": 0,
        "ORANGE SN": 0,
        "FREE SN": 0,
        "WAVE SN": 0,
        "MTN": 10
      }
    }
  },
    "last24": null
  }
}
```

Note

Le solde est retourné par réseau. Vous pouvez ainsi voir votre solde pour chaque opérateur (MTN, MOOV, CELTIIS, CORIS, etc.) dans chaque pays.
