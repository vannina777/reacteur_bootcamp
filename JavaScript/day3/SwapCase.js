let arg = process.argv;
let elements = arg.slice(2);
let element = elements[0];
let result = "";
let display = true;

try {
  if (elements.length > 1) {
    throw "There is a problem with your argument";
  }
  if (arg.length < 3) {
    throw "You didn't pass any argument";
  }
} catch (err) {
  console.log(err);
  display = false;
}

const transform = element => {
  for (let letter of element) {
    if (letter === letter.toLowerCase()) {
      let newLetter = letter.toUpperCase();
      result += newLetter;
    } else if (letter === " ") {
      result += letter;
    } else {
      let newLetter = letter.toLowerCase();
      result += newLetter;
    }
  }
  return result;
};
if (display === true) {
  console.log(transform(element));
}
