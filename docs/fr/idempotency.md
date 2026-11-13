---
id: idempotency
title: "Idempotence des requêtes (Idempotency-Key)"
group: api
lang: fr
source: https://docs.feexpay.me/?section=idempotency&version=v2
updated_at: 2026-11-13T14:52:32.783Z
---

# Idempotence des requêtes (Idempotency-Key)

Une coupure réseau, un timeout ou un crash côté client peut vous laisser sans savoir si votre paiement a été créé. Le header Idempotency-Key permet alors de renvoyer la même requête sans risque de créer deux transactions.

## Utilisation

Ajoutez le header à vos requêtes POST de paiement (payin) et de transfert (payout) :

```http
Idempotency-Key: 3f2b8c1e-9a4d-4e7b-8c2a-1d5e6f7a8b9c
```

-   Format : un UUID (v4 recommandé), sans préfixe. La casse n'a pas d'importance.
-   Une clé par opération : générez une nouvelle clé pour chaque nouveau paiement. Réutilisez la même clé uniquement pour réessayer ce même paiement.
-   Optionnel : sans header, la requête est traitée normalement, mais sans protection contre les doublons.
-   Ignoré sur les autres méthodes : le header n'est pris en compte que sur les POST.

### Exemple

```javascript
const { randomUUID } = require('crypto');

// Générez la clé une seule fois et enregistrez-la avec votre commande
const idempotencyKey = randomUUID();

// En cas de timeout, renvoyez exactement cette requête avec la même clé
await axios({
  url: "https://api-v2.feexpay.me/api/transactions/public/requesttopay/mtn",
  method: 'post',
  headers: {
    Authorization: 'Bearer <votre-api-key>',
    'Idempotency-Key': idempotencyKey,
  },
  data: {
    shop: '63e581fe4c35f54de9749c',
    amount: 1000,
    phoneNumber: 2290166000000,
  },
});
```

## Comportements

| Situation | Réponse |
| --- | --- |
| Première requête avec la clé | Traitement normal. |
| Même clé, même body, requête déjà traitée | La réponse d'origine est renvoyée avec le même code HTTP. Aucune nouvelle transaction n'est créée. Deux champs sont ajoutés : idempotency\_code et idempotency\_notice. |
| Même clé, requête d'origine encore en cours | 
409 · IDEMPOTENCY\_IN\_PROGRESS

Réessayez dans quelques secondes. |
| Même clé, body différent ou autre opération | 

422 · IDEMPOTENCY\_PAYLOAD\_MISMATCH

La clé est déjà associée à une autre requête. |
| Clé qui n'est pas un UUID | 

400 · IDEMPOTENCY\_KEY\_INVALID

Le format de la clé est invalide. |
| La requête d'origine a échoué sur une erreur (validation, erreur serveur…) | La clé n'est pas consommée : vous pouvez réessayer avec la même clé. |

Paiement refusé par l'opérateur

Si la requête d'origine a abouti (réponse 200) mais que la transaction a le statut FAILED, cette réponse est enregistrée et sera rejouée telle quelle. Pour retenter ce paiement, générez une nouvelle clé.

## Exemple de réponse rejouée

```json
{
  "reference": "3cc70b08-616f-4a7e-9171-0be488ba7fd7",
  "status": "PENDING",
  "message": "Accepted",
  "amount": 1000,
  "description": "test",
  "callback_info": null,
  "idempotency_code": "IDEMPOTENCY_KEY_REUSED",
  "idempotency_notice": "This Idempotency-Key was already used"
}
```

Utilisez reference pour suivre la transaction : c'est la même que celle de la première requête.

## Durée de validité

-   Pendant 48 heures, la réponse d'origine est renvoyée telle quelle.
-   Au-delà, la clé reste réservée à cette transaction pour votre compte. Un nouvel envoi renvoie une réponse reconstruite à partir de la transaction (reference, status, amount, etc., plus idempotency\_code). Certains champs peuvent différer légèrement de la réponse d'origine : appuyez-vous sur reference.

## Bonnes pratiques

-   Générez la clé avant le premier envoi et enregistrez-la avec votre commande.
-   En cas de timeout ou d'erreur réseau, renvoyez exactement la même requête avec la même clé.
-   Ne réutilisez jamais une clé pour un autre paiement, même si le montant est identique.
-   Sur un 409, attendez quelques secondes avant de réessayer.
-   Sur un 422, ne réessayez pas : corrigez la requête ou générez une nouvelle clé s'il s'agit d'une nouvelle opération.
