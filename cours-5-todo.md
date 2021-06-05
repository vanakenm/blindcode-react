# Une application

Nous allons progressivement construire une petite application de gestion de tâches ce qui va nous permettre de couvrir pas mal de sujets:

- Composants
- state & props
- Listes
- Afficher, éditer, supprimer
- Sauvegarde de l'état dans le "Storage"

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