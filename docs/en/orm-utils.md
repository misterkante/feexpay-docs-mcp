---
id: orm-utils
title: "ORM Utils"
group: api
lang: en
source: https://docs.feexpay.me/?section=orm-utils&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# ORM Utils

This section groups special API endpoints that are not directly related to payin or payout, but are useful for managing your account and shops.

### Get Balance by Shop

This endpoint allows you to retrieve your shop's balance for each available payment network.

##### Endpoint

GET`https://api-v2.feexpay.me/api/balance/public/getByShop/{idShop}`

##### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| idShop | string | Required | The unique identifier of your shop (available in the Developers menu of your dashboard) |

##### Headers

Add the authorization header: `Authorization: Bearer <votre-api-key>`

Important

Your API key must be included in the Authorization header with the 'Bearer' prefix.

##### Request Example (Axios)

```javascript
axios({
  url: "https://api-v2.feexpay.me/api/balance/public/getByShop/Ayg9lkjkhurIvNp",
  method: 'get',
  headers: {
    Authorization: 'Bearer fp_votre_api_key',
  }
});
```

##### Response Example

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

The balance is returned per network. You can see your balance for each operator (MTN, MOOV, CELTIIS, CORIS, etc.) in each country.
