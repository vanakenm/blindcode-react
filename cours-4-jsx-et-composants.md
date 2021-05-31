# React, yarn & JSX

Nous allons reprendre le code de l'application Expo que nous avons crée et détailler un peu ce qui s'y trouve. Derrière ces quelques lignes de code se trouvent pas mal de concepts importants.

## npm & Yarn

- Pourquoi un gestionnaire de packages? (comment faisait on "avant")
- Chercher des packages "npm XXX"

### Structure de package.json 

- npm vs yarn
- Ajouter un package
- yarn.lock

## JSX

Ceci n'est pas du JavaScript. Vous vous rappelez de babel?

```bash
    npm add babel-preset-react
    babel --presets react App.js
```

Notre App.js devient quelque chose comme:

```Javascript
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(
      Text,
      null,
      'Hello c\'est Martin je vais bien'
    ),
    React.createElement(StatusBar, { style: 'inverted' })
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
```

Dans le détail, on peut voir que le composant Text:

```Javascript
<Text>Hello c'est Martin je vais bien</Text>
```

est devenu:

```Javascript
React.createElement(
      Text,
      null,
      'Hello c\'est Martin je vais bien'
    )
```

Donc:

- Déclarer un composant JavaScript, c'est en fait appeler la fonction React.createElement
- Le premier paramètre est le nom du composant - en fait une classe ou fonction
- Le second reprend tout paramètre passé au composant - donc les attributs de la fonction
- Le troisième reprend le contenu du composant - ici du texte, mais pour View, un autre composant

### Presque du HTML

- Toujours fermer les tags
- Toujours un unique tag au niveau le plus haut
  - Fragments

### Fonctions!

- Props == arguments en entrée
- Peuvent elles mêmes appelée d'autre fonctions
