let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().toString().toUpperCase();

let result = new Array(26).fill(0);
let indices = [];
let arr = [1, 2, 3];

for (let i = 0; i < input.length; i++) {
  result[input[i].charCodeAt() - 65] += 1;
}

const max = Math.max(...result);

let idx = result.indexOf(max);
while (idx != -1) {
  indices.push(idx);
  idx = result.indexOf(max, idx + 1);
}

if (indices.length > 1) {
  console.log("?");
  return;
}

let maxNum = String.fromCharCode(indices[0] + 65);

console.log(maxNum);
