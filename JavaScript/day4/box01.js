const myArg = process.argv.slice(2);

let columns = Number(myArg[0]);
let lines = Number(myArg[1]);

for (let i = 0; i < lines; i++) {
  let line = "";
  for (let j = 0; j < columns; j++) {
    if ((j === 0 && i === 0) || (j + 1 === columns && i + 1 === lines)) {
      line += "/";
    } else if ((j + 1 === columns && i === 0) || (j === 0 && i + 1 === lines)) {
      line += "\\";
    } else {
      if (i === 0 || i + 1 === lines) {
        line += "*";
      } else if (j === 0 || j + 1 === columns) {
        line += "*";
      } else {
        line += " ";
      }
    }
  }
  console.log(line);
}
