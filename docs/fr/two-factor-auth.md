---
id: two-factor-auth
title: "Activer la double authentification (2FA)"
group: general
lang: fr
source: https://docs.feexpay.me/?section=two-factor-auth&version=v2
updated_at: 2026-10-20T10:01:44.033Z
---

# Activer la double authentification (2FA)

Une étape de plus à la connexion pour protéger votre compte

La double authentification ajoute une étape à la connexion : après votre mot de passe, vous saisissez un code à 6 chiffres affiché par une application sur votre téléphone. Même si quelqu'un obtient votre mot de passe, il ne peut pas se connecter sans votre téléphone.

FeexPay n'envoie pas de code par SMS ni par e-mail : le code est généré par l'application de votre téléphone, même sans connexion internet.

### Avant de commencer

-   Un smartphone avec une application d'authentification : **Google Authenticator**, **Microsoft Authenticator** ou **Authy** (gratuites sur l'App Store et Google Play).
-   Le mot de passe de votre compte FeexPay.
-   Un endroit sûr où conserver vos codes de récupération (gestionnaire de mots de passe, document imprimé rangé à l'abri).

### Activer la double authentification

1.  Connectez-vous à votre tableau de bord FeexPay.
2.  Ouvrez votre **Profil** depuis le menu en haut à droite, puis repérez le bloc **Sécurité**. Vous pouvez aussi passer par **Paramètres** → **Gérer dans mon profil**.
3.  Dans la ligne **Double authentification**, cliquez sur **Activer**.

![Bloc Sécurité avec le bouton Activer](https://docs.feexpay.me/two-factor/security_enable.png)

#### Étape 1 sur 4 : confirmer votre mot de passe

Saisissez votre mot de passe, puis cliquez sur **Continuer**. L'icône en forme d'œil permet d'afficher ce que vous tapez.

#### Étape 2 sur 4 : scanner le QR code

1.  Ouvrez votre application d'authentification sur votre téléphone.
2.  Choisissez **Ajouter un compte** (souvent un bouton **+**), puis **Scanner un QR code**.
3.  Visez le QR code affiché à l'écran. Un compte **FeexPay** apparaît dans l'application, avec un code à 6 chiffres qui change toutes les 30 secondes.
4.  Cliquez sur **J'ai scanné le code**.

Impossible de scanner ? Sous le QR code, cliquez sur **Copier** à côté de la clé, puis dans l'application choisissez **Saisir une clé** et collez-la.

![QR code et clé de saisie manuelle](https://docs.feexpay.me/two-factor/qr_setup.svg)

#### Étape 3 sur 4 : saisir le premier code

Tapez le code à 6 chiffres affiché par l'application. Il est validé automatiquement au 6e chiffre.

Si le code est refusé, attendez le code suivant (il change toutes les 30 secondes) et vérifiez que l'heure de votre téléphone est réglée automatiquement.

#### Étape 4 sur 4 : conserver vos codes de récupération

FeexPay affiche **10 codes de récupération**. Ils vous permettent de vous connecter si vous perdez votre téléphone.

-   Enregistrez-les avec **Copier**, **Télécharger (.txt)** ou **Imprimer**.
-   Chaque code ne sert qu'une seule fois.
-   **Ils ne seront plus jamais affichés** après la fermeture de la fenêtre.

Cochez **J'ai conservé mes codes en lieu sûr**, puis cliquez sur **Terminer**.

![Liste des codes de récupération](https://docs.feexpay.me/two-factor/recovery_codes.svg)

La double authentification est activée et un e-mail de confirmation vous est envoyé.

Attention

Si vous fermez la fenêtre avant l'étape 3, rien n'est activé. Recommencez simplement depuis **Activer**.

### Se connecter avec la double authentification

1.  Saisissez votre e-mail et votre mot de passe comme d'habitude.
2.  L'écran **Vérification en deux étapes** s'affiche : saisissez le code à 6 chiffres de votre application.
3.  Sur votre ordinateur habituel, cochez **Se souvenir de cet appareil pendant 30 jours** pour ne plus saisir de code sur ce navigateur pendant 30 jours. Ne le cochez jamais sur un ordinateur partagé.

![Écran Vérification en deux étapes](https://docs.feexpay.me/two-factor/two_step_verification.svg)

Après 5 codes erronés, la saisie est bloquée pendant 15 minutes. Un compte à rebours indique quand réessayer.

### Vous n'avez plus votre téléphone

Sur l'écran de vérification, cliquez sur **Utiliser un code de récupération** et saisissez l'un de vos codes, avec ou sans tiret. Une fois connecté, pensez à générer de nouveaux codes.

Téléphone perdu et plus aucun code de récupération ? Contactez le support FeexPay. Pour protéger votre compte, le support vérifiera votre identité avant de réinitialiser la double authentification.

### Gérer la double authentification

Tout se passe dans **Profil** → **Sécurité** → **Double authentification**.

-   **Régénérer les codes** crée 10 nouveaux codes. Les anciens cessent immédiatement de fonctionner. Faites-le quand il vous en reste 3 ou moins.
-   **Appareils de confiance** liste des navigateurs dispensés de code. **Révoquer tous les appareils** oblige chacun, y compris celui-ci, à saisir un code à la prochaine connexion. Faites-le si vous avez perdu un ordinateur ou coché la case sur un poste partagé.
-   **Désactiver** demande votre mot de passe et un code. Votre compte ne sera alors plus protégé que par votre mot de passe.

Bon à savoir

FeexPay ne vous demandera **jamais** votre code par téléphone, e-mail ou message. Si quelqu'un vous le demande, ne le donnez pas : c'est une tentative de fraude.
