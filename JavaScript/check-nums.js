const checkNums = (num1, num2) => {
  if (num1 > num2) {
    return console.log("num2 est inférieur à num1");
  } else if (num1 < num2) {
    return console.log("num2 est supérieur à num1");
  } else {
    return console.log("num1 et num2 sont équivalents");
  }
};

checkNums(3, 122);
