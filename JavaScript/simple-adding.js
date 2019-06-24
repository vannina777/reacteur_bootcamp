const simpleAdding = x => {
  let counter = 0;
  let total = 0;
  for (counter; counter <= x; counter++) {
    total += counter;
  }
  console.log(total);
};

simpleAdding(5);
