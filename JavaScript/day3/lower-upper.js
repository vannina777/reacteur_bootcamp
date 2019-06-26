const lowerUpper = string => {
  let x = string;
  let counter = 0;
  let limit = x.length;
  let newString = "";
  let caseDecider = 0;

  for (counter; counter < limit; counter++) {
    let isEven = caseDecider % 2 === 0;
    if (isEven === true && x[counter] !== " ") {
      newString += x.charAt(counter).toLowerCase();
      caseDecider += 1;
    } else if (isEven === false && x[counter] !== " ") {
      newString += x.charAt(counter).toUpperCase();
      caseDecider += 1;
    } else {
      caseDecider = 0;
      newString += x[counter];
    }
  }
  return newString;
};

console.log(lowerUpper("La ville de Paris"));
