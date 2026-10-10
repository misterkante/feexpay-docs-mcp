---
id: security
title: "Sécurité"
group: general
lang: fr
source: https://docs.feexpay.me/?section=security&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# Sécurité

Protégez vos transactions et vos données

La sécurité est notre priorité absolue. FeexPay implémente les standards de sécurité les plus stricts de l'industrie pour protéger vos transactions et les données de vos clients.

### Chiffrement TLS 1.3

Toutes les communications entre votre serveur et FeexPay sont chiffrées avec TLS 1.3, le protocole de sécurité le plus avancé. Les données sensibles ne transitent jamais en clair sur le réseau.

### Conformité PCI-DSS

FeexPay est certifié PCI-DSS niveau 1, le plus haut niveau de certification pour le traitement des paiements par carte bancaire. Vos clients peuvent payer en toute confiance.

### Authentification forte

Gestion des équipes via l’ajout des membres par e-mail et attribution d’accès selon les onglets. Gestion fine des permissions pour les membres de l'équipe. Logs d'audit complets.

### Détection de fraude

Système de détection de fraude en temps réel basé sur le machine learning. Surveillance 24/7 des transactions suspectes. Blocage automatique des activités malveillantes.

### Bonnes pratiques pour les développeurs

#### Ne jamais exposer les clés secrètes

Vos clés secrètes doivent rester confidentielles et ne jamais être exposées dans le code côté client, les repositories publics ou les logs. Le seul frontend dans lequel elles doivent être exposées est celui de nos SDK.

❌ Mauvais exemple

```javascript
// Dans le frontend - NE JAMAIS FAIRE CECI
const apiKey = 'fp_live _votre_cle_secrete';

fetch('https://api.feexpay.com/v1/payments', {
  headers: { 'Authorization': `Bearer ${apiKey}` }
});
```

✅ Bon exemple

```javascript
// Backend uniquement
const apiKey = process.env.feexpay_SECRET_KEY;

// Frontend - utiliser votre propre API
fetch('/api/create-payment', {
  method: 'POST',
  body: JSON.stringify(paymentData)
});
```

#### Utiliser des variables d'environnement

Stockez toutes vos clés et secrets dans des variables d'environnement, jamais dans le code source.

```bash
# .env (ne jamais committer ce fichier)
feexpay_SECRET_KEY=sk_live_votre_cle_secrete
feexpay_SHOP_ID=shop_id
feexpay_MODE=LIVE
```

```bash
# .gitignore
.env
.env.local
.env.*.local
```

#### Valider les montants côté serveur

Ne faites jamais confiance aux montants envoyés depuis le frontend. Recalculez toujours les montants côté serveur avant de créer un paiement.

```javascript
// ❌ Mauvais - Ne jamais faire confiance au frontend
app.post('/api/checkout', async (req, res) => {
  const { amount } = req.body; // Dangereux!

  const payment = await feexpay.payments.create({
    amount: amount, // Un attaquant pourrait modifier ce montant
    // ...
  });
});

// ✅ Bon - Toujours recalculer côté serveur
app.post('/api/checkout', async (req, res) => {
  const { orderId } = req.body;

  // Récupérer la commande depuis la base de données
  const order = await Order.findById(orderId);

  // Recalculer le montant total
  const total = order.items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  const payment = await feexpay.payments.create({
    amount: total, // Montant sécurisé calculé côté serveur
    // ...
  });
});
```

#### Utiliser HTTPS partout

Assurez-vous que votre site web et vos URLs webhook utilisent HTTPS. FeexPay refusera d'envoyer des webhooks vers des URLs HTTP non sécurisées en production.

#### Rotation régulière des clés

Changez vos clés API régulièrement, surtout si vous suspectez une compromission. FeexPay vous permet de créer de nouvelles clés et de révoquer les anciennes instantanément depuis le dashboard.

#### Logger et monitorer

Gardez des logs détaillés de toutes les transactions et des événements webhook. Mettez en place des alertes pour les comportements suspects.

```javascript
// Logger tous les événements importants
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'payments.log' })
  ]
});

// Logger chaque paiement créé
app.post('/api/payments', async (req, res) => {
  try {
    const payment = await createPayment(req.body);

    logger.info('Payment created', {
      paymentId: payment.id,
      amount: payment.amount,
      userId: req.user.id,
      timestamp: new Date().toISOString()
    });

    res.json(payment);
  } catch (error) {
    logger.error('Payment creation failed', {
      error: error.message,
      userId: req.user.id,
      timestamp: new Date().toISOString()
    });

    res.status(400).json({ error: error.message });
  }
});
```

### En cas de compromission

Si vous suspectez que vos clés API ont été compromises :

1.  **Révoquez immédiatement** les clés compromises depuis votre dashboard
2.  **Générez de nouvelles clés** et mettez à jour vos applications
3.  **Vérifiez l'historique** des transactions pour détecter toute activité suspecte
4.  **Contactez notre support** à support@feexpay.com pour nous informer
