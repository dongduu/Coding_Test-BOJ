let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().trim().split("\n");
let arr = input.map((x) => Number(x));
let arr2 = arr.map((x) => x % 42);
let arr3 = [...new Set(arr2)];

console.log(arr3.length);
