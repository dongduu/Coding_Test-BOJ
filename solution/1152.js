let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().trim().split(" ");

console.log(input[0] === "" ? 0 : input.length);
