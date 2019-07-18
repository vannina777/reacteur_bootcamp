const axios = require("axios");

const getFiveFavMovies = arr => {
	for (let i = 0; i < arr.length; i++) {
		axios
			.get(`http://www.omdbapi.com/?t=${arr[i]}&apikey=1cb49d09`)
			.then(response => {
				console.log(response.data.Title);
			})
			.catch(err => {
				console.log(err);
			});
	}
};

getFiveFavMovies(["inception", "interstellar", "tootsie", "matrix", "john"]);
