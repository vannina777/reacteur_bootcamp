const elements = process.argv.slice(2);
let numbers = [parseInt(elements[0]), parseInt(elements[2])];
let operator = elements[1];
let result = 0;
let display = true;

try {
  if (elements.length > 3) {
    throw "Too many arguments";
  }
  if (elements.length < 3) {
    throw "Too few arguments";
  }
  if (Number.isInteger(numbers[0]) === false || Number.isInteger(numbers[1])) {
    throw "There is a float in the lot ...";
  }
} catch (err) {
  console.log(err);
  display = false;
}

if (operator == "+") {
  result = numbers[0] + numbers[1];
} else if (operator === "-") {
  result = numbers[0] - numbers[1];
} else if (operator === "*") {
  result = numbers[0] * numbers[1];
} else if (operator === "/") {
  result = numbers[0] / numbers[1];
}
if (display === true) {
  console.log(result);
}
