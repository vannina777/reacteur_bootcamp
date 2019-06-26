const arrayAddition = tab => {
  let total = 0;
  let maxNumber = 0;

  // finding the highest number of the array
  for (let i of tab) {
    if (i > maxNumber) {
      maxNumber = i;
    }
  }

  for (i of tab) {
    total += i;
  }

  total = total - maxNumber;

  if (total === maxNumber) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayAddition([1, 3, 20, 6]));
