const axios = require("axios");

let action = process.argv[2];
let date = process.argv[3];

// if booking

let seats = process.argv[4];
let category = process.argv[5];

url = `http://localhost:3000/${action}?date=${date}`;

if (action === "book") {
	url += `&seats=${seats}&category=${category}`;
}
console.log(url);
axios
	.get(url)
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.log(`${err.response.status} : ${err.response.data.error}`);
	});
