const palindrome = string => {
  let stringLower = string.toLowerCase().replace(/\s/g, "");
  let reversedString = [];

  for (letter of stringLower) {
    reversedString.unshift(letter);
  }

  reversedString = reversedString.join("");

  if (reversedString === stringLower) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("un bon snob nu"));
console.log(palindrome("Aromate et Amora"));
