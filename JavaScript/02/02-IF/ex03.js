/*
  Output :
  Accès refusé
*/

const checkAccess = password => {
  if (password === "azerty") {
    console.log("Accès autorisé");
  }
  // Début de votre code
  else {
    console.log("Accès refusé");
  }
  // Fin de votre code
};

checkAccess("qwerty");
