---
id: api-payout-status
title: "Payout status"
group: api
lang: en
source: https://docs.feexpay.me/?section=api-payout-status&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# Payout status

A payout goes through different statuses: `PENDING`, `SUCCESSFUL` or `FAILED`. Use the status-check API to get the current status.

Important: mandatory verification

Status verification is mandatory for payouts. After initiating a payout (PENDING status), you must call this endpoint to confirm the final status of the transaction (SUCCESSFUL or FAILED) before considering the operation complete.

##### Base URL

`https://api-v2.feexpay.me/api/payouts/status/public/`

##### Example (with reference)

`https://api-v2.feexpay.me/api/payouts/status/public/ff7b2994-1466-4fc7-8216-7fb53a4a8727`

##### Method

GET

##### Required header

Authorization: Bearer <votre-api-key>

##### Response - SUCCESSFUL (example)

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

If the API returns `PENDING` or `IN PENDING STATE`, the transaction is still being processed.
