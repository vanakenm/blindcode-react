# Cours 1: Introductions & Première application

## Présentations croisées

### Formateur

- Martin
- Economiste
- 20 ans+ en dev
- Développeur, analyste, tech lead, CTO, développeur
- Pas mal en startups ces jours ci (par opposition aux grosses structures)
- Expérience en formation (Prof, Wagon)

J'ai une tendance à parler vite, surtout quand je suis enthousiaste (c'est à dire souvent). Ne jamais hésiter à me faire répéter ou reprendre un concept.

## Groupe

- Prénom
- Expérience en code
- Attentes vis à vis du cours/de la formation
- Expérience en anglais (écrit, côté documentation)

## Intro au développement mobile

### Un monde fragmenté

- Long historique (Nokia, Microsoft)
- Deux plateformes (Android/Google, iOS/Apple)
- Autour de 80/20 donc impossible d'en ignorer une

### Importance

- 50% du web est mobile aujourd'hui et cela augmente!
- Problématiques spécifique (vitesse mais aussi taille des écrans)

### Client et serveur

- Rare d'avoir une app "native" seule
- Typiquement un serveur quel

## Intro React/React Native/Expo

### A propos de React

### A propos de React Native

Une solution pour faire du développement mobile, cross plateforme et avec des technologies web (JavaScript, React). 

Pas la seule possibililité - exemples Ionic Framework ou Flutter.

### A propos d'Expo

Expo est une application open source permettant de déployer des applications React Native de manière extrêmenet simple et de les tester rapidement tant dans le browser que sur le téléphone.

En résumé: Expo permet de développer en utilisant uniquement JavaScript/React Native et de déployer sur Android et iOS. Pas de développement natif en double, pas besoin d'XCode ou Android studio, au prix de quelques limitations (set d'API légèrement plus réduit, application plus lourde, contraintes type In App Purchase)

## Installation et une première application

### Expo Cli

Avec Node 12+ installé

```bash
node --env
```

Sinon: https://nodejs.org/fr/download/


```bash
    yarn add global expo-cli
```

Quand terminé, `expo` & `expo-cli` devraient être accessibles depuis le terminal.

### Expo App

Installez l'application Expo sur votre téléphone mobile ([iOS](https://apps.apple.com/app/apple-store/id982107779) ou [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US))

### Création d'une application

```bash
    expo init MonApplication
    cd MonApplication
    yarn install
    yarn start
```

Ceci ouvre un navigateur avec plusieurs options. Sélectionnez "Open in Browser"

Comme proposé, ouvrez le fichier "App.js" et ajoutez un élément Text au dessus de celui qui existe avec un message personnel. Sauvegardez.

L'application devrait avoir été mise à jour dans le navigateur.
