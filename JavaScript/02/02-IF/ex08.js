/*
  Output :
  Si le produit coûte au moins 100€ OU qu'il est de bonne qualité
*/

const price = 50;
let quality = false;

// Début de votre code
quality = true;
// Fin de votre code

// L'opérateur && (ET) permet de vérifier plusieurs conditions
if (price >= 100 || quality !== false) {
  console.log(
    "Si le produit coûte au moins 100€ OU qu'il est de bonne qualité"
  );
} else {
  console.log("Dans tous les autres cas");
}
