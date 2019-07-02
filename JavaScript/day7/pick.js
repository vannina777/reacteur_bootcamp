/*
  Description :
  Creates an object composed of the picked object properties.
  Arguments :
  1) The source object.
  2) The property paths to pick.
  Returns :
  The new object.
*/
// Début de votre code
const pick = (objCible, keyCibles) => {
	let objKeys = Object.keys(objCible);
	let pickedObj = {};
	for (let i = 0; i < objKeys.length; i++) {
		if (keyCibles.includes(objKeys[i])) {
			pickedObj[objKeys[i]] = objCible[objKeys[i]];
		}
	}
	return pickedObj;
};
// Fin de votre code
console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])); // Doit afficher { 'a': 1, 'c': 3 }
