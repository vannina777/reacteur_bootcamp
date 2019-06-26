const zero2sixteen = [
  "zéro",
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
  "dix",
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize"
];
const twenty2sixty = ["vingt", "trente", "quarante", "cinquante", "soixante"];
const thousandQualificator = ["cent", "mille", "million", "milliard"];

// OK

const parseNumber = number => {
  x = String(number).replace(/\s/g, "");
  const thousands = [];
  let singleThousand = "";
  let counter = x.length - 1;

  // separate by thousands in an array
  for (counter; counter >= 0; counter--) {
    singleThousand = x.charAt(counter) + singleThousand;

    if (singleThousand.length === 3) {
      thousands.unshift(singleThousand);
      singleThousand = "";
    }
  }

  while (singleThousand.length > 0 && singleThousand.length < 3) {
    singleThousand = "0" + singleThousand;
  }

  if (singleThousand !== "") {
    thousands.unshift(singleThousand);
  }
  return thousands;
};

const decimalDivider = number => {
  // number must be string
  let x = String(number);
  let array = x.split(".");
  if (array.length === 2) {
    isDecimal = true;
    let numberBeforeDec = array[0];
    let numberAfterDec = array[1];
    return [isDecimal, numberBeforeDec, numberAfterDec];
  } else {
    isDecimal = false;
    return isDecimal;
  }
};

const isNumberNegative = number => {
  let isNegative = NaN;
  if (number > 0) {
    isNegative = false;
  } else {
    isNegative = true;
  }
  return isNegative;
};

const spellHundred = selectedNumber => {
  // getting hundred
  let thisHund = "";
  if (selectedNumber === 1) {
    thisHund += `${thousandQualificator[0]}`;
  } else if (selectedNumber === 0) {
    thisHund = "";
  } else {
    thisHund += `${zero2sixteen[selectedNumber]} ${thousandQualificator[0]}s`;
  }
  return thisHund;
};

// gettin decimals
const spellDec = selectedNumber => {
  let thisDec = "";
  if (selectedNumber > 1 && selectedNumber < 7) {
    thisDec += `${twenty2sixty[selectedNumber - 2]}`;
  } else if (selectedNumber > 5 && selectedNumber < 8) {
    thisDec = `${twenty2sixty[4]}`;
  } else if (selectedNumber > 7) {
    thisDec = `${zero2sixteen[4]}-${twenty2sixty[0]}`;
  }

  if (selectedNumber > 5 && selectedNumber % 2 === 1) {
    thisDec += "-";
  }
  return thisDec;
};
// sentence += `${sign} ${thisHund} ${thisDec}${thisLast} ${thisThousand}`;

const spellLast = (element, num, selectedNumber) => {
  // handling exceptions
  selectedNumber = parseInt(selectedNumber);
  let thisLast = "";
  let previousNumber = parseInt(element[num - 1]);
  let previousNumberIsException =
    previousNumber === 1 || previousNumber === 7 || previousNumber === 9;

  if (previousNumberIsException && selectedNumber < 7) {
    thisLast = `${zero2sixteen[selectedNumber + 10]}`;
  } else if (previousNumberIsException && selectedNumber > 6) {
    thisLast = `${zero2sixteen[10]}-${zero2sixteen[selectedNumber]}`;
  }

  // acording with previous number
  if (previousNumberIsException === false && previousNumber !== 0) {
    if (selectedNumber === 1) {
      if (previousNumber === 8) {
        thisLast += "-un";
      } else {
        thisLast += " et un";
      }
    } else {
      thisLast += `-${zero2sixteen[selectedNumber]}`;
    }

    if (selectedNumber > 0 && previousNumber === 0) {
      thisLast += ` ${zero2sixteen[selectedNumber]}`;
    } else if (selectedNumber === 0) {
      thisLast = "";
    }
  }
  return thisLast;
};

const spellThousand = (qualificationIndex, arrayLen, i, plural) => {
  let thisThousand = "";
  if (i + 1 < arrayLen) {
    thisThousand = thousandQualificator[qualificationIndex];
    qualificationIndex -= 1;
  }
  if (plural > 1 && qualificationIndex >= 1) {
    thisThousand += "s";
  }
  return [thisThousand, qualificationIndex];
};

// -----------------------------------------------------------------
const numberToLetters = number => {
  // analysis of number
  let x = number;
  let y;
  let isNegative = isNumberNegative(number);
  if (isNegative === true) {
    x = x * -1;
  }

  let isDecimalResult = decimalDivider(number);
  if (isDecimalResult[0] === true) {
    x = isDecimalResult[1];
    y = isDecimalResult[2];
    let numberAfterDec = isDecimalResult[2];
  }

  // at this point x is to be parsed into arrays
  let array = parseNumber(x);
  let arrayLen = array.length;
  let statement = "";
  let qualificationIndex = arrayLen - 1;

  // iterate over every thousand block
  for (let i = 0; i < arrayLen; i++) {
    let element = array[i];
    let thisHund = "";
    let thisDec = "";
    let thisLast = "";
    let resultSpellThousand = spellThousand(
      qualificationIndex,
      arrayLen,
      i,
      element[2]
    );
    let thisThousand = resultSpellThousand[0];
    qualificationIndex = resultSpellThousand[1];

    for (let j = 0; j < 3; j++) {
      let selectedNumber = parseInt(element[j]);
      if (j === 0) {
        thisHund = spellHundred(selectedNumber); // OK
      } else if (j === 1) {
        thisDec = spellDec(selectedNumber);
      } else if (j === 2) {
        thisLast = spellLast(element, j, selectedNumber);
      }
    }
    statement += `${thisHund} ${thisDec}${thisLast} ${thisThousand} `;
  }

  let decCheck = false;

  if (isDecimal === true) {
    statement += `virgule `;
    let postDec = numberToLetters(y);
    statement += postDec;
    decCheck = true;
  }
  if (isNegative === true) {
    statement = `moins ${statement}`;
  }

  //if ((decCheck = true)) {}
  return statement;
};
// -------------------------------------------------------------

// getting the last

console.log(numberToLetters(-174.34567));
