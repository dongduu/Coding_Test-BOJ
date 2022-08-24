let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().split("\n");
let num = +input[0];

for (let i = 1; i <= num; i++) {
  let sum = 0;
  let count = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum = sum + count;
  }
  console.log(sum);
}
