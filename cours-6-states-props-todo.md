# Une application

Nous allons progressivement construire une petite application de gestion de tâches ce qui va nous permettre de couvrir ou revoir pas mal de sujets:

- Composants
- Gérer un état via "useState"
- Utliser FlatList
- Afficher, éditer, supprimer des éléments
- Sauvegarde de l'état dans le "LocalStorage"

## Etat et useState

Nous avons vu qu'il est possible de créer des accesseurs pour tout éléments de l'état via useState:

```JavaScript
  const [clicks, setClicks] = useState(0)
```

Cela peut fonctionner pour n'importe quel type d'object - y compris un tableau

## TextInput

      <TextInput onChangeText={setName} value={name} />

## Une application "todo" 


### Créer une application

Nous allons créer une nouvelle application "Todos" pour cet exemple un peu plus détaillé.

```bash
  expo init -t blank todos
```

### Données

Pour commencer sur un écran rempli, on peut utiliser des données dans un simple tableau et initialiser l'état avec celui ci:

```JavaScript
  const TASKS = [{id: 1, name: "Préparer cours EQLA", done: true}, [{id: 2, name: "Ajouter un exemple avec un tableau", done: false}, {id: 3, name: "Déveloper une application mobile de todos", done: false}]]
  const [todos, setTodos] = useState(TASKS)
```

## Etapes

- Titre
- Une simple liste
  - Trois composants "texte" hard codés
  - Ajouter une "checkbox" (OpacityXXX)
- Extraire un composant
  - Créer une composant TodoItem
  - Props
  - Remplacer les composants Texte
- Data
  - Créer les données (hard codées) dans un JSON array
  - Faire une boucle pour créer la liste
  - Utiliser une FlatList
- Status des items
  - Créer un status "done" (false initialement)
  - Marquer sur la liste (devant le titre)
- Créer une nouvelle tâche
- Supprimer une tâche
- Marquer une tâche comme "faite"
- Utiliser le storage

## Aller plus loin

- API externe (firebase?)
- Mettre l'édition sur une page séparée