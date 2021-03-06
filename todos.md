# Todo Expo Sample

### Créer une nouvelle application avec Expo

```bash
expo init -t blank todos
```

Quand terminé, se placer dans le répertoire et lancer l'application

```bash
cd todos
expo start --web
```

### Ajouter des données "hard codées"

Par exemple:

```javascript
const TASKS = [{id: 1, name: "Préparer cours EQLA", done: true}, {id: 2, name: "Ajouter un exemple avec un tableau", done: false}, {id: 3, name: "Déveloper une application mobile de todos", done: false}]
```

A ajouter dans la fonction App.js.

Cette structure détaille chaque tâche comme ayant trois paramètre:

- Un `id` numérique pour pouvoir les différencier (un peu comme on a une clé primaire dans une base de données)
- Un `name` pour son titre
- Un champ booléen `done` qui va indiquer si la tâche est faite ou à faire 

### Afficher une tâche unique

Mettre dans une variable la première tâche

```javascript
  let todo = TASKS[0]
```

et afficher son contenu à l'écran.

Une tâche va nécessiter trois composants:

- Un `Text` indiquant "fait" ou "à faire" en fonction de la valeur de `done`
- Un `TextInput` pour le nom/titre (pour permettre plus tard de modifier cette valeur)
- Un `Button` affichant soit "Fait" (si  `done` est à faux) ou "A refaire" (si `done` est à vrai)

Pour l'instant on ne s'occupe pas de l'effet du `Button` donc pas de `onPress` ou autre - simplement de voir si l'affichage est correct à l'écran.

### Afficher toutes les tâches

A l'aide soit d'une boucle avec `map` soit d'une `FlatList`, afficher toutes les tâches du tableau à l'écran.

### Créer un état avec useState

`useState` (comme utilisé dans l'exmple avec compteur et le nom) permet de créer et modifier un état de l'application.

Dans notre cas, cet état est un tableau

```javascript
  const [todos, setTodos] = useState(TASKS)
```

Pour rappel, `useState` prend un paramètre (l'état initiam) et renvoie un tableau de deux éléments - la variable et un setter pour celle-ci.

Après, React garanti chez chaque fois que "setTodos" sera appellé, le composant sera redessiné correctement.

Ne pas oublier l'import pour `useState`, et d'utiliser `todos` à la place de `TASKS` dans la boucle.

Ceci ne devrait rien changer à ce qui est affiché - mais cela va nous permettre de faire des modifications

### Séparer les tâches accomplies de celles à faire

Pour la facilité de l'utilisateur, on va découper la liste "todos" en deux - celle avec les tâches déjà accomplies (done où `done` est à `true`) et celles restant à faire. On va donc afficher deux listes, chacune avec un titre avant.

Filtrer un array en JavaScript se fait avec "filter":

```javascript
let numbers = [1, -5, 3, 4, -6]
let positiveNumbers = numbers.filter((n) => n > 0)
```

On peut utiliser la même logique pour filtrer les tâches:


```javascript
let todosDone = todos.filter((task) => ...)
let todosNotDone = todos.filter((task) => ...)
```

### Marquer une tâche comme "done"

On va maintenant s'intéresser à faire fonctionner le bouton. 

Ajoutez un attribut "onPress" sur le bouton qui va appeller une méthode "markAsDone" prenant en paramètre l'id de la tâche.

La fonction va devoir être créée:

```javascript
  function markAsDone(id) {
    // parcourir la liste de toutes les tâches
    // si la tâche correspond à l'id, on met done à true
    // si pas on laisse comme c'est
    let updated = ...

    // Mettre à jour la liste
    setTodos(updated)
  }
```

La même logique peut s'appliquer dans l'autre sens (pour les tâches déjà faites mais qui serait à refaire).

Si le code est implémenté correctement, les tâches doivent changer de liste quand on les marques comme effectuées.

### Ajouter une nouvelle tâche

On va ajouter une section supplémentaire pour permettre d'encoder une nouvelle tâche. Pour ce faire il faut

- Une `View` pour contenir
- Un `TextInput` pour encoder le texte
- Un `Button` pour confirmer la création de la tâche

A nouveau, d'abord s'assurer que la section s'affiche correctement, même sans aucun comportement.

### Créer un état pour la nouvelle tâche

Ajouter un nouveau `useState` pour le texte de la nouvelle tâche nommé `newTaskText`, initialisé à la chaine vide.

Pour joindre cet état et le composant Text crée plus haut, il faut utiliser le "onChangeText" (comme fait dans un exercice précédent):

```JavaScript
<TextInput placeholder="Ecrire le titre de la tâche" value={newTaskText} onChangeText={(value) => ...} />
```

Avec ceci, on a la garantie que `newTaskText` contient à tout moment la valeur écrite dans le champs 

### Créer la tâche quand on appuie sur le bouton

Le but ici est d'ajouter une fonction `addTask` qui va créer un nouvel object task, l'ajouter au tableau et appeller setTodos pour mettre à jour l'écran. La fonction devrait être appellée quand on appuie sur le bouton crée plus haut.

```JavaScript
function addTask() {
  let id = ... // On devrait avoir une valeur ici qui ne soit pas encore utilisée - comment?
  let name = ... // Comment récupérer la valeur?

  let newTask = { id: id, name: name, done: false}

  let newTodos = ...

  setTodos(newTodos)

}
```

## Pour ceux qui s'ennuient

### Séparer les pages

Avoir des pages séparées pour:

- Tâches faites
- Tâches à faire
- Nouvelle tâche

Via https://reactnavigation.org/docs/hello-react-navigation/


