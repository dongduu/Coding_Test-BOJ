let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map((x) => Number(x));

let maxNum = -1000000;
let minNum = 1000000;

for (let i = 0; i < n; i++) {
  let currNum = arr[i];
  if (currNum < minNum) minNum = currNum;
  if (currNum > maxNum) maxNum = currNum;
}

console.log(minNum + " " + maxNum);
