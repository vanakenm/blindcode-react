# Paginer et recherche

Nous avons une page qui montre des données venant d'une API externe (voir corrigé [ici](https://github.com/vanakenm/blindcode-api-musees)) - mais cette page est statique alors que l'API permet toute sorte de manipulations.

Nous allons nous concentrer sur deux:

- Pagination
- Recherche (par exemple sur le nom)

## Un jeu de donnée plus complet

Le jeu de données que nous avons utilisé jusqu'ici (musees-a-bruxelles) ne contient que 8 musées, donc est insuffisante pour pouvoir parler de pagination. Nous pouvons faire deux simple changements dans l'application (déjà fait dans ma "solution") pour pouvoir utiliser le jeu de donnée "museums-in-brussels" qui est plus complet (45 musées sur le territoire de la région bruxelloise, par rapport à 8 sur la ville de Bruxelles).

Changer l'url:

```JavaScript
// const URL = "https://opendata.bruxelles.be/api/records/1.0/search/?dataset=musees-a-bruxelles&q="
const URL = "https://opendata.bruxelles.be/api/records/1.0/search/?dataset=museums-in-brussels&q="
```

On voit ici l'aventage d'avoir tous les jeux de données au même endroit avec la même structure - il est très facile de passer de l'un à l'autre

Changer le nom du champs à afficher:

```JavaScript
<Text key={musee.recordid}>{musee.fields.nom_du_musee}</Text>
```

au lieu de :

```JavaScript
<Text key={musee.recordid}>{musee.fields.description}</Text>
```

Le jeu de donnée de la région place le nom du musée dans `nom_du_musee` plutôt que `description`.

## Afficher les données de pagination

On l'a vu, l'API renvoie autre chose que la liste de record - le JSON commence par quelque chose comme:

```Json
"nhits":45,
"parameters":{

    "dataset":"musees-a-bruxelles",
    "timezone":"UTC",
    "rows":10,
    "start":0,
    "format":"json"

}
```

Donc: 

- nhits: Le nombre total de records disponibles
- rows: Le nombre de records renvoyé
- start: Le record de début pour cette requête

Modifier "start" va nous permettre de *paginer* - ie de demander successivement des pages de 10 résultats.

On peut donc afficher un petit encart avec ces différentes informations, par exemple:

"Vous visionnez la page 1 sur 5 disponibles (45 musées)"

Le nombre total vient directement de nhits, la page actuelle et totale peuvent se calculer:

- Nombre de pages = nhits/10 (arrondi au supérieur) - [Math.ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
- Page actuelle = commence à 1

Pour se faciliter les choses on peut créer les états nécessaires via `useState`:

```JavaScript
const [totalResults, setTotalResults] = useState(null);
const [currentPage, setCurrentPage] = useState(1);
```

Pas besoin d'état pour "totalPages" vu que c'est une simple division.

Il faut évidemment appeler les setters dans fetchData (comme on le fait déjà pour les records).

## Créer des boutons pour aller vers la page suivante ou précédente

On va créer deux boutons permettant d'aller chercher les résultats suivants:

- Précédent: A afficher sauf si l'on est à la première page
- Suivant: A afficher sauf si l'on est à la dernière page

On peut utiliser de simples `<Button>` pour ceci.

```JavaScript
<Button disabled={currentPage === 1} title="Précédent" />
<Button disabled={currentPage === totalPages} title="Suivant" />
```

L'action des boutons est assez simple - ils vont simplement modifier la valeur de "current page":

```JavaScript
<Button disabled={currentPage === 1} title="Précédent" onPress={() => setCurrentPage(currentPage - 1 )}/>
<Button disabled={currentPage === totalPages} title="Suivant" onPress={() => setCurrentPage(currentPage + 1 )}/>
```

Ceci fonctionne - mais n'a aucun impact sur les résultats affichés:

- On ne rappelle pas le fetch
- L'URL utilisée jusqu'à présent est fixe donc on va toujours récupérer les 10 mêmes premiers résultats

## Revoir fetchData pour tenir en compte la page en cours

C'est ici que la méthode "buildPaginatedUrl" devient nécessaire:

```JavaScript
  function buildPaginatedUrl(page) {
    return URL + "&start=" + ((page-1) * 10)
  }
```

Elle permet de construire une url qui va ramener non pas les dix premiers résultats mais les dix premiers *après la valeur de start fournie*.

Donc si on envoie `start=0` on aura les dix premiers (techniquement les résultats 0 à 9), avec `start=10` ceux de 10 à 19, etc.

Dans fetchData on va remplacer `URL` par `buildPaginatedUrl(currentPage)` dans le `fetch`:

```JavaScript
 async function fetchData() {
    let response = await fetch(buildPaginatedUrl(currentPage));
    let data = await response.json();
    setMusees(data.records)
    setTotalResults(data.nhits)
  }
```

Nous avons:

- Des boutons pour changer la page courante
- Un appel dans fetchData qui prend la page en compte pour récupérer les bons résultats

Ne reste une seule chose à faire - s'assurer de rappeller "fetchData" quand on change de page.

## Retour sur le deuxième paramètre de useEffect

Dans useEffect nous avons ceci:

```JavaScript
 useEffect(() => {
    fetchData();
  }, [])
```

Rappel: useEffect prend deux paramètres - une fonction à appeller et un tableau (jusqu'ici vide).

Il est temps de s'en servir. Le tableau est utilisé par useEffect pour savoir quand il faut rappeller la fonction fournie en premier paramètre.

En d'autres mots - la fonction sera appellée à chaque fois qu'une des variables passée au tableau change de valeur. Dans notre cas:

```JavaScript
 useEffect(() => {
    fetchData();
  }, [currentPage])
```

Avec ceci nous avons le cycle complet:

- currentPage est initialisé à 1
- le premier appel est fait pour les 10 premières valeurs
- quand l'utilisateur clique sur un bouton la valeur de currentPage change...
- ... ce qui rappelle automatiquement la fonction fournie à useEffect

