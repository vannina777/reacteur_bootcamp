const axios = require("axios");

let newArr = [];

axios
	.get("https://restcountries.eu/rest/v1/all")
	.then(response => {
		for (let i = 0; i < response.data.length; i++) {
			if (i + 2 === response.data.length) {
				console.log(`${response.data[i].name} et`);
			} else if (i + 1 !== response.data.length) {
				console.log(`${response.data[i].name},`);
			} else {
				console.log(`${response.data[i].name}`);
			}
		}
	})
	.catch(err => {
		console.log(err);
	});

console.log(newArr);
