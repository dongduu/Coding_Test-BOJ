let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0].split(" ")[0]);

let result = "";

for (let i = 0; i < num; i++) {
  for (let j = 0; j <= num - i - 1; j++) {
    result += " ";
  }
  for (let u = 0; u <= i; u++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
