const input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split(" ")[0];

const croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let result = 0;

function solution(input) {
  for (let i = 0; i < croatian.length; i++) {
    while (input !== input.replace(croatian[i], "")) {
      result += 1;
      input = input.replace(croatian[i], " ");
      console.log(input);
    }
  }
  return result + input.split(" ").join("").length;
}

console.log(solution(input));
