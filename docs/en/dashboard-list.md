---
id: dashboard-list
title: "List - Bulk sending"
group: dashboard
lang: en
source: https://docs.feexpay.me/?section=dashboard-list&version=v2
updated_at: 2026-10-10T13:38:59.990Z
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

Check the summary of your list with the number of recipients and the total amount. If everything is correct, click **Confirm sending** to start the transactions.

![Summary and confirmation](https://docs.feexpay.me/list/recap_confirm.png)

Important

Make sure you have enough balance in your FeexPay wallet before confirming. Transactions will be processed one by one and you will receive notifications about their status.

 [Previous

Payout API]  [Next

Customers]
