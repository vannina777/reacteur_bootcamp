let alphaRef = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const alphabetSoup = string => {
  let sortedWord = [];
  for (let letter of string) {
    if (sortedWord.length === 0) {
      sortedWord.push(letter);
    } else {
      let lastIndex = sortedWord.length - 1;
      let counter = lastIndex;

      for (counter; counter >= -1; counter--) {
        if (counter === -1) {
          sortedWord.unshift(letter);
        } else {
          let counterAlphaIndex = alphaRef.indexOf(sortedWord[counter]);
          let letterAlphaIndex = alphaRef.indexOf(letter);

          if (counterAlphaIndex <= letterAlphaIndex) {
            sortedWord.splice(counter + 1, 0, letter);
            break;
          }
        }
      }
    }
  }
  return sortedWord;
};

console.log(alphabetSoup("hello"));
console.log(alphabetSoup("dcba"));
