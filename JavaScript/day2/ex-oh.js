const exOh = string => {
  let xCount = 0;
  let oCount = 0;

  for (let letter of string) {
    if (letter === "o") {
      oCount += 1;
    } else if (letter === "x") {
      xCount += 1;
    }
  }

  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
};

console.log(exOh("xooxxo"));
console.log(exOh("x"));
