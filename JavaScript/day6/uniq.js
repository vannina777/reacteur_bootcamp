/*
  Description :
  Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.
  Arguments :
  1) The array to inspect.
  
  Returns :
  The new duplicate free array.
*/
// Début de votre code
const uniq = array => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.includes(array[i]) === true) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
// Fin de votre code
console.log(uniq([2, 1, 2])); // Doit afficher `[2, 1]`
