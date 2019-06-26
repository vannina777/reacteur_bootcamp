const worldCount = phrase => {
  phrase = phrase.split(" ");
  let len = phrase.length;
  return len;
};

console.log(worldCount("Hello World"));
console.log(worldCount("one 22 three"));
console.log(worldCount("bye"));
