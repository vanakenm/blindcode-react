# JavaScript moderne

## Référence

- Prettier: https://prettier.io/
- MDN: https://developer.mozilla.org/fr/docs/Web/JavaScript
- MDN: https://developer.mozilla.org/fr/docs/Web/JavaScript/A_re-introduction_to_JavaScript

## Pourquoi parler de JavaScript maintenant ? 

Expo & React & React Native sont du JavaScript!

Si nous reprenons le fichier App.js il s'agit bien de JavaScript:

- Lignes 1-3 avec les imports nécessaires
- Le composant principale de l'application est lui même une fonction JavaScript avec un "return"
- Les éléments retournés ressemblent à de l'HTML - nous allons voir un peu plus tard qu'il s'agit en fait de JSX donc... de JavaScript
- Les styles (qui seraient en CSS en web) sont un objet JavaScript

Il est donc impossible de progresser significativement en Expo/React Native sans une bonne compréhension de JavaScript. Je vais faire ici un rappel centré sur les éléments qui nous concernent directement.

## JavaScript "moderne"

Objectif: apprendre le JavaScript "moderne" (le language a beaucoup évolué)

Question: le language évolue vite - mais est exécuté par les navigateurs qui sont loin d'être tous mis à jour - comment régler ce problème?

"Compilateurs" JavaScript moderne -> version compatible, typiquement Babel. Cela va nous être très utile dans un instant.

LA référence: https://developer.mozilla.org/fr/docs/Web/JavaScript (MDN!)

## Node, REPL et console

- Node & V8
- Node as a REPL to work outside of the browser
- The browser console (get the shortcut!)

### Node

Interactif:

```bash
    node
```

Ouvre une invite de commande qui va interpréter directement chaque ligne entrée - "REPL" (read-eval-print-loop). Pratique pour faire des tests rapides.


```bash
    touch file.js
    node file.js
```

Ne pas hésitez à faire des tests dans le REPL, même pour des éléments très simples.

## Types de données

- Nombres

```JavaScript
5
5 + 3

0.2

0.2 + 0.1
```

Une idée d'explication?

- String

```JavaScript
"Bonjour"
"Bonjour" + " React!"
```

- Tableaux

```JavaScript
[1, 2, 3, 5]
[1, 2, 3, 5].length
```

- Objets

```JavaScript
{ taille: 5, cours: "Mobile" }
```

- Date

```JavaScript
Date
Date()
new Date()
```

### Var, let and const

Définir une variable en JavaScript peut se faire de plusieurs manières:

```JavaScript
var a = 5
let b = 7
const c = 18
```

Une idée des différences ? (voir exemple)

De manière générale: 

- Si constante => const
- Si pas => let

Aucune raison d'utiliser var aujourd'hui

### String & interpolation

```JavaScript
let name = "Martin"
`Bonjour ${name}`

// Same as (but generally prefered to)

"Bonjour " + name
```

## Alternatives

```JavaScript
let age = 17
if (age < 18) {
    console.log("Jus d'orange pour vous")
} else {

}
```

Egalité et "triple égalité"

```JavaScript
"" == 0
// true

"" === 0
// false
```

En résumé: toujours utilisé le triple égal ou équivalent (===, !==)

## Boucles

```JavaScript
for (let step = 0; step < 5; step++) {
    console.log('Walking east one step');
}
```

Dans la réalité, l'immense majorité des boucles se font sur des tableaux:

```JavaScript
let ages = [17, 25, 36]
ages.forEach((a) => { console.log("Age: " + a) })
```

Nous allons reparler de cette construction dans un instant.

## Fonctions

```JavaScript
    function add(a, b) {
        return a + b
    }

    add(3, 8)
```

Attention à ne pas confondre retourner une valeur et afficher une valeur.

## Arrow Functions

```JavaScript
    const add = (a, b) => {
        return a + b
    }

    add(3, 8)
```

Les functions dites "fonction flèches" sont de plus en plus utilisées, surtout pour être utilisées immédiatement:

```JavaScript
let ages = [17, 25, 36]

ages.forEach(function(a) {console.log(a)}) 
ages.forEach(a => console.log(a)) 
```

## JavaScript et le DOM

Le premier usage de JavaScript est habituellement d'intéragir avec le DOM: window, document, getElementById, etc

Je ne vais pas m'étendre sur le sujet ici, vu que notre focus est ailleurs

## Exercices

### Bonjour le monde

- Créer une fonction "greet" qui prend un paramètre (le nom de la personne) et affiche en retour "Bonjour 'nom'"
- Faire la même chose mais en _retournant_ le nom plutôt que de l'afficher.
- Essayer d'utiliser de l'interpolation plutôt que l'opérateur "+"
- Faite une version avec "function" et une autre avec une "arrow function"

### Add



### Fibonacci

Créer une fonction "fibo" prenant un nombre N en entrée et qui renvoie le Nième nombre de la série de Fibonacci. 

Pour rappel, chaque nombre de la série est la sommes des deux précédents, et les deux premiers sont 1 et 1 donc:

1, 1, 2, 3, 5, 8, 13 ...

### Cotes

Créer une fonction "cotes" qui prend en paramètre un tableau d'entier représentant des cotes (un entier entre 0 et 20)

La fonction doit renvoyer un objet JavaScript contenant:

- Le nombre de cotes sous la clé "nombre"
- La meilleure note sous la clé "max"
- La moyenne des cotes sous la clés "moyenne"

Il est possible (et recommandé) de procéder par étapes !
