/*
  Description :
  Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with one argument: value.
  
  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  The new mapped array.
*/
// Début de votre code
const map = (arr, func) => {
	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		let newElement = func(arr[i]);
		newArray.push(newElement);
	}
	return newArray;
};
// Fin de votre code
const array = map([1, 2, 3], value => {
	return value * 2;
});
console.log(array); // Doit afficher `[2, 4, 6]`
