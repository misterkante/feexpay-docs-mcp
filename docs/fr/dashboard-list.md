---
id: dashboard-list
title: "Liste - Envoi en masse"
group: dashboard
lang: fr
source: https://docs.feexpay.me/?section=dashboard-list&version=v2
updated_at: 2026-10-23T10:08:13.250Z
---

# Liste - Envoi en masse

La fonctionnalité Liste vous permet d'envoyer de l'argent en masse à plusieurs destinataires en une seule opération en utilisant un fichier Excel. C'est idéal pour les paiements de salaires, les distributions de commissions ou tout autre envoi groupé.

### 1\. Accéder au menu Liste

Dans le tableau de bord, cliquez sur le menu **Liste**, puis sur le bouton **Ajouter une liste**.

![Menu Liste](https://docs.feexpay.me/list/list_dashboard.png)

### 2\. Télécharger le template Excel

Téléchargez le template de liste qui contient les colonnes nécessaires pour structurer vos données.

![Télécharger le template](https://docs.feexpay.me/list/template_download.png)

Structure du fichier Excel

Le template contient les colonnes suivantes :

-   **NOMS ET PRENOMS** : Nom complet du destinataire
-   **NUMEROS** : Numéro de téléphone au format international (ex: 2290167919150)
-   **MONTANT** : Montant à envoyer
-   **RESEAU** : Code du réseau mobile (voir tableau ci-dessous)

### Codes des réseaux mobiles

| Pays | Opérateur | Code à utiliser |
| --- | --- | --- |
| Bénin | MTN | MTN |
| Moov | MOOV BJ |
| Celtiis | CELTIIS BJ |
| Côte d'Ivoire | MTN | MTN CI |
| Moov | MOOV CI |
| Wave | WAVE CI |
| Togo | Togocom | TOGOCOM TG |
| Moov | MOOV TG |
| Congo Brazzaville | MTN | MTN CG |

Format du numéro

Le numéro doit être au format international sans le signe +.  
**Exemple :** Pour un numéro MTN Bénin, utilisez `2290167919150`

### 3\. Remplir et uploader le fichier

Remplissez le fichier Excel avec les informations des destinataires, puis dans le tableau de bord :

-   Saisissez un **titre** pour votre liste
-   **Uploadez** le fichier Excel rempli
-   Cliquez sur **Continuer**

![Formulaire d'upload](https://docs.feexpay.me/list/upload_form.png)

### 4\. Récapitulatif et confirmation

Vérifiez le récapitulatif de votre liste avec le nombre de destinataires et le montant total, puis enregistrez-la. L'envoi n'a lieu qu'après la validation décrite ci-dessous.

![Récapitulatif et confirmation](https://docs.feexpay.me/list/recap_confirm.png)

### Simuler les frais

Après l'import du fichier, cliquez sur **Simuler les frais** pour afficher, sans rien débiter ni envoyer, le **montant total**, les **frais totaux**, le **total débité** et le détail des frais par ligne.

### Enregistrement et validation

Cliquez sur **Enregistrer** : la liste est enregistrée comme brouillon, sans débit ni envoi. Elle doit ensuite être validée en deux temps depuis sa page de détail :

1.  **Valider - Niveau 1** : vérifie et approuve la liste. Son statut passe à _En attente - Validation finale_. Rien n'est encore débité.
2.  **Valider - Validation finale** : déclenche immédiatement le débit de votre solde et l'envoi vers les opérateurs.

Tant qu'elle n'est pas validée, la liste affiche le statut _En attente - Validation N1_ puis _En attente - Validation finale_.

Séparation des rôles

Pour les membres de votre équipe, l'initiateur, le validateur Niveau 1 et le validateur final doivent être trois personnes différentes. Chaque étape est réservée aux membres disposant du sous-rôle correspondant (voir [Équipe](https://docs.feexpay.me/?section=dashboard-team)). Le propriétaire du compte peut effectuer toutes les étapes lui-même.

Un brouillon peut être supprimé tant que la validation finale n'a pas eu lieu, par son initiateur ou par le propriétaire du compte. Une liste déjà envoyée ne peut pas être supprimée.

Les lignes en échec confirmé par l'opérateur sont automatiquement recréditées sur votre solde. Le bouton **Actualiser** de la page de détail met à jour le statut de la liste.

Important

Assurez-vous d'avoir un solde suffisant dans votre wallet FeexPay avant de confirmer l'envoi. Les transactions seront traitées une par une et vous recevrez des notifications sur leur statut.

 [Précédent

Payout API]  [Suivant

Clients]
