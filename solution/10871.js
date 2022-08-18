let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = +input[0].split(" ")[0];
let num = +input[0].split(" ")[1];
let arr = input[1].split(" ").map((x) => Number(x));

let result = "";

for (let i = 0; i < count; i++) {
  if (arr[i] < num) {
    result += arr[i] + " ";
  }
}

console.log(result);
