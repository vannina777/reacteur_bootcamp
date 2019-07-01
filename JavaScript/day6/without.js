/*
  Description :
  Creates an array excluding all given values.
  Arguments :
  1) The array to inspect.
  2) The values to exclude.
  Returns :
  The new array of filtered values.
*/
// Début de votre code
const without = (array, exclude) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (exclude.includes(array[i])) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
// Fin de votre code
console.log(without([2, 1, 2, 3], [1, 2])); // Doit afficher `[3]`
