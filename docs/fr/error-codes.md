---
id: error-codes
title: "Codes d'Erreur"
group: api
lang: fr
source: https://docs.feexpay.me/?section=error-codes&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# Codes d'Erreur

Cette section liste tous les codes d'erreur possibles que vous pouvez rencontrer lors de l'utilisation de l'API FeexPay, ainsi que leurs significations et solutions recommandées.

Conseil Important

Toujours vérifier le champ 'success' dans la réponse avant de traiter les données. Si 'success' est false, consultez l'objet 'error' pour comprendre le problème.

### Codes d'Erreur API

| Code | Signification | Description | Solution |
| --- | --- | --- | --- |
| ERR\_INVALID\_API\_KEY | Clé API Invalide | La clé API fournie n'est pas valide ou n'existe pas | Vérifiez votre clé API dans le dashboard FeexPay |
| ERR\_SHOP\_NOT\_FOUND | Boutique Non Trouvée | L'ID de boutique spécifié n'existe pas | Vérifiez l'ID de votre boutique dans le menu Développeurs |
| ERR\_INSUFFICIENT\_BALANCE | Solde Insuffisant | Le solde de votre boutique est insuffisant pour cette transaction | Rechargez votre boutique ou réduisez le montant de la transaction |
| ERR\_INVALID\_PHONE\_NUMBER | Numéro de Téléphone Invalide | Le numéro de téléphone n'est pas valide pour le réseau spécifié | Vérifiez le format du numéro et qu'il correspond au bon réseau |
| ERR\_INVALID\_AMOUNT | Montant Invalide | Le montant est soit trop faible, soit trop élevé | Respectez les limites de montant (minimum 100, maximum 2.000.000 XOF) |
| ERR\_NETWORK\_UNAVAILABLE | Réseau Indisponible | Le réseau de paiement spécifié est temporairement indisponible | Essayez plus tard ou utilisez un autre réseau disponible |
| ERR\_TRANSACTION\_FAILED | Transaction Échouée | La transaction a échoué du côté du fournisseur de paiement | Réessayez la transaction ou contactez le support si le problème persiste |
| ERR\_DUPLICATE\_TRANSACTION | Transaction Dupliquée | Une transaction identique existe déjà | Vérifiez le statut de la transaction existante avant de réessayer |
| ERR\_IP\_NOT\_AUTHORIZED | IP Non Autorisée | L'adresse IP du serveur n'est pas autorisée | Ajoutez votre adresse IP dans la liste blanche du dashboard |
| ERR\_PAYOUT\_NOT\_ENABLED | Payout Non Activé | Les payouts ne sont pas activés pour cette boutique | Contactez le support pour activer les payouts sur votre boutique |

### Codes d'Erreur FeexLink

| Code HTTP | Code erreur | Message |
| --- | --- | --- |
| 400 | — | Renseigner les paramètres obligatoires |
| 404 | — | Shop not found |
| 404 | FEEXLINK\_NOT\_FOUND | Feexlink not found |
| 400 | — | Feexlink is not active |
| 400 | — | Feexlink usage limit reached |
| 410 | FEEXLINK\_EXPIRED | Feexlink expiré |
| 400 | NETWORK\_UNAVAILABLE | Réseau non supporté |
| 404 | — | {channel} channel not configured |

### Codes d'Erreur Shop (Lookup Public)

| Code HTTP | Code erreur | Message |
| --- | --- | --- |
| 404 | — | Shop introuvable |
| 400 | — | Shop is disabled |

### Erreurs Public API

#### Authentication / Token

| Code HTTP | Code erreur | Message |
| --- | --- | --- |
| 401 | UNAUTHORIZED | Token invalide ou expiré |
| 403 | FORBIDDEN | Accès interdit à cette ressource |
| 429 | RATE\_LIMIT\_EXCEEDED | Trop de requêtes |
| 403 | IP\_NOT\_ALLOWED | IP non autorisée |
| 403 | ACCESS\_DENIED | Pays/réseau bloqué |

#### Initier une transaction (payin)

| Code HTTP | Code erreur | Message |
| --- | --- | --- |
| 404 | — | Merchant or Shop not found |
| 404 | — | Shop is disabled |
| 404 | — | {channel} channel not configured |
| 400 | NETWORK\_UNAVAILABLE | Réseau non supporté |
| 503 | NETWORK\_UNAVAILABLE | Network under maintenance |
| 502 | — | Bad Gateway (erreur provider) |
| 400 | MISSING\_REFERENCE | Missing transaction reference |

#### Statut d'une transaction

| Code HTTP | Code erreur | Message |
| --- | --- | --- |
| 400 | MISSING\_REFERENCE | Reference is required |
| 404 | NOT\_FOUND | Transaction not found |

### Format des Réponses d'Erreur

Toutes les erreurs suivent ce format standard :

Le champ \`code\` est présent uniquement pour les erreurs métier qui ont un code explicite. Pour les erreurs de validation (400), le champ \`message\` peut être un tableau de strings.

##### Exemple de réponse d'erreur

```
{
  "statusCode": 404,
  "message": "Transaction not found",
  "code": "NOT_FOUND"
}
```

### Bonnes Pratiques

-   ✓Toujours gérer les codes HTTP appropriés (4xx pour les erreurs client, 5xx pour les erreurs serveur)
-   ✓Vérifier toujours le champ 'success' avant de traiter la réponse
-   ✓Logger les erreurs pour le débogage et le suivi
-   ✓Afficher des messages d'erreur conviviaux aux utilisateurs finaux
