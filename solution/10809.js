let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().toUpperCase();

let result = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  result[input[i].charCodeAt() - 65] = input.indexOf(input[i]);
}

console.log(result.join(" "));
