function cleverLily(input) {
  let edge = Number(input[0]);
  let priceWashingmachine = Number(input[1]);
  let priceForToy = Number(input[2]);
  let totalMoney = 0;
  let giftMoney = 0;
  let numberOfToy = 0;
  for (i = 1; i <= edge; i++) {
    if (i % 2 === 0) {
      giftMoney += 10;
      totalMoney = totalMoney + giftMoney - 1;
    } else {
      numberOfToy++;
    }
  }
  if (priceWashingmachine <= totalMoney + numberOfToy * priceForToy) {
    console.log(
      `Yes! ${(
        totalMoney +
        numberOfToy * priceForToy -
        priceWashingmachine
      ).toFixed(2)}`
    );
  } else {
    console.log(
      `No! ${(
        priceWashingmachine -
        (totalMoney + numberOfToy * priceForToy)
      ).toFixed(2)}`
    );
  }
}
cleverLily(["21", "1570.98", "3"]);
