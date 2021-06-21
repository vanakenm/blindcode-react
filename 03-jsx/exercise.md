# Résultat de foot

## Objectif

Créer une application expo qui affiche des résultats de match de foot à partir d'un tableau de données. Un résultat est une ligne de texte avec:

    {Nom de l'équipe 1} {score de l'équipe 1} - {score de l'équipe 2} {nom de l'équipe 2}
    {nom du vainqueur ou "égalité"}

Par exemple

    Belgique 3 - 0 Russie
    Vainqueur: Belgique

    France 1 - 1 Finlande
    Egalité

Pour vous rassurer ma solution (import, styles & espaces compris) ne fait pas 50 lignes.

## Installation

Créer une nouvelle application expo dans un répértoire distinct

```bash
expo init -t blank euro2020
cd euro2020
code .
expo start --web
```

## Données

Dans App.js, créer un tableau avec les résultats de matchs de foot - à ajouter juste en dessous de App()
Les données sont donc un tableau qui contient des objets JavaScript avec pour chacun quatre informations:

- team1: Nom de l'équipe 1 (chaine de caractères)
- team2: Nom de l'équipe 2 (chaine de caractères)
- score1: Score de l'équipe 1 (entier)
- score1: Score de l'équipe 2 (entier)

```Javascript

let matches = [
    {team1: "Belgique", team2: "France", score1: 4, score2: 2},
    {team1: "Espagne", team2: "Belgique", score1: 1, score2: 2},
    {team1: "Allemagne", team2: "Estonie", score1: 2, score2: 2}
]
```

Côté syntaxe:

- On reconnait un tableau vu les crochets ouvrants et fermants
- Les éléments sont séparés par des virgules
- Chaque élément est repris entre des accolades - un objet JavaScript avec des propriété et leurs valeurs 

## Etapes

Le point important pour arriver au bout est d'y aller étape par étape, en testant aussi souvent que possible (donc avec le moins de modifications à chaque fois). En d'autres mots essayer d'avoir du code valide le plus souvent possible.

1. Créer un élément Text qui affiche ces données pour un match (sans utiliser de variable)
2. Créer un composant (donc une fonction) "Match" sans aucun paramètre, déplacer l'élément Text dedans
3. Utiliser ce composant Match dans App (toujours sans paramètre)
4. Ajouter deux paramètres à Match: team1 et team2 et passer des noms de pays
5. Récupérer et utiliser ces informations dans le composant Match (via les props)
6. Ajouter deux paramètres à Match: score1 et score2 et passer des score
7. Prendre le tableau matches et faire un .map dessus et passer les différent paramètres au composant Match. Ici la fonction map va passer sur tous les résultats, avec pour chaquun les quatre propriétés définies dans le tableau.
8. Créer dans match une variable "resultat" (chaine de caractère). Y assigner le pays gagnant ou "égalité" en comparant les scores (if/else if/else vu qu'il y a trois cas possible)

## Aller plus loin

Les points suivants sont des propositions d'amélioration. Aucun n'est hors de portée, mais ils peuvent demander un peu de recherche personnelle pour trouver comment s'y prendre.

### FlatList

Remplacer la boucle par une FlatList - voir https://docs.expo.io/versions/latest/react-native/flatlist/

### Récupérer les données

Utliser plus de données - j'ai un fichier plus complet avec les résultats (https://github.com/vanakenm/blindcode-react/blob/master/03-jsx/data.json):

- Plus de matchs
- Deux informations supplémentaires: la date et le groupe

1. Utilisez ces données à la place du petit tableau (juste le remplacer)
1. Créer un fichier data.json et l'importer plutôt que de créer un tableau directement.
1. Dans une situation réelle, ces résultats ne sont pas stockés dans l'application mais récupérés sur un serveur (une "API"). Pour simuler ceci, allez récupérer le fichier directement sur GitHub (https://raw.githubusercontent.com/vanakenm/blindcode-react/master/03-jsx/data.json) depuis l'application. Ceci nécessite d'utiliser la fonction "fetch" - voir https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch sur MDN pour comment faire.

### Données par groupe

Avec le fichier complet, modifier l'application pour afficher les résultats pour chaque groupe donc:

- Groupe A
  - Allemagne 0-1 France
  - France 1-1 Hongrie
...

- Groupe B

Les groupes peuvent être spécifié comme "headers" via https://reactnative.dev/docs/accessibility#accessibilityrole

Les groupes peuvent être créer comme étant leur propre composant "Group" qui contiendrait une liste de Matchs.

Il est possible de filtrer un tableau avec filter: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


### Statistiques par équipes

En dessous du tableau des matches, affichez les totaux de chaque équipe:

- Nombre de victoires et de défaites
- Score total (victoire = 3 points, défaite = 0 points, égalité = 1 point)
- Total des buts marqués
- Total des buts concédés





