---
id: key-concepts
title: "Concepts clés"
group: introduction
lang: fr
source: https://docs.feexpay.me/?section=key-concepts&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# Concepts clés

Important

Familiarisez-vous avec ces concepts avant de commencer votre intégration. Ils sont essentiels pour comprendre le fonctionnement de FeexPay.

### Environnements et Clés API

Mode Live (Production)

Environnement de production pour traiter de vrais paiements.

• URL : `https://api-v2.feexpay.me/api`

• Clés commencent par : `fp_`

### Configuration Webhook

Les webhooks sont essentiels pour recevoir les notifications en temps réel sur l'état de vos transactions. Vous devez configurer votre URL de webhook dans votre tableau de bord FeexPay.

### Cycle de vie des Transactions

Une transaction représente un paiement ou un transfert d'argent. Chaque transaction possède un identifiant unique et suit ce cycle de vie :

PENDING

Transaction initiée, en attente de traitement

SUCCESSFUL

Transaction réussie et confirmée

FAILED

Transaction échouée (fonds insuffisants, erreur, etc.)

### Collectes (Payin)

Les collectes représentent l'action de recevoir de l'argent de vos clients via différents moyens de paiement (Mobile Money, cartes bancaires, etc.).

### Dépôts (Payouts)

Les payouts permettent d'effectuer des dépôts (payouts) transfert directement sur les numéros Mobile Money (Momo) de vos utilisateurs. Cette fonctionnalité est idéale pour les remboursements, les paiements de salaires, les commissions ou toute distribution de fonds vers les portefeuilles mobiles.

### Wallets

Votre wallet FeexPay est le compte central où sont crédités tous vos paiements reçus. Vous pouvez consulter votre solde, l'historique des transactions et effectuer des retraits vers votre compte bancaire.

Attention

En mode test (sandbox), utilisez les clés commençant par `test_`. Les transactions en mode test ne déclenchent pas de vrais paiements. Pour la production, utilisez la clé commençant par `fp_`.

 [Précédent

Avantages]
