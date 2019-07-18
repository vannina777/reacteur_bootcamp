const axios = require("axios");

const action = process.argv[2]; // check or book (define method)
const selectedDate = process.argv[3]; // selected date OR reservation number
const selectedSlot = process.argv[4]; // selected slot
const clientName = process.argv[5]; // name of the client

let url = `http://localhost:3000/visits?date=${selectedDate}`;

if (action === "check") {
	console.log("GET Method on " + url);
	axios
		.get(url)
		.then(response => {
			console.log(response.data);
		})
		.catch(err => {
			console.log(err.response.data);
		});
} else if (action === "book") {
	url += `&slot=${selectedSlot}&name=${clientName}`;
	console.log("POST Method on " + url);
	axios
		.post(url) // object with body args
		.then(response => {
			console.log(response.data);
		})
		.catch(err => {
			console.log(err.response.data);
		});
} else if (action === "cancel") {
	url = `http://localhost:3000/cancel?key=${selectedDate}`;
	axios
		.post(url)
		.then(response => {
			console.log(response.data);
		})
		.catch(err => {
			console.log(err.response.data);
		});
} else {
	console.log("You did not enter any correct command, try again");
}
