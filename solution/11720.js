let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().split("\n");

let N = +input[0];
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += Number(input[1][i]);
}

console.log(sum);
