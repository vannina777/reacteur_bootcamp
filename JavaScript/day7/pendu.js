var words = require("./words.json");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

// essential global variables
let tries = 0;
let selectedWord = "";
let hiddenWord = "";

// le pendu
const steps = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
const setSign = [" ", "|", "|", "\\", "_", "_", "_", "o", "|", "/", "\\"]; // change constructor

const construct_pendu = tryIndex => {
	steps[tryIndex] = setSign[tryIndex];
	let pendu = [
		[`   ${steps[6]}${steps[5]}${steps[4]} `],
		[`   ${steps[7]}  ${steps[3]}`],
		[`   ${steps[8]}  ${steps[2]}`],
		[`  ${steps[9]} ${steps[10]} ${steps[1]}`],
		[`-------`]
	];
	console.log(pendu.join("\n"));
};

/* FUNNCTIONS  */

// random + >4 letter + majuscule and accent stripping
const get_word = () => {
	let sup4 = false;
	while (sup4 === false) {
		let random_index = Math.floor(Math.random() * 100) - 1;
		selectedWord = words[random_index].label;
		if (selectedWord.length >= 4) {
			sup4 = true;
		}
	}
	selectedWord = selectedWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	selectedWord = selectedWord.toUpperCase();
	hiddenWord = "*".repeat(selectedWord.length);
	/* console.log(selectedWord);
	console.log(hiddenWord); */
};

// checks word and replaces * in hiddenWord displayed
const check_letter = input => {
	let inputFormatted = input.trim().toUpperCase();
	tries += 1;
	hiddenWord = hiddenWord.split("");

	for (let i = 0; i < selectedWord.length; i++) {
		if (inputFormatted === selectedWord[i]) {
			hiddenWord[i] = inputFormatted;
		}
	}
	hiddenWord = hiddenWord.join("");

	if (hiddenWord.indexOf("*") === -1) {
		console.log(
			`Bravo, tu as gagné ! Le mot secret était bien : ${hiddenWord}`
		);

		rl.close();
	} else if (tries === 10) {
		construct_pendu(tries);
		console.log("Looser ...");
		rl.close();
	} else {
		construct_pendu(tries);
		new_try();
	}
};
 //prompt user for input
const new_try = () => {
	console.log("\n");
	console.log(`Il vous reste ${10 - tries} coups à jouer`);
	console.log(`Quel est le mot secret ? ${hiddenWord}`);
	rl.question("Proposez une lettre : ", check_letter);
};

<<<<<<< HEAD
/* INITIALIZE */

=======
// check player input
>>>>>>> dcb4fbbacb0effdbbbf30e2370ceb096ccdb0c03
get_word();
new_try();
