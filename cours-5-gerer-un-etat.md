# Gérer un état

Jusqu'ici nos applications ne font que présenter des données - il n'y a aucun moyen pour l'utilisateur de les modifier, et les données elles mêmes sont fixes.

Hors, une des grandes valeurs ajoutées de React est justement sa capacité à faire ce que l'on appelle un "data binding" - lier des éléments affichés à l'écran à des données, en mettant à jour les composants automatiquement quand ces données changent.

Le principe de React est que le programmeur n'a jamais à forcer l'application à faire un refresh - c'est React qui s'occupe de "surveiller" les données et de réafficher les composants quand nécessaire (par exemple pour montrer un élément mis à jour ou ajouté à une liste).

Comme précédemment je vais partir d'un example pour illustrer cela

## Formes et boutons

Donc nous avons une application et sommes capable d'afficher des éléments à l'écran mais aucun d'entre eux ne permet d'interactions.

En Web et donc en React Native, les éléments avec interactions sont principalement de deux types:

- Des boutons
- Des élément d'input (texte, date, checkbox, ...)

## Un compteur

Pour un tout premier exemple, nous allons réaliser un simple compteur de clicks, une application avec :

- Un bouton "Click me"
- Un texte indiquant 'Vous avez cliquer X fois'

Bien que simpliste, ceci permet de démontrer comment React gère un état (c'est à dire des données qui peuvent changer).

### Etape 1: Base de travail

On crée une nouvelle application avec expo:

```bash
expo init -t blank clicclic
cd clicclic
```

Dans App.js on va remplacer le contenu par:

Un bouton:

```JavaScript
  <Button title="Cliquez ici" accessibilityLabel="Click here to become the best clicker!" />
```

Attention a bien importer "Button" en le rajoutant dans l'import depuis 'react-native'.


```JavaScript
import { StyleSheet, Text, View, Button } from 'react-native';
```

Plus d'information sur [Button](https://reactnative.dev/docs/button)

Un texte pour afficher le nombre de clics (pour l'instant hard codé):

```JavaScript
  <Text>Vous avez cliquez 17 fois</Text>
```

A tester évidemment:

```bash
expo start --web
```

### Etape 2: Réagir au click

L'application fonctionne mais le bouton ne fait rien quand on le presse. 
Une manière simple de tester cela serait d'afficher une alerte "clic" quand on appuis dessus.

Les boutons de React Native ont une proriété "onPress" - celle-ci est appellée à chaque fois que le bouton est pressé et nous permet de définir ce que l'on veut faire à ce moment. Ce que onPress attend comme valeur est... une fonction qui sera donc appellée à chaque clic.

On peut définir une fonction simple "click" qui va simplement afficher une alerte (comme en HTML) - soit en dehors de App (au dessus), soit à l'intérieur de la fonction app mais avant le return. Il est autorisé en JavaScript de définir des fonctions dans des fonctions!

```JavaScript
  function clic() {
    alert("Vous avez cliqué!")
  }

  //Equivalent en fonction flèche
  const clic = () => {
    alert("Vous avez cliqué!")
  }

  ...

  <Button title="Cliquez ici" onPress={clic} />
```

Retour dans le navigateur pour tester!

On peut en réalité simplifier les choses - la fonction est courte et peut donc être écrite "inline" directement dans onPress:


```JavaScript
  <Button title="Cliquez ici" onPress={() => alert("Vous avez cliqué")} />
```

### Etape 3: useState

Reste à lier ces éléments ensemble avec:

- Une variable pour retenir le nombre de fois que l'on a cliqué
- Un moyen de la modifier pour y ajouter 1 lorsque que l'on clique sur le bouton

C'est ce à quoi sert "useState" - une méthode fournir par React qui permet de "demander" à React de surveiller la valeur d'une variable et de redessiner l'écran si elle change.

```JavaScript
  const [clicks, setClicks] = useState(0)
```

On peut alors utiliser "clicks" comme variable partout où elle doit être affichée ou tester et "setClicks" pour la mettre à jour. React se charge de mettre à jour/redessiner tous les composants qui en ont besoin suite au changement.

Exemple:

```JavaScript
    <View style={styles.container}>
      <Button onPress={() => setClicks(clicks + 1)} title="Click me" accessibilityLabel="Click here to become the best clicker!"/>
      <Text>You clicked {clicks} times</Text>
    </View>
```
