function sequence2k(input) {
  let n = Number(input[0]);

  let sum = 0;

  while (sum < n) {
    sum = sum * 2 + 1;
    if (sum > n) {
      break;
    }
    console.log(sum);
  }
}
sequence2k(["31"]);
