/*
  Description :
  Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with one argument: value.
  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
*/
const forEach = (arr, func) => {
	// Début de votre code
	for (let i = 0; i < arr.length; i++) {
		let value = arr[i];
		func(value);
	}
	// Fin de votre code
};
forEach([1, 2], value => {
	console.log(value);
});
// Doit afficher `1` puis `2`
