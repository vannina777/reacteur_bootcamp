const powerFunc = (num, power) => {
  let total = 0;
  let counter = 2;
  let negPower = undefined;

  // check if power is negative
  if (power < 0) {
    negPower = true;
    power = power * -1;
  } else {
    negPower = false;
  }

  // check for power related exceptions
  if (power === 0) {
    total = 1;
    return total;
  } else if (power === 1) {
    total = num;
  }

  // main logic
  for (counter; counter <= power; counter++) {
    total = num * num;
  }

  // format for negative power
  if (negPower === true) {
    total = 1 / total;
    return total;
  } else {
    return total;
  }
};

console.log(powerFunc(2, 0));
console.log(powerFunc(2, 1));
console.log(powerFunc(2, -1));
console.log(powerFunc(2, 2));
