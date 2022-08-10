let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = parseInt(input[0].split(" ")[0]);

if (a >= 90 && a <= 100) {
  console.log("A");
} else if (a >= 80 && a < 90) {
  console.log("B");
} else if (a >= 70 && a < 80) {
  console.log("C");
} else if (a >= 60 && a < 70) {
  console.log("D");
} else {
  console.log("F");
}
