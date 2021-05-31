// Pseudo code

// 1. Définir une variable et lui assigner les valeurs
// 2. Créer une fonction prenant un paramètres "points"
// 3. Dans la fonction créer une variable "total" initialisée à 0
// 4. Dasn la function créer une boucle qui itère sur le tableau
// 5. Dans la boucle récupérer l'élément du tableau et l'ajouter à "total"
// 6. Hors de la boucle - retourner total
// 7. Hors de la fonction - appeler la fonction avec la variable créer en un et stocker le résult dans une variable
// 8. Afficher le résultat

// Variable de test
let cotes = [18, 16, 12]

// Avec function et un simple for
function somme(points) {
  let total = 0
  for(let i = 0;i < points.length; i++) {
    total += points[i]
  }
  return total
}

let res = somme(cotes)
console.log(res)

// Même exemple avec avec une fonction "flèche"
const sommefleche = (points) => {
  let total = 0
  for(let i = 0;i < points.length; i++) {
    total += points[i]
  }
  return total
}

console.log(sommefleche(cotes))

// Même exemple mais en utilisant un "foreach" plutôt qu'un "for"
const sommeflecheforeach = (points) => {
  let total = 0
  points.forEach(p => total += p)
  return total
}
console.log(sommeflecheforeach(cotes))

// Un dernier pour la route - les motivés peuvent aller voir la documentation pour comprendre pourquoi cela marche
const sommereduce = (points) => {
  return points.reduce((total, current) => total + current);
}
console.log(sommereduce(cotes))