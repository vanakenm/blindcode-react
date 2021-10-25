# Déploiement

Nous avons une application qui marche en test sur l'ordinateur - mais le but est de la faire fonctionner sur un téléphone. Sans entrer dans tous les détails spécifiques à IOS et Android, il est déjà possible de faire un déploiement simple via Expo.

## En développement

Dans le répertoire de l'application, la démarrer:

```bash
expo start --web
```

Une fois l'application démarrée, dans une autre ligne de commande dans le même répertoire:

```bash
expo send . -s <votreemail@quelquechose.com>
```

Ceci envoie sur votre mail un lien vers l'application en cours.

Attention celui-ci ne fonctionne que sur le même réseau wifi. Si pas, voir le point "tunnel" juste après.

Sur le téléphone, cliquer sur le lien. Si vous obtenez un message avec une erreur, ne pas hésiter à faire back et revenir à l'écran de base d'Expo. Il devrait contenir un point "Recently in development" ou "Recently opened". Le premier lien devrait être le bon pour ouvrir l'application.

### Sur un autre réseau

Si vous voulez tester l'application via un téléphone sur un autre réseau que celui auquel l'ordinateur est connecté, il faut passer par un tunnel, les commandes sont alors un peu différentes. Pour lancer l'application:

```bash
expo start --web --tunnel
```

Une fois l'application démarrée, dans une autre ligne de commande dans le même répertoire:

```bash
expo send . --tunnel -s <votreemail@quelquechose.com>
```

## Déployer en public avec expo

Vous pouvez publier votre application (pour que d'autres puissent s'en servir) via Expo:

```bash
expo publish
```

La commande va mettre un certain temps (plusieurs minutes). Quand elle se termine il y a un texte avec deux liens.

```bash
Uploading JavaScript bundles
Publish complete

📝  Manifest: https://exp.host/@vanakenm/navig Learn more.
⚙️   Project page: https://expo.io/@vanakenm/navig Learn more.
```

Le dernier peut être envoyé à qui le souhaite et permet de tester l'application (la personne devra d'abord installer Expo sur son téléphone ou sa tablette)

## Deployer sur les "stores"

Il s'agit ici de déployer sur l'App Store d'Apple ou le Play Store de Google - et c'est une tâche autrement plus complexe et qui nécessite un compte développeur (probablement payant) et également de respecter un ensemble d'attente des stores.

Ceci sort largement du cadre du cours - pour plus d'information je vous renvoie à la [documentation d'Expo](https://docs.expo.dev/distribution/introduction/)