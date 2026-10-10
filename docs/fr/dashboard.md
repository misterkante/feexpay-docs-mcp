---
id: dashboard
title: "Tableau de bord"
group: dashboard
lang: fr
source: https://docs.feexpay.me/?section=dashboard&version=v2
updated_at: 2026-10-10T13:08:51.084Z
---

# Tableau de bord

Le tableau de bord est un puissant outil qui vous permet de contrôler votre business en temps réel. Grâce à cet outil, vous gérez vos transactions, vos utilisateurs, vos boutiques et bien d'autres choses.

![Tableau de bord](https://docs.feexpay.me/dashboard/dashboard_new.png)

### Boutiques (shops)

Une boutique (shop) est créée par défaut lors de l’inscription.

Le nombre maximum de boutiques (shops) par compte est de 5.

Une boutique vous permet de **collecter sur différents sites/activités et de distinguer clairement ce qui a été collecté par chaque boutique**.

#### Créer une nouvelle boutique

1.  Cliquez sur le menu en haut (icône boutique) dans la barre de navigation.
2.  Cliquez sur **Ajouter une boutique**.
3.  Renseignez le nom de la boutique, puis validez.

#### Frais de transaction

Par défaut, ce sont les clients qui supportent les frais de transaction (et non le marchand).

Si vous souhaitez un paramétrage différent, contactez **support@feexpay.me**.

Pour récupérer les informations d’une boutique ou consulter son solde (balance), utilisez les endpoints API correspondants.

### Solde

Le solde total correspond à la somme de tous les montants collectés sur chaque réseau, moins les reversements.

Vous pouvez consulter le solde de chaque réseau par pays, en utilisant le champ de sélection de pays.

##### Solde (balance) par boutique

`https://api-v2.feexpay.me/api/balance/public/getByShop/{idShop}`

Remplacez {idShop} par l'identifiant de votre boutique.

Authorization: Bearer <token>

###### Exemple (curl)

```bash
curl -X GET \
+  'https://api-v2.feexpay.me/api/balance/public/getByShop/<idShop>' \
+  -H 'Authorization: Bearer fp_votre_api_key'
```

##### Entête obligatoire

Authorization: Bearer <votre-api-key>

### Les différents menus disponibles sont :

-   Collectes
-   Reversements
-   Payout API
-   Exporter
-   FeexLink
-   F-QR Code
-   FeexPage
-   Liste
-   Notifications
-   Clients
-   Développeurs
-   Webhooks
-   Adresse IP
-   Administration
-   Équipe

 [Suivant

Collectes]

---

## Tab: SuivantCollectes

## Collectes

Gérez toutes vos collectes

Le menu Collectes regroupe toutes vos transactions de type payin (paiements reçus). Vous pouvez rechercher, filtrer et exporter vos collectes selon différents critères.

![Interface Collectes — recherche et filtres](https://docs.feexpay.me/collectes/collectes_overview.png)

### Recherche par critère

Utilisez le sélecteur Choisir un critère puis saisissez la valeur recherchée dans la barre de recherche. Les critères disponibles sont :

-   Montant — rechercher par montant de la transaction
-   Numéro — numéro de téléphone du payeur
-   Référence FeexPay — identifiant interne de la transaction
-   Référence Marchand — référence que vous avez fournie lors de la création
-   Ref Opérateur — référence générée par l'opérateur mobile money
-   Description — description associée à la transaction
-   Callback Info — données de callback liées à la transaction

### Filtres avancés

Combinez plusieurs filtres pour affiner vos résultats :

| Filtre | Description | Valeurs possibles |
| --- | --- | --- |
| Date début / Date fin | Période de la collecte | Sélecteur de date |
| Statut | État de la transaction | Succès, Echec, En attente |
| Réseau | Opérateur mobile money utilisé | MTN, Moov, Orange, Wave… |
| Type | Origine du paiement | Tous les types, FeexPage, FeexLink, Paiement |

### Actions disponibles

-   Actualiser — recharge les résultats selon les filtres en cours.
-   Voir toutes les transactions — affiche toutes vos collectes sans filtre, pour consulter les dernières transactions reçues.
-   Exporter — télécharge le résultat de la recherche au format Excel ou CSV pour un traitement externe ou comptable.

**Note :** Lorsqu'aucun filtre n'est sélectionné, la page affiche le message "Utilisez la barre de filtre ci-dessus pour trouver les transactions.". Cliquez sur Voir toutes les transactions pour afficher l'ensemble des collectes.

[Précédent

Dashboard]  [Suivant

FeexLink]
