let colors = require("colors");
let readline = require("readline"); // pour avoir accès au module `readline`
var player = require("play-sound")((opts = {}));

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // précise l'interface d'entrée et l'interface de sortie. stdin et stdout représentent le terminal qui exécute le programme.

// variable initialization
const word = "cadeau".toUpperCase();
const input1 = "pllee";
const input2 = "pecce";
const triesArray = [];

let tries = 6;
let loose = false;

let inputTry = "";
let wordHidden = "";

// anonymise the word
const get_word = word => {
  for (let i = 0; i < word.length; i++) {
    i === 0 ? (wordHidden += word.charAt(i)) : (wordHidden += "*");
  }
};

const updateHidden = i => {
  let hiddenArray = wordHidden.split("");
  hiddenArray[i] = word[i];
  wordHidden = hiddenArray.join("");
};

// main loop
const new_try = () => {
  console.log(`Le mot mystère: ${wordHidden}`);
  if (tries > 0) {
    console.log("\n");
    console.log(`Il ne vous reste plus que ${tries} essai(s).`);
  }
  console.log("\n");
  rl.question("Entrez un mot à x lettres: ".grey, input => {
    let trimmedInput = input.trim().toUpperCase();
    // win case
    if (trimmedInput === word) {
      console.log("\n");
      console.log(`Le mot mystère: ${wordHidden}`);
      console.log("\n");
      console.log(triesArray.join("\n"));
      console.log(trimmedInput.red);
      console.log("\n");
      console.log("You WON!");
      rl.close();
    }
    // elimination case
    else if (
      trimmedInput.length > word.length ||
      trimmedInput.length < word.length
    ) {
      console.log("\n");
      console.log("Are you stupid ? \nYou are eliminated !");
      rl.close();
    }
    // try again loop
    else {
      console.log("\n");
      check_word(trimmedInput);
    }
  });
};

// checks input & displays accuracy
const check_word = input => {
  for (let i = 0; i < input.length; i++) {
    if (word[i] === input[i]) {
      // ✅
      inputTry += input.charAt(i).red;
      updateHidden(i);
    } else if (word[i] != input[i] && word.includes(input[i])) {
      // Letter OK but place NOT OK
      inputTry += input.charAt(i).yellow;
    } else {
      // Letter NOT OK
      inputTry += input.charAt(i);
    }
  }

  triesArray.push(inputTry);
  console.log(triesArray.join("\n"));
  console.log("\n");
  inputTry = "";
  tries -= 1;
  if (tries === 0) {
    console.log("You LOST");
    rl.close();
  } else if (input != word) {
    new_try();
  }
};
console.log("\n");
console.log(` /$$      /$$  /$$$$$$  /$$$$$$$$ /$$   /$$  /$$$$$$ 
| $$$    /$$$ /$$__  $$|__  $$__/| $$  | $$ /$$__  $$
| $$$$  /$$$$| $$  \\ $$   | $$   | $$  | $$| $$  \\__/
| $$ $$/$$ $$| $$  | $$   | $$   | $$  | $$|  $$$$$$ 
| $$  $$$| $$| $$  | $$   | $$   | $$  | $$ \\____  $$
| $$\\  $ | $$| $$  | $$   | $$   | $$  | $$ /$$  \\ $$
| $$ \\/  | $$|  $$$$$$/   | $$   |  $$$$$$/|  $$$$$$/
|__/     |__/ \\______/    |__/    \\______/  \\______/ `);
console.log("\n");

get_word(word);

new_try();
