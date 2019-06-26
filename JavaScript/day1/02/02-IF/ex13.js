/*
  Output :
  Le mot de passe est manquant
  Le mot de passe est valide
  Le mot de passe est trop court
*/

const checkPassword = password => {
  if (password === undefined) {
    console.log("Le mot de passe est manquant");
  } else {
    // Notez que vous pouvez intégrer une instruction `if` à l'intérieur d'un bloc `if` ou d'un bloc `else`
    // Début de votre code
    if (password.length >= 6) {
      console.log("Le mot de passe est valide");
    } else {
      console.log("Le mot de passe est trop court");
    }
    // Fin de votre code
  }
};

checkPassword();
checkPassword("azerty");
checkPassword("azert");
