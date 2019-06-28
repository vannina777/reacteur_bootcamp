const myArg = process.argv.slice(2);

const columns = Number(myArg[0]);
const lines = Number(myArg[1]);

for (let i = 0; i < lines; i++) {
  line = "";
  for (let j = 0; j < columns; j++) {
    let firstOrLastCol = j === 0 || j + 1 === columns;
    let firstOrLastLine = i === 0 || i + 1 === lines;

    if (firstOrLastCol === true && firstOrLastLine === true) {
      if (j === 0) {
        line += "A";
      } else if (j + 1 === columns) {
        line += "C";
      }
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
