/*
  Objectif :
  En utilisant une boucle affichez le résultat suivant :
  France, Japon, Colombie, Canada et Italie
*/

const countries = [
	{ name: "France" },
	{ name: "Japon" },
	{ name: "Colombie" },
	{ name: "Canada" },
	{ name: "Italie" }
];

// Début de votre code
for (let i = 0; i < countries.length; i++) {
	console.log(countries[i].name);
}
// Fin de votre code
