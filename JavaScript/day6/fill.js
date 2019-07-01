/*
  Description :
  Fills elements of array with value.
  Arguments :
  1) The array to fill.
  2) The value to fill array with.
  Returns :
  The filled array.
*/
// Début de votre code
const fill = (array, string) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(string);
  }
  return newArray;
};
// Fin de votre code
console.log(fill([1, 2, 3], "a")); // Doit afficher `['a', 'a', 'a']`
