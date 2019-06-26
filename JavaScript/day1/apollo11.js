let limit = 0;
let counter = 12;

for (counter; counter >= 0; counter--) {
  if (counter === 8) {
    console.log("Ignition sequence start");
  } else if (counter === 7) {
    continue;
  } else {
    console.log(counter);
  }
}

console.log("All engines running");
console.log("Liftoff! 🚀");
