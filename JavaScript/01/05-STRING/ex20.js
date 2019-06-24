/*
  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  Reacteur

  Aide :
  Faites preuve d'imagination et créez autant de variables que nécessaire pour obtenir le résultat demandé.
*/

const str = "rEACTEUR";

// Début de votre code
let result = "";

for (l of str) {
  if (l === l.toLowerCase()) {
    l = l.toUpperCase();
    result += l;
  } else {
    l = l.toLowerCase();
    result += l;
  }
}
// Fin de votre code

console.log(result); // Doit afficher `Reacteur` dans le terminal
