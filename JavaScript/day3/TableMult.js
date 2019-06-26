let myArg = process.argv;
let elements = myArg.slice(2);
let x = elements[0];

let counter = 1;
let limit = 10;

let display = true;

try {
  if (myArg.length < 1) {
    throw "No arguments";
  }

  if (typeof x === "string") {
    throw "This is a string, not a number";
  }

  if (elements.length > 1) {
    throw "We don't support printing multiple tables (for now ...)";
  }
} catch (err) {
  display = false;
  console.log(err);
}
if (display === true) {
  for (counter; counter <= limit; counter++) {
    let result = counter * x;
    let operation = `${counter} * ${x} = ${x}`;
    console.log(operation);
  }
}

//console.log(x);
