---
id: dashboard-adresse-ip
title: "Adresse IP"
group: dashboard
lang: fr
source: https://docs.feexpay.me/?section=dashboard-adresse-ip&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# Adresse IP

Gérer les adresses IP autorisées pour votre boutique

Le menu **Adresse IP** vous permet de définir les adresses IP autorisées à effectuer des appels vers l'API FeexPay depuis votre serveur. C'est une mesure de sécurité indispensable pour l'utilisation du **Payout API** — sans IP enregistrée, les requêtes seront rejetées.

![Liste des IP — aucune adresse enregistrée](https://docs.feexpay.me/adresse-ip/adresse_ip_overview.png)

### Ajouter une adresse IP

1.  Accédez au menu <strong>Adresse IP</strong> depuis le menu latéral.
2.  Cliquez sur le bouton <strong>+ Ajouter une IP</strong> en haut à droite.
3.  Renseignez l'**adresse IP** de votre serveur (ex : `81.91.231.207`).
4.  Ajoutez un **libellé** pour identifier cette IP (ex : _production_, _serveur-test_).
5.  Cliquez sur <strong>Ajouter</strong> pour enregistrer.

![Modal Ajouter une nouvelle IP — Adresse IP et Libellé](https://docs.feexpay.me/adresse-ip/adresse_ip_form.png)

### Liste des IP enregistrées

Une fois ajoutée, l'IP apparaît dans la liste avec les informations suivantes :

| Colonne | Description |
| --- | --- |
| Adresse IP | L'adresse IP enregistrée. |
| Libellé | Le nom que vous avez attribué à cette IP. |
| Statut | Bascule permettant d'activer ou désactiver l'IP sans la supprimer (**Actif** / inactif). |
| Date de création | Date et heure d'ajout de l'IP. |
| Actions | Modifier ou supprimer l'adresse IP. |

![Liste des IP — IP active avec statut et actions](https://docs.feexpay.me/adresse-ip/adresse_ip_list.png)

⚠️

**Important :** L'ajout d'une adresse IP est obligatoire pour pouvoir utiliser le <strong> Payout API</strong>. Sans IP autorisée, toutes les requêtes API de payout seront rejetées. Assurez-vous d'ajouter l'IP de votre serveur de production avant de démarrer vos intégrations.
