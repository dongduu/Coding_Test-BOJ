let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = input.map((x) => Number(x));
let max = -100000;
let answer = "";

for (let i = 0; i < num.length; i++) {
  if (max < num[i]) {
    max = num[i];
    answer = num[i] + "\n" + (i + 1);
  }
}

console.log(answer);
