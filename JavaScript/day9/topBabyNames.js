const axios = require("axios");
const _ = require("lodash");

axios
	.get(
		"https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&rows=10000&sort=nombre&refine.annee=2018"
	)
	.then(response => {
		let newArr = [];
		for (let i = 0; i < response.data.records.length; i++) {
			let name = response.data.records[i].fields.prenoms;
			let occ = response.data.records[i].fields.nombre;
			newArr.push([name, occ]);
		}
		top10 = newArr.sort(function(a, b) {
			return b[1] - a[1];
		});
		console.log(top10.slice(0, 10));
	})
	.catch(err => console.log(err));
