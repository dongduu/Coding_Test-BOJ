let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const score = input[1].split(" ").map((x) => Number(x));
const max = Math.max(...score);

let sum = 0;

for (let i = 0; i < score.length; i++) {
  sum += (score[i] / max) * 100;
}

console.log(sum / score.length);
8958