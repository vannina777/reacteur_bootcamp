const steps = ["", "", "", "", "", "", "", "", "", ""];
const setSign = ["|", "\\", "_", "_", "_", "o", "|", "/", "\\"];

const pendu = [
	[`   ${steps[5]}${steps[4]}${steps[3]} `],
	[`   ${steps[6]}  ${steps[2]}`],
	[`   ${steps[7]}  ${steps[1]}`],
	[`  ${steps[8]} ${steps[9]} |`],
	[`-------`]
];

const construct_pendu = try => {
	steps[tries] = setSign[tries];
	console.log(pendu);
};

console.log(pendu.join("\n"));
