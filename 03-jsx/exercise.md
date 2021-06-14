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

## Installation

Créer une nouvelle application expo dans un répértoire distinct

```bash
expo init -t blank euro2020
cd euro2020
```

## Données

Dans App.js, créer un tableau avec les résultats de matchs de foot - à ajouter juste en dessous de App()
Les données sont donc un tableau qui contient des objects javascripts avec pour chacun quatre informations:

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
4. Ajouter deux paramètres à Match: score1 et score2 et passer des score
5. Prendre le tableau matches et faire un .map dessus et passer les différent paramètres au composant Match. Ici la fonction map va passer sur tous les résultats, avec pour chaquun les quatre propriétés définies dans le tableau.
6. Créer dans match une variable "resultat" (chaine de caractère). Y assigner le pays gagnant ou "égalité" en comparant les scores (if/else if/else vu qu'il y a trois cas possible)




