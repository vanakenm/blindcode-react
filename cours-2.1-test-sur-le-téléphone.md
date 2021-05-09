# Test et retour sur le stack technique

## Test sur le téléphone

Pour pouvoir tester l'application (même en développement) sur le téléphone, nous allons devoir faire quelques étapes (heureusement une seule fois). Je vous conseille de partager vos écrans cela va m'aider à vous suivre si nécessaire. Le fonctionnement par défaut est via un QR code ce qui risque d'être compliqué dans ce cas ci.

La procédure est un peu complexe, mais permet après d'avoir un cycle de développement/test très court ce qui est un immense avantage.

- Allez sur expo.io et créer un compte (gratuit)
- Télécharger sur le téléphone (iPhone ou Android) l'application "expo go"
- Se connecter avec le même compte dans l'application (il y a un tab "utilisateur ou profile" en bas à droite) - ceci va permettre à expo de faire le lien entre votre ordinateur et l'application qui tourne dessus et le téléphone
- Dans les options sur le navigateur, sélectionner "envoyer un email"
- Via le téléphone, ouvrir l'email et sélectionner le lien - ceci devrait ouvrir l'application directement dans expo

Ceci fait, retournez faire une petite modification de texte dans le code et sauvergarder - l'application est modifiée directement sur le téléphone !

### Expo register

Il est possible de s'enregistrer via le cli également

```bash
    expo-cli register
```

Ceci peut faciliter les choses pour retrouver les projets depuis l'application mobile

### Publier

Il est aussi possible de "publier" l'application "Publish project" dans le navigateur. Ceci génère une url publique qui peut alors être partagée avec n'importe quelle autre personne (elle aura besoin de télécharger Expo Go).

## Retour sur le stack

Sur ces quelques heures, nous avons introduit un grand nombre de concepts très rapidement avec un stack déjà complexe:

- JavaScript
- Yarn
- React & JSX
- React Native
- Expo

Après ce premier test, temps de repasser à travers ceci pour mieux comprendre le code qui se trouve dans l'application.