let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().split("\n");
let N = parseInt(input[0]);
let arr = input[1].split(" ").map((x) => Number(x));

let max = -1000000;
let min = 1000000;

for (let i = 0; i < N; i++) {
  if (arr[i] < min) min = arr[i];
  if (arr[i] > max) max = arr[i];
}

console.log(min, max);
