let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let n = +input[0];
let answer = "";

for (let i = 1; i <= n; i++) {
  addNum = input[i].split(" ").map((x) => Number(x));
  answer += `Case #${i}: ${addNum[0] + addNum[1]}` + "\n";
}

console.log(answer);
