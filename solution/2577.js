let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b, c] = input.map((x) => Number(x));

let num = String(a * b * c);

let answer = "";

for (let i = 0; i < 10; i++) {
  answer += num.indexOf(i) + 1 + "\n";
}

console.log(answer);
