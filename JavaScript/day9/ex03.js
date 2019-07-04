/*
  Objectif :
  Utiliser plusieurs fois la fonction `console.log` pour afficher le résultat demandé.
  Exemple fictif :
  console.log(variable[0].room.list[2][1].description);
  console.log(variable[1].address);
  console.log(variable[1].room.title);
  console.log(variable[1].room.list[0][3]._id);

  Output :
  Eiffel Tower Luxury 90m², 2 Terraces
  58ff73d11765a998979a33a4
  https://a1.muscache.com/im/users/4654829/profile_pic/1410285266/original.jpg?aki_policy=profile_x_medium
  2.2841681
*/

const response = {
	data: {
		rooms: [
			{
				_id: "58ff73d11765a998979a3396",
				shortId: 5,
				title: "Eiffel Tower Luxury 90m², 2 Terraces",
				description:
					"This is a completely renovated flat, close to Eiffel Tower and the Seine river, meant to inspire a true Parisian experience. Elegant two bedrooms of about 90 sqm with 2 terraces and a private car park.",
				price: 219,
				ratingValue: 5,
				reviews: 84,
				loc: [2.2841681, 48.8498514],
				user: {
					account: {
						photos: [
							"https://a2.muscache.com/im/pictures/a137f243-fbe3-4806-9caa-3d7d1448f201.jpg?aki_policy=profile_x_medium"
						],
						favorites: ["58ff73d11765a998979a33a4", "58ff73d11765a998979a33ac"],
						rooms: ["58ff73d11765a998979a3396"],
						username: "Scheryan",
						description:
							"We love this wonderful city and we're pleased to be able to offer this apt so that you may enjoy it as well.\nOur wish is for you to feel very comfortable and get the most out of your stay.\nWelcome to Paris! Have a great time. Should you stay with us, we will do everything imaginable to facilitate your best stay possible, this is our promise to you. We have not yet had a guest who did not love the place."
					},
					_id: "58ff73cc1765a998979a3390"
				},
				city: {
					_id: "58ff73cc1765a998979a3391",
					source:
						"https://a0.muscache.com/airbnb/static/destinations/o-Paris_480x320.jpg",
					name: "Paris",
					slug: "paris",
					loc: [2.3325361, 48.8589507],
					zoom: 11
				}
			},
			{
				_id: "58ff73d11765a998979a3397",
				shortId: 2,
				title: "Logement entier - Gambetta, Paris",
				description:
					"Deux pièces à Gambetta. Une chambre et un salon avec cuisine ouverte. Salle de bain avec toilettes et baignoire. Plusieurs commerces tout au long de la rue.\nProche du cimetière Père Lachaise, de Belleville, et du Parc des Buttes Chaumont.\nTrès calme.",
				price: 120,
				ratingValue: 4,
				reviews: 5,
				loc: [2.3981123, 48.8613664],
				user: {
					account: {
						photos: [
							"https://a1.muscache.com/im/users/4654829/profile_pic/1410285266/original.jpg?aki_policy=profile_x_medium"
						],
						favorites: ["58ff73d11765a998979a339f", "58ff73d11765a998979a33a8"],
						rooms: ["58ff73d11765a998979a3397"],
						username: "Carine",
						description:
							"Adore les voyages, le cinéma, la musique, ...\nTrès sociable et ouverte d'esprit. J'adore apprendre de nouvelles choses, découvrir de nouvelles cultures, et de nouvelles personnes, ..."
					},
					_id: "58ff73cc1765a998979a338d"
				},
				city: {
					_id: "58ff73cc1765a998979a3391",
					source:
						"https://a0.muscache.com/airbnb/static/destinations/o-Paris_480x320.jpg",
					name: "Paris",
					slug: "paris",
					loc: [2.3325361, 48.8589507],
					zoom: 11
				}
			}
		]
	}
};

// Début de votre code
console.log(response.data.rooms[0].title);
console.log(response.data.rooms[0].user.account.favorites[0]);
console.log(response.data.rooms[1].user.account.photos[0]);
console.log(response.data.rooms[0].loc[0]);
// Fin de votre code
