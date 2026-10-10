---
id: api-rest-status
title: "Payin status"
group: api
lang: en
source: https://docs.feexpay.me/?section=api-rest-status&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# Payin status

A transaction goes through different statuses: `PENDING`, `SUCCESSFUL` or `FAILED`. Use the status-check API to get the current status.

##### Base URL

`https://api-v2.feexpay.me/api/transactions/public/single/status/`

##### Example (with reference)

`https://api-v2.feexpay.me/api/transactions/public/single/status/51ef087e-7bae-4202-b84e-9a0916bbc564`

##### Required header

Authorization: Bearer <votre-api-key>

##### Response - SUCCESSFUL

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

##### Response - FAILED

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

If the API returns `PENDING` or `IN PENDING STATE`, the transaction is still being processed and the customer has not confirmed yet.

Front-end integrations

During an integration (JavaScript, WordPress, PHP, React, etc.), a `ref` parameter is automatically added to your `callback_url`. This is the unique transaction reference. Use it to check the status.
