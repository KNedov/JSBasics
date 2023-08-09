function sumNumbers(input) {
  let index = 0;
  let totalNum =Number (input[index]);
  index++;
  let currentNum = Number(input[index]);
  index++;
  let sum = 0;

  while (sum < totalNum) {
    sum += currentNum;
    currentNum = Number(input[index]);
    index++;
  }
  console.log(sum);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])
