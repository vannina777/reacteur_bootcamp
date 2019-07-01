/*
  Description :
  Deburrs string by converting letters to basic Latin letters.
  Arguments :
  1) The string to deburr.
  
  Returns :
  The deburred string.
*/
// Début de votre code

const deburr = string => {
  let newString = "";
  let map = {
    é: "e",
    è: "e",
    ê: "e",
    à: "a",
    ù: "u"
  };

  for (let i = 0; i < string.length; i++) {
    if (map[string.charAt(i)] != undefined) {
      newString += map[string.charAt(i)];
    } else {
      newString += string.charAt(i);
    }
  }

  return newString;
};
// Fin de votre code
console.log(deburr("déjà vu")); // Doit afficher `deja vu`
console.log(deburr("Juan José")); // Doit afficher `Juan Jose`
