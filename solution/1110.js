let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let a = String(input).substr(0, 1);
let b = String(input).substr(1, 1);

let cycle = 1;
let addNum = +a + +b;
let newNum = b + String(addNum)[0];

console.log(addNum, newNum);
console.log(+input);
console.log(+newNum[0] + +newNum[newNum.length - 1]);

while (+input !== newNum) {
  addNum = +newNum[0] + +newNum[newNum.length - 1];
  newNum = addNum[addNum.length - 1] + newNum[newNum.length - 1];
  cycle += 1;
}

console.log(cycle);
