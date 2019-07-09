const axios = require("axios");

// AXIOS.GET is asynchronous
// form of paralelism

/* CLASSIC */
/* axios
	.get("https://facebook.github.io/react-native/movies.json")
	.then(response => {
		console.log(2);
		console.log(response.data);
	})
	.catch(err => {
		console.log(err);
	});

console.log(1); */

/* WITH ASYNC AWAIT */

// exectue asynchronous function
const func = async () => {
	// try catch pour gérer les erreurs des fonctions asynchrones
	try {
		//call this function and do nothing at the same time IN THE BLOCK
		const response = await axios.get(
			"https://facebook.github.io/react-native/movies.json"
		);
		console.log(response.data);
	} catch (error) {
		console.log(error.message);
	}
};

func();
