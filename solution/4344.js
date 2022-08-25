let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().split("\n");
let test = +input[0];

for (let i = 1; i <= test; i++) {
  let arr = input[i].split(" ").map((x) => Number(x));
  let num = arr[0];
  let sum = 0;
  let count = 0;

  arr.splice(0, 1);

  for (let j = 0; j < num; j++) {
    sum += arr[j];
  }

  let average = sum / num;

  for (let t = 0; t < num; t++) {
    if (arr[t] > average) {
      count++;
    }
  }

  let result = ((count / num) * 100).toFixed(3);

  console.log(result + "%");
}
