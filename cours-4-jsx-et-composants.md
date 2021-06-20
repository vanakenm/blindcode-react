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

## Un premier composant

Nous allons permettre à notre application de dire Bonjour en créant un composant "Greetings"

<Greetings name="Martin" />

Qui devrait afficher à l'écran

"Bonjour Martin"

## Composant "en ligne"

Pour commencer on peut simplement créer le composant "en ligne" c'est à dire dans le code de App.js:

```Javascript
export default function App() {
  let name = "Martin"
  return (
    <View style={styles.container}>
      <Text>Bonjour {name}</Text>
      <StatusBar style="inverted" />
    </View>
  );
}
```

On voit ici que l'on peut utiliser dans le JSX une variable JavaScript définie plus haut (name)

## Créer un composant

Un composant n'est jamais qu'une fonction JavaScript qui renvoie du JSX:

```Javascript
function Greetings() {
  let name = "Martin"
  return (
    <Text>Bonjour {name}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Greetings />
      <StatusBar style="inverted" />
    </View>
  );
}
```

## Passer des paramètres

Un composant peut recevoir des paramètre sous forme d'une variable unique habituellement appelée "props" ("propriétés") - mais cette variable est un object JavaScript qui peut donc avoir plusieurs "champs"

```Javascript
function Greetings(props) {
  let name = props.name
  return (
    <Text>Bonjour {name}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Greetings name="Martin"/>
      <StatusBar style="inverted" />
    </View>
  );
}
```
## Plusieurs composants

Une fois défini, un composant (comme une fonction) peut être appellé plusieurs fois avec des paramètres différents.

```Javascript
export default function App() {
  return (
    <View style={styles.container}>
      <Greetings name="Martin"/>
      <Greetings name="Khadija"/>
      <StatusBar style="inverted" />
    </View>
  );
}
```

## Boucle

En supposant que l'on ai les noms des gens à saluer dans un tableau, comment faire pour utiliser le tableau? Généralement via une boucle, ce que l'on va faire ici:

```Javascript
export default function App() {
  let names = ["Martin", "Khadija", "Sarah"]
  return (
    <View style={styles.container}>
      <Text >Bonjour {name}</Text>
      {
        names.map((name) => 
          <Greetings name={name}/>
        )
      }
      <StatusBar style="inverted" />
    </View>
  );
}
```

Pour détailler:

- On défini un tableau avec les noms
- A l'intérieur du jsx, on peut utiliser les accolades ({}) pour insérer du code javascript
- Dans ce cas ci, on veut itérer sur le tableau "names"
- "map" est similaire à "forEach" mais retourne la valeur produire à chaque itération, ce qui permet ici de l'afficher. Le paramètre est lui même une fonction, donc ici via les fonctions flèches.
- Le contenu prend simplement la valeur du tableau (`name`) et affiche le composant `<Greetings />`
