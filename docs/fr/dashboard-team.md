---
id: dashboard-team
title: "Équipe"
group: dashboard
lang: fr
source: https://docs.feexpay.me/?section=dashboard-team&version=v2
updated_at: 2026-10-23T10:08:13.250Z
---

# Équipe

Gérez les membres de votre équipe et leurs accès

Le menu **Équipe** vous permet d'inviter des collaborateurs à accéder à votre tableau de bord FeexPay avec des permissions spécifiques, sans partager vos identifiants principaux.

![Interface Équipe — liste des membres](https://docs.feexpay.me/team/team_overview.png)

### Inviter un membre

1.  Accédez au menu <strong>Équipe</strong> depuis le menu latéral.
2.  Cliquez sur le bouton <strong>+ Inviter</strong> en haut à droite.
3.  Renseignez le <strong>prénom</strong>, le <strong>nom</strong> et l'<strong>adresse e-mail</strong> du collaborateur.
4.  Sélectionnez le <strong>type de compte</strong> à lui attribuer.
5.  Cochez les <strong>permissions</strong> correspondant aux pages auxquelles il doit avoir accès.
6.  Cliquez sur <strong>Envoyer l'invitation</strong> — un e-mail d'invitation lui sera envoyé.

![Formulaire Inviter un membre — type et permissions](https://docs.feexpay.me/team/team_invite_form.png)

### Types de compte

| Type | Description |
| --- | --- |
| Développeur | Accès aux sections techniques (Développeurs, Webhooks, clés API). Idéal pour un intégrateur technique. |
| Admin secondaire | Accès étendu aux sections de gestion. Les permissions spécifiques sont définies lors de l'invitation. |

### Permissions disponibles

Lors de l'invitation, vous choisissez les pages auxquelles le membre aura accès :

-   Tableau de bord
-   Transactions (Collectes)
-   Shop (Boutiques)
-   Feexlinks
-   F-QR Code
-   Et autres sections disponibles selon le type de compte

### Sous-rôles de l'envoi en masse (Liste)

Lorsqu'un membre a la permission **Liste**, vous pouvez lui attribuer un ou plusieurs sous-rôles, qui déterminent les étapes de l'envoi en masse qu'il peut effectuer :

| Sous-rôle | Ce que le membre peut faire |
| --- | --- |
| Initiation | Créer et enregistrer une liste de paiement, et supprimer ses propres brouillons. |
| Validation Niveau 1 | Vérifier et approuver une liste avant la validation finale. |
| Validation finale | Valider définitivement une liste et déclencher l'envoi des fonds. |

Un même membre ne peut pas intervenir à deux étapes d'une même liste : l'initiateur, le validateur Niveau 1 et le validateur final doivent être différents. Décocher la permission Liste efface les sous-rôles du membre.

### Suivi des invitations

Après l'envoi, le membre apparaît dans la liste avec le badge **En attente** tant qu'il n'a pas accepté l'invitation. Si le collaborateur n'a pas confirmé, vous pouvez **renvoyer l'invitation** en cliquant sur le bouton de renvoi dans la colonne Actions.

![Liste Équipe — membre en attente de confirmation](https://docs.feexpay.me/team/team_pending.png)

**Conseil :** N'accordez que les permissions nécessaires à chaque membre pour garantir la sécurité de votre compte.
