let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().split("\n");
let N = parseInt(input[0]);

function solution(N) {
  let num = N;
  let count = 0;

  while (true) {
    let sum = parseInt((num % 10) + num / 10);
    num = (num % 10) * 10 + (sum % 10);
    count++;
    if (num === N) break;
  }
  return count;
}

console.log(solution(N));
