/*
  L'objectif de cet exercice est d'afficher les 3 lignes de 5 caractères suivantes :
  -----
  -----
  -----
*/

const height = 5;
const width = 5;

for (let i = 0; i < height; i++) {
  let line = "";
  for (let j = 0; j < width; j++) {
    line += "-";
  }
  console.log(line);
}
