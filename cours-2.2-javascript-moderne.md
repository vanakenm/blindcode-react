# JavaScript moderne

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

## Types de données

- Nombres
- String
- Tableaux
- Objets
- Date

### String & interpolation

### Var, let and const

## Boucles
## Alternatives
## Fonctions
## Arrow Functions
## JavaScript et le DOM