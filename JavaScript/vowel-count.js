const vowel = ["a", "e", "i", "o", "u", "y"];

const vowelCount = string => {
  let vowelNum = 0;
  for (let letter of string) {
    for (let i of vowel) {
      if (letter === i) {
        vowelNum += 1;
      }
    }
  }
  return vowelNum;
};

console.log(vowelCount("hello"));
console.log(vowelCount("aaaa"));
console.log(vowelCount("aaab"));
