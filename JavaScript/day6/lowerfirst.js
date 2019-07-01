/*
  Description :
  Converts the first character of string to lower case.
  Arguments :
  1) The string to convert.
  Returns :
  The converted string.
*/
// Début de votre code
const lowerFirst = string => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (i === 0) {
      newString += string.charAt(i).toLowerCase();
    } else {
      newString += string.charAt(i);
    }
  }

  return newString;
};
// Fin de votre code
console.log(lowerFirst("Fred")); // Doit afficher `fred`
console.log(lowerFirst("FRED")); // Doit afficher `fRED`
