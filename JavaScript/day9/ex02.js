/*
  Objectif :
  Utiliser la fonction `console.log` pour afficher le résultat demandé.
  Exemple fictif : console.log(variable[0].room.list[2][1].description);

  Output :
  1999
*/

const data = {
	title: "The Basics - Networking",
	description: "Your app fetched this from a remote endpoint!",
	movies: [
		{
			id: "1",
			title: "Star Wars",
			releaseYear: "1977"
		},
		{
			id: "2",
			title: "Back to the Future",
			releaseYear: "1985"
		},
		{
			id: "3",
			title: "The Matrix",
			releaseYear: "1999"
		},
		{
			id: "4",
			title: "Inception",
			releaseYear: "2010"
		},
		{
			id: "5",
			title: "Interstellar",
			releaseYear: "2014"
		}
	]
};

// Début de votre code
console.log(data.movies[2].releaseYear);
// Fin de votre code
