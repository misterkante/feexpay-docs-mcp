---
id: api-payout-status
title: "Statut des payouts"
group: api
lang: fr
source: https://docs.feexpay.me/?section=api-payout-status&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# Statut des payouts

Un payout passe par différents statuts: `PENDING`, `SUCCESSFUL` ou `FAILED`. Utilisez l'API de consultation pour connaître le statut courant.

Important : vérification obligatoire

La vérification du statut est obligatoire pour les payouts. Après avoir lancé un payout (statut PENDING), vous devez impérativement appeler cet endpoint pour confirmer le statut final de la transaction (SUCCESSFUL ou FAILED) avant de considérer l'opération comme terminée.

##### URL de base

`https://api-v2.feexpay.me/api/payouts/status/public/`

##### Exemple (avec référence)

`https://api-v2.feexpay.me/api/payouts/status/public/ff7b2994-1466-4fc7-8216-7fb53a4a8727`

##### Méthode

GET

##### Entête obligatoire

Authorization: Bearer <votre-api-key>

##### Réponse - SUCCESSFUL (exemple)

```json
{
  "reference": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "amount": 10,
  "phoneNumber": "2290167919150",
  "status": "SUCCESSFUL",
  "callback_info": null,
  "responsecode": "SUCCESSFUL",
  "responsemsg": "SUCCESSFUL",
  "transref": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "serviceref": "a19d2d2d-8635-4489-bb6b-57cf070e5792",
  "reason": "",
  "description": "Paiement client",
  "date": "2026-06-10T08:47:45.726Z"
}
```

Note

Si l'API renvoie `PENDING` ou `IN PENDING STATE`, la transaction est toujours en cours.
