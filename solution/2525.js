let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let currentTime = Number(input[0].split(" ")[0]);
let currentMinutes = Number(input[0].split(" ")[1]);
let cookMinutes = Number(input[1]);
let addedMinutes = currentMinutes + cookMinutes;

if (addedMinutes < 60) {
  console.log(currentTime, addedMinutes);
} else {
  while (addedMinutes >= 60) {
    addedMinutes -= 60;
    currentTime += 1;
  }
  currentTime %= 24;
  console.log(currentTime, addedMinutes);
}
