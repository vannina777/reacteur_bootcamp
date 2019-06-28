/*
  L'objectif de cet exercice est d'afficher "o---o" un certain nombre de fois :
  Exemple 1 : "node ex05.js 4"
  o---o
  o---o
  o---o
  o---o


  Exemple 2 : "node ex05.js 2"
  o---o
  o---o
*/

const numberOfLinesString = process.argv[2];
const numberOfLinesNumber = Number(numberOfLinesString);

// Début de votre code
for (let i = 0; i < numberOfLinesNumber; i++) {
  console.log("o--o");
}
// Fin de votre code
