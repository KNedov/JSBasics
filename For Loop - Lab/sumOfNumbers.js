function sumOfNumbers(input) {
  let numb = input[0];
  let totSum = Number(0);
  for (let i = 0; i < numb.length; i++) {
    let sum = Number(numb[i]);
    totSum += sum;
  }
  console.log(`The sum of the digits is:${totSum}`);
}
sumOfNumbers(["1234"]);
