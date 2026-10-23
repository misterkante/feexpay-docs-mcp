---
id: dashboard-reversements
title: "Reversement"
group: dashboard
lang: fr
source: https://docs.feexpay.me/?section=dashboard-reversements&version=v2
updated_at: 2026-10-23T10:08:13.250Z
---

# Reversement

Bienvenue au menu Reversement. Vous avez la possibilité d'initier le reversement de vos fonds ainsi que de consulter l'historique de vos reversements.

### Pour déclencher un reversement:

1\. Cliquez sur le bouton **Initier un reversement**.

![Initier un reversement](https://docs.feexpay.me/reversement/reversement_dash_new.png)

2\. Remplissez le formulaire ouvert avec les détails de votre reversement.

3\. Cliquez sur le bouton **suivant**.

![Formulaire de reversement](https://docs.feexpay.me/reversement/form_revers1_new.png)

4\. Choisissez le type de reversement : Mobile Money, bancaire ou cryptomonnaie.

![Choix du type de reversement](https://docs.feexpay.me/reversement/choice.png)

5\. Remplissez le formulaire, puis lancez le reversement.

![Formulaire de reversement](https://docs.feexpay.me/reversement/send.png)

6\. Pour un reversement Mobile Money, le numéro utilisé est celui enregistré dans l'onglet <strong>Configuration</strong> du tableau de bord.

Où configurer vos numéros ?

Les numéros de reversement ne se configurent plus depuis votre profil. Ils sont regroupés par pays et par réseau dans l'onglet [Configuration](https://docs.feexpay.me/?section=dashboard-configuration) du tableau de bord.

### Reversement vers un compte bancaire

Le reversement bancaire est une demande traitée par l'équipe FeexPay : le montant est débité de votre solde au moment de la demande, puis le virement est effectué vers le compte indiqué. Vous pouvez reverser n'importe quel solde vers une banque de n'importe quel pays.

#### Étapes

1\. Initiez un reversement, choisissez le **solde à débiter**, saisissez le **montant** et le **motif**, puis cliquez sur **Suivant**.

2\. Dans **Mode de reversement**, choisissez **Compte bancaire**.

3\. Choisissez **Mon compte configuré** ou **Autre compte** pour un reversement ponctuel.

4\. Pour un autre compte, renseignez la banque et son pays, le titulaire, le numéro de compte, le code banque, le code guichet, la clé RIB, la domiciliation et, si besoin, l'IBAN et le code SWIFT/BIC. Joignez votre **RIB** (image ou PDF, 8 Mo maximum).

5\. Vérifiez les frais affichés, puis validez la demande.

Compte bancaire enregistré

Si vous avez configuré un compte bancaire de reversement dans l'onglet [Configuration](https://docs.feexpay.me/?section=dashboard-configuration), ses coordonnées et son RIB sont repris automatiquement. Ils ne peuvent pas être modifiés au moment du reversement : pour changer de compte, mettez à jour la configuration ou choisissez **Autre compte**.

#### Frais

Les frais sont déduits du montant demandé :

| Cas | Frais |
| --- | --- |
| Depuis le solde carte, quel que soit le pays de la banque | Gratuit |
| Banque dans le même pays que le solde débité | Gratuit |
| Banque au Congo (depuis un solde d'un autre pays) | 0,5 % |
| Banque dans un autre pays | 6 000 FCFA |

Le montant minimum d'un reversement bancaire est de **100 000 FCFA**.

Un taux de reversement spécifique peut avoir été négocié pour votre compte : il remplace alors ces règles. Le montant exact des frais figure sur la transaction.

### Reverser le solde carte vers Mobile Money

Les fonds encaissés par carte bancaire sont regroupés dans un **solde carte**. Vous pouvez les reverser vers un numéro Mobile Money en choisissant le solde carte comme solde à débiter, puis le mode **Mobile Money**.

-   Le montant est débité de votre solde carte dès l'envoi de la demande.
-   Les frais correspondent au taux payout du réseau de destination, arrondis au franc supérieur, et sont déduits du montant saisi.
-   Si la demande est rejetée, le montant est recrédité sur votre solde carte.
-   Le réseau TOGOCOM TG n'est pas disponible comme destination depuis le solde carte.

Restrictions de reversement

Pour des raisons de conformité, FeexPay peut bloquer les reversements manuels vers certains pays ou certains réseaux pour votre compte. Le reversement est alors refusé avec le code `ACCESS_DENIED` et un message du type _Manual reversal denied for network …_ ou _… for country …_. Cette restriction s'applique aux reversements Mobile Money unitaires, depuis le solde carte et en masse. Contactez le support FeexPay pour en connaître le motif ou demander sa levée.

 [Précédent

Clients]  [Suivant

Cards KYB]
