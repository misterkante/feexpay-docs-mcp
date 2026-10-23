---
id: dashboard-reversements
title: "Reversals"
group: dashboard
lang: en
source: https://docs.feexpay.me/?section=dashboard-reversements&version=v2
updated_at: 2026-10-23T10:08:13.250Z
---

# Reversals

Welcome to the Reversals menu. You can initiate reversals of your funds and also view your reversal history.

### To initiate a reversal:

1\. Click **Initiate a reversal**.

![Initiate a reversal](https://docs.feexpay.me/reversement/reversement_dash_new.png)

2\. Fill out the opened form with your reversal details.

3\. Click **Next**.

![Reversal form](https://docs.feexpay.me/reversement/form_revers1_new.png)

4\. Choose the reversal type: Mobile Money, bank account or cryptocurrency.

![Reversal type selection](https://docs.feexpay.me/reversement/choice.png)

5\. Fill out the form, then start the reversal.

![Reversal form](https://docs.feexpay.me/reversement/send.png)

6\. For a Mobile Money reversal, the number used is the one registered in the <strong>Configuration</strong> tab of the dashboard.

Where do I configure my numbers?

Reversal numbers are no longer configured from your profile. They are grouped by country and by network in the [Configuration](https://docs.feexpay.me/?section=dashboard-configuration) tab of the dashboard.

### Reversal to a bank account

A bank reversal is a request processed by the FeexPay team: the amount is debited from your balance when you submit the request, then the transfer is made to the account provided. You can transfer any balance to a bank in any country.

#### Steps

1\. Initiate a reversal, choose the **balance to debit**, enter the **amount** and the **reason**, then click **Next**.

2\. Under **Reversal method**, choose **Bank account**.

3\. Choose **My configured account** or **Other account** for a one-off reversal.

4\. For another account, enter the bank and its country, the account holder, account number, bank code, branch code, RIB key, domiciliation and, if needed, the IBAN and SWIFT/BIC code. Attach your **RIB** (image or PDF, 8 MB max).

5\. Check the fees shown, then submit the request.

Saved bank account

If you have set up a reversal bank account in the [Configuration](https://docs.feexpay.me/?section=dashboard-configuration) tab, its details and RIB are used automatically. They cannot be changed at reversal time: to use another account, update the configuration or choose **Other account**.

#### Fees

Fees are deducted from the requested amount:

| Case | Fee |
| --- | --- |
| From the card balance, whatever the bank's country | Free |
| Bank in the same country as the debited balance | Free |
| Bank in Congo (from another country's balance) | 0.5% |
| Bank in another country | 6,000 FCFA |

The minimum amount for a bank reversal is **100,000 FCFA**.

A specific reversal rate may have been agreed for your account; it then replaces these rules. The exact fee is shown on the transaction.

### Transfer the card balance to Mobile Money

Funds collected by bank card are grouped in a **card balance**. You can transfer them to a Mobile Money number by choosing the card balance as the balance to debit, then the **Mobile Money** method.

-   The amount is debited from your card balance as soon as the request is sent.
-   Fees are the reversal rate of the destination network, rounded up to the next franc, and are deducted from the amount entered.
-   If the request is rejected, the amount is credited back to your card balance.
-   The TOGOCOM TG network is not available as a destination from the card balance.

Reversal restrictions

For compliance reasons, FeexPay may block manual reversals to certain countries or networks for your account. The reversal is then refused with the code `ACCESS_DENIED` and a message such as _Manual reversal denied for network …_ or _… for country …_. This restriction applies to single Mobile Money reversals, card balance reversals and bulk reversals. Contact FeexPay support to learn the reason or to request that it be lifted.

 [Previous

Customers]  [Next

Cards KYB]
