let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = +input[0].split(" ")[0];
let max = +input[0].split(" ")[1];
let arr = input[1].split(" ").map((x) => Number(x));
let answer = "";

for (let i = 0; i < n; i++) {
  if (arr[i] < max) {
    answer += arr[i] + " ";
  }
}

console.log(answer);
