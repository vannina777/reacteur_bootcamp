const reverseString = string => {
  let len = string.length;
  let counter = len - 1;
  let result = [];

  for (letter of string) {
    result.unshift(letter);
  }
  result = result.join("");
  console.log(result);
};

reverseString("LeReacteur");
reverseString("I Love Code");
reverseString("Hello World and Coders");
