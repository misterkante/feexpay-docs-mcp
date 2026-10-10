---
id: security
title: "Security"
group: general
lang: en
source: https://docs.feexpay.me/?section=security&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# Security

Protect your transactions and your data

Security is our top priority. FeexPay implements the strictest industry security standards to protect your transactions and your customers’ data.

### TLS 1.3 encryption

All communications between your server and FeexPay are encrypted with TLS 1.3, the most advanced security protocol. Sensitive data is never transmitted in plain text over the network.

### PCI-DSS compliance

FeexPay is PCI-DSS Level 1 certified, the highest certification level for processing card payments. Your customers can pay with confidence.

### Strong authentication

Team management by adding members via email and assigning access by tabs. Fine-grained permissions for team members. Full audit logs.

### Fraud detection

Real-time fraud detection system powered by machine learning. 24/7 monitoring of suspicious transactions. Automatic blocking of malicious activity.

### Developer best practices

#### Never expose secret keys

Your secret keys must remain confidential and must never be exposed in client-side code, public repositories, or logs. The only frontend where they must be exposed is our SDK.

❌ Bad example

```javascript
// Dans le frontend - NE JAMAIS FAIRE CECI
const apiKey = 'fp_live _votre_cle_secrete';

fetch('https://api.feexpay.com/v1/payments', {
  headers: { 'Authorization': `Bearer ${apiKey}` }
});
```

✅ Good example

```javascript
// Backend uniquement
const apiKey = process.env.feexpay_SECRET_KEY;

// Frontend - utiliser votre propre API
fetch('/api/create-payment', {
  method: 'POST',
  body: JSON.stringify(paymentData)
});
```

#### Use environment variables

Store all your keys and secrets in environment variables, never in source code.

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

#### Validate amounts server-side

Never trust amounts sent from the frontend. Always recalculate amounts on the server before creating a payment.

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

#### Use HTTPS everywhere

Make sure your website and webhook URLs use HTTPS. FeexPay will refuse to send webhooks to unsecured HTTP URLs in production.

#### Rotate keys regularly

Rotate your API keys regularly, especially if you suspect a compromise. FeexPay lets you create new keys and revoke old ones instantly from the dashboard.

#### Log and monitor

Keep detailed logs of all transactions and webhook events. Set up alerts for suspicious behavior.

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

### In case of compromise

If you suspect your API keys have been compromised:

1.  **Revoke immediately** the compromised keys from your dashboard
2.  **Generate new keys** and update your applications
3.  **Review history** of transactions to detect any suspicious activity
4.  **Contact our support** at support@feexpay.com to inform us
