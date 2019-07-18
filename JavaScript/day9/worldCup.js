const axios = require("axios");
const _ = require("lodash");

const bestGoalers = response => {
	let goalers = {};
	for (let i = 0; i < response.data.rounds.length; i++) {
		for (let j = 0; j < response.data.rounds[i].matches.length; j++) {
			if (response.data.rounds[i].matches[j].goals1 !== undefined) {
				for (
					let k = 0;
					k < response.data.rounds[i].matches[j].goals1.length;
					k++
				) {
					if (
						goalers[response.data.rounds[i].matches[j].goals1[k].name] ===
						undefined
					) {
						goalers[response.data.rounds[i].matches[j].goals1[k].name] = 1;
					} else {
						goalers[response.data.rounds[i].matches[j].goals1[k].name] += 1;
					}
				}
			}
			if (response.data.rounds[i].matches[j].goals2 !== undefined) {
				for (k = 0; k < response.data.rounds[i].matches[j].goals2.length; k++) {
					if (
						goalers[response.data.rounds[i].matches[j].goals2[k].name] ===
						undefined
					) {
						goalers[response.data.rounds[i].matches[j].goals2[k].name] = 1;
					} else {
						goalers[response.data.rounds[i].matches[j].goals2[k].name] += 1;
					}
				}
			}
		}
	}
	//console.log(goalers);

	let top10 = [];

	for (let goaler in goalers) {
		top10.push([goaler, goalers[goaler]]);
	}
	top10 = top10.sort(function(a, b) {
		return b[1] - a[1];
	});
	console.log(top10.slice(0, 10));
};

const calendar = response => {
	for (let i = 0; i < response.data.rounds.length; i++) {
		console.log("\n\n");
		console.log(response.data.rounds[i].name);
		for (let j = 0; j < response.data.rounds[i].matches.length; j++) {
			console.log(
				`\n${response.data.rounds[i].matches[j].team1.name} vs ${
					response.data.rounds[i].matches[j].team2.name
				}`
			);
			console.log(
				`${response.data.rounds[i].matches[j].score1} vs ${
					response.data.rounds[i].matches[j].score2
				}`
			);
		}
	}
};

axios
	.get(
		"https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
	)
	.then(bestGoalers)
	.catch(err => console.log(err));
