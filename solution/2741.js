let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);
