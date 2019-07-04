const axios = require("axios");

let amount = process.argv[2];
let from = process.argv[3];
let to = process.argv[4];

const key = "2949a4d694b340af4ee498d7a5fe655e";

const convert = response => {};

axios
	.get(
		`http://data.fixer.io/api/latest?access_key=2949a4d694b340af4ee498d7a5fe655e&format=1`
	)
	.then(response => {
		let fromRate = response.data.rates[from.toUpperCase()];
		let toRate = response.data.rates[to.toUpperCase()];
		let appliedRate = toRate / fromRate;
		let conversion = amount * appliedRate;

		console.log(
			`${amount} ${from.toUpperCase()} > ${conversion} ${to.toUpperCase()} (taux de change appliqué : ${appliedRate})`
		);
	})
	.catch(err => {
		console.log(err);
	});
