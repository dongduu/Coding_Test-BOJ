let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().split("\n");
let num = Number(input[0].split(" ")[0]);

for (let i = 1; i <= num; i++) {
  console.log(Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]));
}
