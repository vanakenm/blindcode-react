# Récupérer des données depuis le serveur et async/await

Jusqu'ici nous avons utilisé des données soit via une constante soit encodée par l'utilisateur. En majorité, les données affichées dans une application mobile viennent en fait d'un serveur (crée par exemple en Laravel), et organisées de manière à pouvoir être facilement récupérées depuis une application.

On appelle ceci une "API" (Application Programming Interface) - nous allons construire un petit exemple pour récupérer des données dans une application React Native à partir d'une API

## Un exemple: les musées de Bruxelles

Imaginons que nous voulons fournir une application qui aide les gens à trouver des musées à Bruxelles.

La Région de Bruxelles dispose d'un portail d'Open Data ici: https://opendata.bruxelles.be

Quand vous avez besoin de récupérer des données fournies par un autre organisme, le premier objectif est d'identifier l'API dont vous avez besoin et comment l'utiliser.

## Trouver et explorer une API

- Essayons de trouver via le site l'API qui peut nous donner la liste des musées de Bruxelles
- Une fois l'URL identifiée, on peut la tester directement dans le navigateur
- Essayons d'identifier les champs dont nous avons besoins, par exemple le nom du musée et son addresse

## Test dans le navigateur

L'API étant "ouverte" (ie: elle ne nécessite pas de compte ou de mot de passe), on peut la tester directement dans le navigateur: https://opendata.bruxelles.be/api/records/1.0/search/?dataset=bruxelles_musees&q=

Le plus important est de comprendre la structure des résultats et où se trouve les informations qui nous intéressent.

```JavaScript
{
  "nhits": 8, 
  "parameters": 
    {
      "dataset": "bruxelles_musees", "timezone": "UTC", "rows": 10, "start": 0, "format": "json"
    }, 
    "records": [
      {
        "datasetid": "bruxelles_musees", 
        "recordid": "0fc2f771dcc807c1b7849827ef9f790973e63afb", 
        "fields": 
          {
            "code_postal": "1000", 
            "coordonnees_wgs84": [50.8458892, 4.3521363], 
            "adresse": "Rue de la Violette 12", 
            "description": "Mus\u00e9e Mode & Dentelle", 
            "lieu": "Bruxelles"
          }, 
          "geometry": 
          {
            "type": "Point", 
            "coordinates": [4.3521363, 50.8458892]
          }, 
          "record_timestamp": "2019-05-09T12:30:02.921000+00:00"
      }...
```

## Créer une nouvelle app avec Expo

```bash
  expo init -t blank musees 
  cd musees
```

## Récupérer des données en ligne

Voici un petit exemple de code pour récupérer les données de l'API
```JavaScript
const URL = "https://opendata.bruxelles.be/api/records/1.0/search/?dataset=bruxelles_musees&q="

export default function App() {
  const [musees, setMusees] = useState([]);
  async function fetchData() {
    let response = await fetch(URL);
    let data = await response.json();
    setMusees(data.records)
  }

  useEffect(() => {
    fetchData();
  }, [])

  // return, map sur musees, etc pour afficher les différents musées !
```

Essayons de le clarifier ligne par ligne

### Récupérer les données

```JavaScript
const URL = "https://opendata.bruxelles.be/api/records/1.0/search/?dataset=bruxelles_musees&q="
```

C'est l'URL que l'on va appeller. Par simplicité je l'ai mis dans une variable. `const` parce qu'aucune raison que cela ne change.

```JavaScript
const [musees, setMusees] = useState([]);
```

Le "useState" pour avoir un set variable et setter pour la liste de musées que l'on va récupérer.

```JavaScript
  async function fetchData() {
    let response = await fetch(URL);
    let data = await response.json();
    setMusees(data.records)
  }
```

Une fonction pour aller chercher les données. Celle-ci fait trois choses:

1. Récupérer les données depuis l'url avec `fetch`
1. Convertir les données reçue en un objet JavaScript via `.json()`
1. Stocker celui ci via le setter - comme l'API renvoie la liste dans un champs `records` c'est celui ci qui est stocké.

On remarque que la fonction commence par `async` et contient deux fois le mot clé `await`.

### Async et Await

Pas mal de fonctions "lentes" (au sens de l'ordinateur, donc à partir de 0.1 seconde ou 100ms) sont définies comme `asynchrones` en JavaScript (ou `async`) pour faire court. Cela veut dire que plutôt que de renvoyer le résultat, la fonction renvoie en fait une `Promise` (litéralement "une promesse de résultat"), puis laisse le programme continuer.

Quand le traitement est terminé, la `Promise` est remplacée par le résultat réel.

Ceci rend les programmes très efficients (rapides) - mais nécessite de gérer le fait qu'une variable peut ne pas contenir ce que l'on pense !

`fetch` et `respons.json()` font partie de ces méthodes - les setters générés via `useState` également !

Pour se simplifier la vie, il est possible de "forcer" JavaScript à attendre le résultat. C'est ce que fais le mot clé `await` mais attention - il ne peut lui même être utilisé que dans une fonction `async` !

D'où le fait que `fetchData` est défini avec ce mot clé.

## useEffect

Nous avons une fonction et le code dedans pour récupérer nos données. Reste à l'appeller. Bien que l'on puisse le faire directement dans le `return`, c'est en majorité une mauvaise idée - pourquoi ? React va redessiner les composants chaque fois que nécessaire - et donc réappeller la méthode. Hors, on veut éviter de retourner chercher les données à chaque fois (c'est lent, et dans certains cas on paie pour l'usage de l'API !).

La solution est ce petit morceau de code:

```JavaScript
  useEffect(() => {
    fetchData();
  }, [])
```

`useEffect` est un "hook" comme `useState` - une fonction fournie par React pour faciliter certains cas d'usage fréquent, dans ce cas ci: "Appeller la fonction `fetchData` mais seulement la première fois que le composant est dessiné".

`useEffect` prend deux paramètres - une fonction avec le traitement que l'on souhaite faire (ici juste appeler `fetchData`) et un second qui revient à faire "rappelle la fonction si une des valeurs dans ce tableau change). En passant un tableau vide, cela revient à dire "ne rappelle jamais" ce qui est exactement ce que l'on veut ici.

## Application complète

Avec les éléments plus haut, vous avez ce qu'il vous faut pour compléter l'application - une fois les données disponible dans une variable, peut importe comment elles sont arrivée (valeurs dans une constante ou via une API comme ici !).

