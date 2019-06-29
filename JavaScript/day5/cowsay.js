const cow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;

const endLine = " |";
const startLine = "| ";
const topBottom = ` ${"-".repeat(41)} `;
myArg = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`; //process.argv[2];
let wordList = myArg.split(" ");

let matrix = [topBottom];
let line = "";

let lastLine = false;
let diff = 0;

let wordOnLine;
let wordRemainderLine;

//
const pushErase = () => {
  if (line.length === 39) {
    line = startLine + line + endLine;
  } else {
    diff = 39 - line.length;
    line += " ".repeat(diff);
    line = startLine + line + endLine;
  }

  matrix.push(line);
  if (lastLine === true) {
    matrix.push(topBottom);
    matrix[1] = `/${matrix[1].replace(/\|/g, "")}\\`;
    matrix[matrix.length - 2] = `\\${matrix[matrix.length - 2].replace(
      /\|/g,
      ""
    )}/`;
  }
  line = "";
};

for (let i = 0; i < wordList.length; i++) {
  let lineLength = line.length;
  let currentWord = wordList[i];
  let doesFit = (line + currentWord).length <= 39;
  if (doesFit) {
    line += currentWord;
    lineLength = line.length;
    if (lineLength < 39 || lineLength + 1 === 39) {
      line += " ";
      if (lineLength + 1 === 39) {
        pushErase();
      }
    } else if (lineLength === 39) {
      pushErase();
    }
    if (i + 1 === wordList.length) {
      lastLine = true;
      pushErase();
    }
  } else {
    let diff = 39 - lineLength;
    let cutIndex = diff - 1;
    if (diff > 0) {
      wordOnLine = currentWord.slice(0, cutIndex) + "-";
      line += wordOnLine;
      wordRemainderLine = currentWord.slice(cutIndex);

      lineLength = line.length;
      pushErase();
      line += wordRemainderLine + " ";
    }
  }
}

console.log(`${matrix.join("\n")}\n ${cow}`);
