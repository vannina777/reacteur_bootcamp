/*
  Output :
  undefined
  Vous avez oublié de renseigner le mot de passe
*/

const checkPassword = password => {
  console.log(password); // Affichera `undefined` car l'appel à la fonction `checkPassword` n'a pas transmis de valeur

  if (password === undefined) {
    // Début de votre code
    console.log("Vous avez oublié de renseigner le mot de passe");
    // Fin de votre code
  }
};

checkPassword();
