/*
  Description :
  Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with one argument: value.
  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  Returns true if all elements pass the predicate check, else false.
*/
// Début de votre code
const every = (arr, func) => {
	for (let i = 0; i < arr.length; i++) {
		let value = arr[i];
		state = func(value);
		if (state === false) {
			return false;
		}
	}
	return true;
};
// Fin de votre code
const isLargerThanTen = element => {
	if (element >= 10) {
		return true;
	} else {
		return false;
	}
};
console.log(every([10, 20, 30], isLargerThanTen)); // Doit afficher `true`
console.log(every([10, 8, 20], isLargerThanTen)); // Doit afficher `false`
