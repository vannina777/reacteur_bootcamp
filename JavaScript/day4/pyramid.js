const myArg = process.argv[2];

const pyramid = base => {
  let counter = 1;

  const pyramidMaxBase = numberTimes => {
    total = 1;
    for (let i = 1; i < numberTimes; i++) {
      total += 2;
    }
    return total;
  };

  const pyramidSize = pyramidMaxBase(base);

  for (counter; counter <= pyramidSize; counter++) {
    let pyramidLevel = [];

    let middleOfCounter = Math.floor(counter / 2); // for each array of X, floor to get index of middle number (ceil)
    const middleOfBase = Math.floor(pyramidSize / 2); // center to offset array insertion, floor to get index of middle number (ceil)
    let insertStart = middleOfBase - middleOfCounter;
    let insertEnd = insertStart + (counter - 1);

    for (let i = 0; i < pyramidSize; i++) {
      if (i >= insertStart && i <= insertEnd) {
        pyramidLevel.push("X");
      } else {
        pyramidLevel.push(" ");
      }
    }
    console.log(pyramidLevel.join(""));
    counter += 1;
  }
};

pyramid(myArg);
