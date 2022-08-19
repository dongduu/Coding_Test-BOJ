let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().split("\n");

let line = 0;

while (true) {
  let [a, b] = input[line].split(" ").map((x) => Number(x));
  if (a == 0 && b == b) {
    break;
  }
  console.log(a + b);
  line++;
}
