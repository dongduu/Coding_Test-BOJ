let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b, c] = [
  input[0].split(" ")[0],
  input[0].split(" ")[1],
  input[0].split(" ")[2],
];
let sort = [a, b, c].sort();
let reward = "";

if (a == b && a == c && b == c) {
  reward = 10000 + a * 1000;
} else if (a == b || a == c || b == c) {
  if (a == b || a == c) {
    reward = 1000 + a * 100;
  } else {
    reward = 1000 + b * 100;
  }
} else {
  reward = sort.pop() * 100;
}

console.log(reward);
