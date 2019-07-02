/*
  Description :
  Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (collection, value).
  Arguments :
  1) The collection to inspect.
  
  Returns :
  The matched element, else undefined.
*/
// Début de votre code
const find = (objCible, conditions) => {
	let conditionKeys = Object.keys(conditions);
	let conditionElements = Object.values(conditions);
	console.log(conditionKeys);
	let indexOfTruthy = 0;

	for (let i = 0; i < objCible.length; i++) {
		if (
			objCible[i][conditionKeys[0]] === conditionElements[0] &&
			objCible[i][conditionKeys[1]] === conditionElements[1]
		) {
			indexOfTruthy = i;
		}
	}
	return objCible[indexOfTruthy];
};

// Fin de votre code
const users = [
	{ firstName: "John", lastName: "Doe", age: 28, gender: "male" },
	{ firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
	{ firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
	{ firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];
console.log(find(users, { lastName: "Doe", gender: "male" })); // Doit afficher `{ firstName: "John", lastName: "Doe", age: 28, gender: "male" }`
