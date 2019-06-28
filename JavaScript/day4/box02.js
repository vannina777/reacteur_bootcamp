// const myArg = process.argv.slice(2);

let columns = 4; // myArg[0];
let lines = 10; // myArg[1];

for (let i = 0; i < lines; i++) {
  let line = "";
  for (let j = 0; j < columns; j++) {
    let firstOrLastCol = j === 0 || j + 1 === columns;
    let firstOrLastLine = i === 0 || i + 1 === lines;

    if (i === 0 && firstOrLastCol) {
      line += "A";
    } else if (i + 1 === lines && firstOrLastCol) {
      line += "C";
    } else {
      if (firstOrLastCol || firstOrLastLine) {
        line += "B";
      } else {
        line += " ";
      }
    }
  }
  console.log(line);
}
