let fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\n");
// console.log(input[0]);

let line = input[0].split(" ");
// console.log(line);

let a = parseInt(line[0]);
let b = parseInt(line[1]);
console.log(a + b);
