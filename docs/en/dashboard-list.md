---
id: dashboard-list
title: "List - Bulk sending"
group: dashboard
lang: en
source: https://docs.feexpay.me/?section=dashboard-list&version=v2
updated_at: 2026-10-23T10:08:13.250Z
---

# List - Bulk sending

The List feature lets you send money in bulk to multiple recipients in a single operation using an Excel file. It is ideal for salary payments, commission distributions, or any other batch transfer.

### 1\. Open the List menu

In the dashboard, click the **List** menu, then click **Add a list**.

![List menu](https://docs.feexpay.me/list/list_dashboard.png)

### 2\. Download the Excel template

Download the list template that contains the required columns to structure your data.

![Download template](https://docs.feexpay.me/list/template_download.png)

Excel file structure

The template contains the following columns:

-   **FULL NAME** : Recipient full name
-   **PHONE** : Phone number in international format (e.g., 2290167919150)
-   **AMOUNT** : Amount to send
-   **NETWORK** : Mobile network code (see table below)

### Mobile network codes

| Country | Operator | Code to use |
| --- | --- | --- |
| Benin | MTN | MTN |
| Moov | MOOV BJ |
| Celtiis | CELTIIS BJ |
| Côte d'Ivoire | MTN | MTN CI |
| Moov | MOOV CI |
| Wave | WAVE CI |
| Togo | Togocom | TOGOCOM TG |
| Moov | MOOV TG |
| Congo Brazzaville | MTN | MTN CG |

Phone number format

The phone number must be in international format without the + sign.  
**Example:** For an MTN Benin number, use `2290167919150`

### 3\. Fill in and upload the file

Fill in the Excel file with recipients information, then in the dashboard:

-   Enter a **title** for your list
-   **Upload** the completed Excel file
-   Click **Continue**

![Upload form](https://docs.feexpay.me/list/upload_form.png)

### 4\. Summary and confirmation

Check the summary of your list with the number of recipients and the total amount, then save it. Payments are only sent after the approval described below.

![Summary and confirmation](https://docs.feexpay.me/list/recap_confirm.png)

### Simulate fees

After importing the file, click **Simuler les frais** (simulate fees) to see, without debiting or sending anything, the **total amount**, **total fees**, **total debited** and the fee breakdown per line.

### Saving and approval

Click **Save**: the list is saved as a draft, with no debit and no transfer. It must then be approved in two stages from its detail page:

1.  **Validate - Level 1**: reviews and approves the list. Its status becomes _Pending - Final validation_. Nothing is debited yet.
2.  **Validate - Final validation**: immediately debits your balance and sends the payments to the operators.

Until it is approved, the list shows the status _Pending - Validation L1_, then _Pending - Final validation_.

Separation of duties

For your team members, the initiator, the Level 1 validator and the final validator must be three different people. Each stage is reserved for members with the matching sub-role (see [Team](https://docs.feexpay.me/?section=dashboard-team)). The account owner can perform every stage themselves.

A draft can be deleted until the final validation, by its initiator or by the account owner. A list that has already been sent cannot be deleted.

Lines whose failure is confirmed by the operator are automatically credited back to your balance. The **Refresh** button on the detail page updates the list status.

Important

Make sure you have enough balance in your FeexPay wallet before confirming. Transactions will be processed one by one and you will receive notifications about their status.

 [Previous

Payout API]  [Next

Customers]
