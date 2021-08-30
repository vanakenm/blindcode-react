# Gérer un état dans un tableau

Nous avons vu comment gérer des variable via `useState` - mais que faire quand l'état de l'application est un tableau.

Nous allons prendre pour exemple un e-commerce qui vendrait des jouets.

## Structure et état initial

Pour nous faciliter la vie nous allons démarrer avec déjà deux jouets dans le magasin - ceci permet également de définir leur structure:

```JavaScript
const TOYS = [
  { id: 1, name: "Pluche", price: 25 },
  {
    id: 2,
    name: "Voiture",
    price: 50,
  },
];
```

Un jouet est donc composé de trois propriété:

- un nom à afficher à l'écran
- un prix en €
- un id

L'id n'est jamais affiché mais permet d'identifier un jouet de manière unique. Nous allons voir pourquoi ceci est imporant.

## Définition avec useState

La définition se fait de la même manière que pour une variable normale:

```JavaScript
const [toys, setToys] = useState(TOYS);
```

On défini donc l'état sur base du tableau TOYS.

## Affichage des jouets

Nous allons travailler en trois étapes:

1. Créer un composant qui affiche un jouet unique
2. Créer une fonction pour afficher tous les jouets du tableau
3. Utiliser cette fonction dans App

```JavaScript
  function Toy(props) {
    return (
      <View style={styles.container}>
        <TextInput value={props.name} onChangeText={(newName) => updateToy(props.id, newName)}/> 
        <Text>{props.price}</Text>
      </View>
    )
  }
```

Fonction classique ici - Toy recoit des props qui contienne name, price et id. Pour la simplicité, nous allons supposer que l'on ne peut modifier que le nom du jouet qui est donc un `TextInput` avec `value` basé sur `name` et une foncion `updateToy` qui sera appellée quand le texte change.

La fonction n'est pas encore écrite - ce qui est important est qu'on va l'appeller avec le "nouveau nom" mais aussi avec l'id en paramètre - ceci va permettre d'identifier l'élément correct dans le tableau.

```JavaScript
  function showToys() {
    return toys.map(toy => <Toy key={toy.id} {...toy} />);
  }
```

`showToys` est un simple "map" sur le tableau défini dans `useState` qui peut donc être appellé avec le tableau complet. On voit l'usage de l'opérateur `...` qui évite de devoir taper les trois propriétés.

## Mise à jour d'un jouet

```JavaScript
  function updateToy(id, newName) {
    const newToys = toys.map(toy =>
      toy.id === id ? { ...toy, name: newName } : toy
    );
    setToys(newToys);
  }
```

La fonction `updateToy` recoit en paramètre l'id et le nom changé. C'est ici qu'il faut faire attention - pour que `React` identifie qu'un changement à eu lieu, on ne peut pas simplement modifier l'élément trouver dans le tableau existant - on va donc avoir besoin de créer un nouveau tableau avec des éléments identifique au premier excepté pour l'élément dont l'id est passé en paramètre.

Ceci est fait avec la fonction `map` - on itérère sur `toys` et on compare l'id de l'élément en cours à celui reçu par la fonction:

- S'il est différent, on retourne simplement l'élément sans changement
- S'il est identique, on créer un nouvel objet avec le nom modifié

Une fois fait il suffit d'appeller `setToys`.

Cette logique peut être utilisée pour toute autre modification (prix, etc) ou même pour supprimer un élément (dans ce cas on le retire du tableau à renvoyer)

## Ajouter un nouveau jouet

Pour pouvoir ajouter un nouveau jouet il va nous falloir:

- Deux états pour stocker les noms & prix du nouveau jouet via `useState`
- Une `View` avec les composant pour y entrer le nom et le prix, et un bouton pour confirmer
- Une fonction `addToy` pour créer et ajouter le nouveau jouet à la liste

### Etats

Comme fait précédemment:

```JavaScript
  const [newToyName, setNewToyName] = useState("");
  const [newToyPrice, setNewToyPrice] = useState(0);
```

### View


En dessous de la liste, on ajoute une nouvelle `View` avec les composants nécessaire:

```JavaScript
<View style={styles.container}>
  <Text>Nouveau jouet</Text>
  <Text>Nom</Text>
  <TextInput value={newToyName} onChangeText={setNewToyName}/>
  <Text>Prix</Text>
  <TextInput value={newToyPrice} onChangeText={setNewToyPrice} keyboardType="numeric"/>
  <Button title="Ajouter" onPress={() => addToy(newToyName, newToyPrice)}/>
</View>
```

On peut directement lier les `onChangeText` avec les setters vu qu'il n'y aucune autre action à faire.

### Création

Reste à implémenter `addToy`:


```JavaScript
function addToy(name, price) {
    const newToy = { id: toys.length + 1, name, price };
    setToys([...toys, newToy]);
    setNewToyName("");
    setNewToyPrice(0);
  }
```

Le contenu est assez simple: on créer un nouvel objet avec comme id le prochain entier disponible (on veut éviter de se retrouver avec deux jouets avec le même id!), les prix & noms fournis, puis on appelle `setToys` avec une copie du tableau existant (`...toys`) avec notre nouveau jouet en plus.

Enfin, on remet à blanc les deux champs pour permettre d'ajouter un nouveau jouet si utile.