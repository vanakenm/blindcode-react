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

## Revoir fetchData pour tenir en compte la page en cours

## Retour sur le deuxième paramètre de useEffect