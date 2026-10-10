---
id: api-rest-status
title: "Statut des payins"
group: api
lang: fr
source: https://docs.feexpay.me/?section=api-rest-status&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# Statut des payins

Une transaction passe par différents statuts : `PENDING`, `SUCCESSFUL` ou `FAILED`. Utilisez l'API de consultation pour connaître le statut courant.

##### URL de base

`https://api-v2.feexpay.me/api/transactions/public/single/status/`

##### Exemple (avec référence)

`https://api-v2.feexpay.me/api/transactions/public/single/status/51ef087e-7bae-4202-b84e-9a0916bbc564`

##### Entête obligatoire

Authorization: Bearer <votre-api-key>

##### Réponse - SUCCESSFUL

```json
{
  "reference": "63ecaff1-7572-413d-93bb-8cba92bb8c2c",
  "amount": 10,
  "phoneNumber": "2290167919150",
  "status": "SUCCESSFUL",
  "callback_info": null,
  "responsecode": "SUCCESSFUL",
  "responsemsg": "SUCCESSFUL",
  "transref": "63ecaff1-7572-413d-93bb-8cba92bb8c2c",
  "serviceref": "63ecaff1-7572-413d-93bb-8cba92bb8c2c",
  "comment": "",
  "reason": "",
  "description": "",
  "date": "2026-06-10T08:36:35.020Z",
  "operator_id": "12243963624"
}
```

##### Réponse - FAILED

```json
{
  "reference": "3d4927ff-c826-43db-a3f5-66dc75a7b07e",
  "amount": 100,
  "phoneNumber": "2290153037832",
  "status": "FAILED",
  "callback_info": null,
  "responsecode": "FAILED",
  "responsemsg": "FAILED",
  "transref": "3d4927ff-c826-43db-a3f5-66dc75a7b07e",
  "serviceref": "3d4927ff-c826-43db-a3f5-66dc75a7b07e",
  "comment": "",
  "reason": "LOW_BALANCE_OR_PAYEE_LIMIT_REACHED_OR_NOT_ALLOWED",
  "description": "",
  "date": "2026-06-10T08:43:56.517Z",
  "operator_id": ""
}
```

Note

Si l'API renvoie `PENDING` ou `IN PENDING STATE`, la transaction est toujours en cours et le client n'a pas encore confirmé.

Intégrations front

Lors d'une intégration (JavaScript, WordPress, PHP, React, etc.), un paramètre `ref` est automatiquement ajouté à votre `callback_url`. Il s'agit de la référence unique de la transaction. Utilisez-la pour vérifier le statut.
