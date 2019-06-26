let myArg = process.argv;
const numSeconds = myArg[2];

const timeConvert = num => {
  let x = num;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let formattedHour;
  let totalMinutes;

  // calculating each time element
  hours = Math.floor(num / 60 / 60);
  totalMinutes = Math.floor(num / 60);
  minutes = totalMinutes - 60 * hours;
  seconds = x - 60 * totalMinutes; //60 * (minutes - Math.floor(minutes));
  minutes = Math.floor(minutes);

  // formatting output
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  formattedHour = `${hours} : ${minutes} : ${seconds}`;

  // print output
  console.log(formattedHour);
};

// diviser par 60 pour nombres de minutes
// diviser par 60 pour nombre d'heures

timeConvert(numSeconds);
