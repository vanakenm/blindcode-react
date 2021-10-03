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
yarn start
```
### Installer React Navigation

Installer `React Navigation`

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
```

### Créer deux écrans pour tester

Dans App.js on va créer deux composants très simple pour tester la navigation.

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
  let navigation = props.navigation
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
```

A savoir 

- Récupérer dans "props" un paramètre "navigation" (fourni par `React Navigation`)
- Ajouter un bouton qui utilise `navigation.navigate()` pour passer à l'écran de détails. 

## Naviguer dans notre application "Musées"

- A partir de l'API musee
- Faire une page de detail accessible via touch
- Passer le record complet
- Back button