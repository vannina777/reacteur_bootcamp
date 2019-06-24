const factorial = num => {
  let counter = 1;
  let total = 1;

  if (num === 1) {
    return num;
  }

  for (counter; counter <= num; counter++) {
    total = total * counter;
  }

  return total;
};

console.log(factorial(8));
