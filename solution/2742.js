let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let answer = "";

for (let i = 0; i < input; i++) {
  answer += input - i + "\n";
}

console.log(answer);
