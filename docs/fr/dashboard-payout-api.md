---
id: dashboard-payout-api
title: "Payout API"
group: dashboard
lang: fr
source: https://docs.feexpay.me/?section=dashboard-payout-api&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# Payout API

Gérez vos reversements via API

Le menu Payout API regroupe toutes vos transactions de type payout (reversements effectués via API). Vous pouvez rechercher, filtrer et exporter vos payouts selon différents critères.

⚠️

#### Liste blanche IP requise

Vous n'avez pas encore ajouté d'adresse IP à la liste blanche. Sans cette configuration, vous ne pourrez pas effectuer de payouts via l'API. Rendez-vous dans le menu Adresse IP pour ajouter vos adresses IP autorisées.

![Interface Payout API — recherche et filtres](https://docs.feexpay.me/payout-api/payout_api_overview.png)

### Recherche par critère

Utilisez le sélecteur Choisir un critère puis saisissez la valeur recherchée dans la barre de recherche. Les critères disponibles sont :

-   Montant — rechercher par montant du reversement
-   Numéro — numéro de téléphone du bénéficiaire
-   Référence FeexPay — identifiant interne du payout
-   Référence Marchand — référence que vous avez fournie lors de la création
-   Ref Opérateur — référence générée par l'opérateur mobile money
-   Description — description associée au reversement
-   Callback Info — données de callback liées au payout

### Filtres avancés

Combinez plusieurs filtres pour affiner vos résultats :

| Filtre | Description | Valeurs possibles |
| --- | --- | --- |
| Date début / Date fin | Période du reversement | Sélecteur de date |
| Statut | État du payout | Succès, Echec, En attente |
| Réseau | Opérateur mobile money utilisé | MTN, Moov, Orange, Wave… |

### Actions disponibles

-   Actualiser — recharge les résultats selon les filtres en cours.
-   Voir toutes les transactions — affiche tous vos payouts sans filtre, pour consulter les derniers reversements effectués.
-   Exporter — télécharge le résultat de la recherche au format Excel ou CSV pour un traitement externe ou comptable.

**Note :** Lorsqu'aucun filtre n'est sélectionné, la page affiche le message "Utilisez la barre de filtre ci-dessus pour trouver les transactions.". Cliquez sur Voir toutes les transactions pour afficher l'ensemble des payouts.

**Export :** Vous pouvez exporter les transactions Payout API depuis cette page ou depuis le menu Exporter en sélectionnant l'option Payout API.

 [Précédent

Send]  [Suivant

Liste]
