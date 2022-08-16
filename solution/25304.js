let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let total = Number(input[0].split(" ")[0]);
let count = Number(input[1].split(" ")[0]);

let realTotal = 0;

for (let i = 2; i <= count + 1; i++) {
  realTotal += Number(input[i].split(" ")[0]) * Number(input[i].split(" ")[1]);
}

if (total === realTotal) {
  console.log("Yes");
} else {
  console.log("No");
}
