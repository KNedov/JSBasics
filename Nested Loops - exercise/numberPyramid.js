function numberPyramid(input) {
  let number = Number(input[0]);
  let printCurrentLine = "";
  let current = 1;
  let isBigger = false;
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      if (current > number) {
        isBigger = true;
        break;
      }
      printCurrentLine += current + " ";
      current++;
    }

    console.log(printCurrentLine);
    printCurrentLine = "";
    if (isBigger) {
      break;
    }
  }
}
numberPyramid(["15"]);
