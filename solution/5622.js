const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")[0];

let phone = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

let result = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 2; j <= 9; j++) {
    if (phone[j].includes(input[i])) {
      result += j + 1;
    }
  }
}

console.log(result);
