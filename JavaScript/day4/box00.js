const myArg = process.argv.slice(2);

const columns = Number(myArg[0]);
const lines = Number(myArg[1]);

for (let i = 0; i < lines; i++) {
  let line = "";
  for (let j = 0; j < columns; j++) {
    if (i > 0 && i + 1 < lines) {
      if (j === 0 || j + 1 === columns) {
        line += "|";
      } else {
        line += " ";
      }
    } else if (j === 0 || j + 1 === columns) {
      line += "o";
    } else {
      line += "-";
    }
  }
  console.log(line);
}
