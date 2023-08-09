function coins(input) {
  let index = 0;
  let coins = input[0];
  let inCoins = Math.floor(coins * 100);

  let numCoins = 0;
  while (inCoins > 0) {
    if (inCoins >= 200) {
      inCoins -= 200;
      numCoins++;
    } else if (inCoins >= 100) {
      inCoins -= 100;
      numCoins++;
    } else if (inCoins >= 50) {
      inCoins -= 50;
      numCoins++;
    } else if (inCoins >= 20) {
      inCoins -= 20;
      numCoins++;
    } else if (inCoins >= 10) {
      inCoins -= 10;
      numCoins++;
    } else if (inCoins >= 5) {
      inCoins -= 5;
      numCoins++;
    } else if (inCoins >= 2) {
      inCoins -= 2;
      numCoins++;
    } else if (inCoins >= 1) {
      inCoins -= 1;
      numCoins++;
    }
    
  }
  console.log(numCoins);
}
coins(["0.59"]);
