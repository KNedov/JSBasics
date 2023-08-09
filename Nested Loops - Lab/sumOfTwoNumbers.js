function sumOfTwoNumbers(input) {
  let begining = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);
  let counter = 0;
  let foundIs = false;
  for (let a = begining; a <= end; a++) {
    for (let b = begining; b <= end; b++) {
      counter++;
      if (a + b === magicNumber) {
        console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`);
        foundIs = true;
        break;
      }
    }
    if (foundIs) {
      break;
    }
  }
  if (!foundIs) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["88", "888", "2000"]);
