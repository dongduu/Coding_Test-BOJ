let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().split("\n");
let arr = input.map((x) => Number(x));

let max = -1000000;
let currNum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    currNum = i + 1;
  }
}

console.log(max + "\n" + currNum);
