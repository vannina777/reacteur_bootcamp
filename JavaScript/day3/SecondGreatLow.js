let myArg = process.argv;
let numbers = myArg.slice(2);
let highestNumber = 0;
let secondHighestNumber = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = parseInt(numbers[i]);
  let x = numbers[i];
  if (x > highestNumber) {
    secondHighestNumber = highestNumber;
    highestNumber = x;
  } else if (x > secondHighestNumber) {
    secondHighestNumber = x;
  }
}

let result = [highestNumber, secondHighestNumber];

console.log(result);
