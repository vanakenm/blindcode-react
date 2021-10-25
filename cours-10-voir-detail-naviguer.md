# Navigation

Nous avons jusqu'a présent travaillé sur un écran unique. Hors, en natif comme en web, la plupart des applications contiennent plusieurs pages (ou écrans) - surtout sur des écrans mobiles qui sont souvent petits.

## Navigation en React Native

React Native s'inspirant directement du fonctionnement du web, il en va de même pour la navigation. On va ceci dit plus parler d'écran (Screen) que de pages.

Les composants de navigation ne font pas directement partie de React Native ou d'expo. Ils sont dans ce que l'on appelle un "third party package" - recommandé directement par React Native ceci dit.

## Un exemple simple

Nous allons créer l'exemple de navigation le plus simple possible - une application avec deux écrans "Home" et "Détail" et un bouton permettant de passer de l'un à l'autre.

### Créer une nouvelle application

Donc, une nouvelle application:

```bash
expo init -t blank nav
cd nav
expo start --web
```
### Installer React Navigation

Installer `React Navigation`

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
```

### Créer deux écrans pour tester

Dans App.js on va créer deux composants très simples pour tester la navigation.

```JavaScript
function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
```

### Base de navigation

Reste à créer un composant qui puisse contenir nos deux écrans et permettre de passer de l'un à l'autre:

```JavaScript
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    {/* Le container contient l'ensemble des composants de navigation */}
    <NavigationContainer>
    {/* Le stack (pile) va reprendre les différents écrans qui donc "s'empilent" les uns au dessus des autres */}
      <Stack.Navigator>
        {/* Chaque écran est un "Screen" avec un nom et un composant */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

A ce stade l'application devrait déjà fonctionner - même s'il n'y a aucun moyen de passer aux détail.

### Naviguer d'un composant à l'autre

On peut adapter le composant Home comme suit:

```JavaScript
function HomeScreen(props) {
  // l'objet 'navigation' est définie et passée via React Navigation
  let navigation = props.navigation
  
  // on peut s'en servir pour naviguer vers n'importe quel écran via son "name"
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        uppercase={false}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
```

A savoir 

- Récupérer dans "props" un paramètre "navigation" (fourni par `React Navigation`)
- Ajouter un bouton qui utilise `navigation.navigate()` pour passer à l'écran de détails. 

## Navigation et paramètres

Il y a beaucoup de cas où l'on va vouloir passer des informations du composant "principal" à celui vers lequel on navigue. Imaginons que notre écran "Home" affiche une liste de nom (des clients, des étudiants, des amis, peu importe ici) et que pour chaque on veut définir un écran de détail - qui doit donc être différent pour chacun.

Pour simplifier on va juste créer un second bouton dans l'écran Home et ajouter un paramètre -  la fonction `navigate` en prend deux - le nom du composant vers lequel naviguer, puis un objet JavaScript avec autant de propriété que l'on souhaite:

```JavaScript
      <Button
        title="Go to Details for Bob"
        onPress={() => navigation.navigate('Details', { name: "Bob"})}
      />
      <Button
        title="Go to Details for Julie"
        onPress={() => navigation.navigate('Details', { name: "Julie"})}
      />
``` 

J'ai crée deux boutons manuellement ici - mais ceci pourrait sans problème être des composants générés via un tableau avec `map`.

Du côté du composant, on peut récupérer le paramètre `name` via `route`:

```JavaScript
function DetailsScreen(props) {
  let { route, navigation } = props
  let name = route.params.name
  return (
    <View>
      <Text>Details Screen for {name}</Text>
    </View>
  );
}
```
