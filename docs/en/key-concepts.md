---
id: key-concepts
title: "Key concepts"
group: introduction
lang: en
source: https://docs.feexpay.me/?section=key-concepts&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# Key concepts

Important

Get familiar with these concepts before starting your integration. They are essential to understand how FeexPay works.

### Environments and API keys

Live (Production) mode

Production environment to process real payments.

• URL : `https://api-v2.feexpay.me/api`

• Keys start with : `fp_`

### Webhook setup

Webhooks are essential to receive real-time notifications about your transaction status. You must configure your webhook URL in your FeexPay dashboard.

### Transaction lifecycle

A transaction represents a payment or a money transfer. Each transaction has a unique identifier and follows this lifecycle:

PENDING

Transaction initiated, waiting to be processed

SUCCESSFUL

Transaction successful and confirmed

FAILED

Transaction failed (insufficient funds, error, etc.)

### Collections (Payin)

Collections represent receiving money from your customers through various payment methods (Mobile Money, cards, etc.).

### Disbursements (Payouts)

Payouts let you send funds directly to your users’ Mobile Money numbers (MoMo). This is ideal for refunds, salary payments, commissions, or any fund distribution to mobile wallets.

### Wallets

Your FeexPay wallet is the central account where all received payments are credited. You can view your balance, transaction history, and withdraw to your bank account.

Warning

In test (sandbox) mode, use keys starting with `test_`. Test transactions do not trigger real payments. For production, use keys starting with `fp_`.

 [Previous

Benefits]
