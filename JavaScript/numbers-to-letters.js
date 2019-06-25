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
const thousandQualificator = ["cent", "mille", "million(s)", "milliard(s)"];

const numberToLetters = number => {
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

  // treat each thousand range
  let qualificationSelector = thousands.length; // number of times will have to iterate, becomes a counter
  let qualificationIndex = qualificationSelector - 1; // index of max thousand range
  let arrayPointer = 0;
  let sentence = "";
  let sign = "";

  // check each sub-array by thousands starting by biggest
  for (arrayPointer; arrayPointer < qualificationSelector; arrayPointer++) {
    let tab = thousands[arrayPointer];
    let thisThousand = "";
    let thisHund = "";
    let thisDec = "";
    let thisLast = "";
    let sign = "";

    // iterate over 3 numbers of the thousand
    for (let num = 0; num < 3; num++) {
      // console.log(selectedNumber);
      if (tab[num] === "-") {
        sign = "moins";
        if (num === 2) {
          qualificationIndex -= 1;
        }
      }

      let selectedNumber = parseInt(tab[num]);

      // getting thousand
      if (
        num === 2 &&
        qualificationIndex !== 0 &&
        isNaN(selectedNumber) === false
      ) {
        thisThousand = thousandQualificator[qualificationIndex];
        qualificationIndex -= 1;
      } else {
        thisThousand = "";
      }

      // getting hundred
      if (num === 0) {
        if (selectedNumber === 1) {
          thisHund += `${thousandQualificator[0]}`;
        } else if (selectedNumber === 0) {
          thisHund = "";
        } else {
          thisHund += `${zero2sixteen[selectedNumber]} ${
            thousandQualificator[0]
          }`;
        }
      }

      // gettin decimals
      else if (num === 1) {
        if (selectedNumber > 1 && selectedNumber < 7) {
          thisDec += twenty2sixty[selectedNumber - 2];
        } else if (selectedNumber > 5 && selectedNumber < 8) {
          thisDec = `${zero2sixteen[4]}`;
        } else if (selectedNumber > 7) {
          thisDec = `${zero2sixteen[4]}-${twenty2sixty[0]}`;
        }

        if (selectedNumber > 5 && selectedNumber % 2 === 1) {
          thisDec += "-";
        } else {
          continue;
        }
      }

      // getting the last
      if (num === 2 && isNaN(selectedNumber) === false) {
        // handling exceptions
        let previousNumber = parseInt(tab[num - 1]);
        let previousNumberIsException =
          previousNumber === 1 || previousNumber === 7 || previousNumber === 9;

        if (previousNumberIsException && selectedNumber < 7) {
          thisLast = `${zero2sixteen[selectedNumber + 10]}`;
        } else if (previousNumberIsException && selectedNumber > 6) {
          thisLast = `${zero2sixteen[10]} - ${zero2sixteen[selectedNumber]}`;
        }

        // acording with previous number
        if (
          previousNumberIsException === false &&
          previousNumber !== 0 &&
          isNaN(previousNumber) === false
        ) {
          if (selectedNumber === 1) {
            if (previousNumber === 8) {
              thisLast += "-un";
            } else if (isNaN(previousNumber) === false) {
              thisLast += " et un";
            }
          } else {
            thisLast += `-${zero2sixteen[selectedNumber]}`;
          }
        } else if (
          previousNumber === 0 ||
          (isNaN(previousNumber) === true && selectedNumber === 1)
        ) {
          if (selectedNumber > 0) {
            thisLast += ` ${zero2sixteen[selectedNumber]}`;
          } else {
            thisLast = "";
          }
        }
      }
    }
    sentence += `${sign} ${thisHund} ${thisDec}${thisLast} ${thisThousand}`;
  }

  return sentence;
};

// return qualificationSelector;
// console.log(numberToLetters(1123456791)); // 1 123 456 791
console.log(numberToLetters(-1123456721)); // 1 123 456 721
