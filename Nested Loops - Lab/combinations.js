function combinations(input) {
  let number = Number(input[0]);
  let sum = 0;
  for (let x1 = 0; x1 <= number; x1++) {
    for (x2 = 0; x2 <= number; x2++) {
      for (x3 = 0; x3 <= number; x3++) {
        if (x1 + x2 + x3 === number) {
          sum++;
        }
      }
    }
  }
  console.log(sum);
}
combinations(["25"]);
