---
id: dashboard-list
title: "Liste - Envoi en masse"
group: dashboard
lang: fr
source: https://docs.feexpay.me/?section=dashboard-list&version=v2
updated_at: 2026-10-10T13:08:51.084Z
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

Vérifiez le récapitulatif de votre liste avec le nombre de destinataires et le montant total. Si tout est correct, cliquez sur **Confirmer l'envoi** pour lancer les transactions.

![Récapitulatif et confirmation](https://docs.feexpay.me/list/recap_confirm.png)

Important

Assurez-vous d'avoir un solde suffisant dans votre wallet FeexPay avant de confirmer l'envoi. Les transactions seront traitées une par une et vous recevrez des notifications sur leur statut.

 [Précédent

Payout API]  [Suivant

Clients]
