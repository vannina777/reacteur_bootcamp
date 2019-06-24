/*
  Output :
  Accès autorisé
*/

const checkAccess = password => {
  if (password === "azerty") {
    console.log("Accès autorisé");
  } else {
    console.log("Accès refusé");
  }
};

// Début de votre code
let password = "azerty";
checkAccess(password);
// Fin de votre code
