/*
  Objectif :
  En utilisant l'une des fonctions `Math` documentées sur https://www.w3schools.com/js/js_math.asp, affichez un résultat aléatoire et compris entre 5 et 10 (inclus).
*/

let result;
const min = 5;
const max = 10;

// Début de votre code
result = Math.floor(Math.random() * 10) + 5;
// Fin de votre code

console.log(result); // Doit afficher une valeur aléatoire comprise entre 5 et 10 (inclus) à chaque exécution du script
