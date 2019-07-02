/*
  Description :
  Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with one argument: value.
  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  The new filtered array.
*/
// Début de votre code
const filter = (arr, func) => {
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		let predicate = func(element);
		if (predicate === true) {
			newArray.push(element);
		}
	}
	return newArray;
};
// Fin de votre code
function isBigEnough(value) {
	if (value >= 10) {
		return true;
	}
	return false;
}
var filtered = filter([12, 5, 8, 130, 44], isBigEnough);
console.log(filtered); // Doit afficher `[12, 130, 44]`
