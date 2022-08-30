let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = +input[0];

for (let i = 1; i <= N; i++) {
  let setNum = +input[i][0];
  let S = input[i].split(" ")[1];
  let result = "";

  for (let j = 0; j < S.length; j++) {
    for (let k = 0; k < setNum; k++) {
      result += S[j];
    }
  }
  console.log(result);
}
