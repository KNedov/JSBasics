function fishingBoat(input) {
  let groupBudget = Number(input[0]);
  let season = input[1];
  let fisherMen = Number(input[2]);
  let seasonPrice = 0;
  switch (season) {
    case "Spring":
      seasonPrice = 3000;
      break;
    case "Summer":
    case "Autumn":
      seasonPrice = 4200;
      break;
    case "Winter":
      seasonPrice = 2600;
      break;
  }
  if (fisherMen <= 6) {
    seasonPrice = seasonPrice * 0.9;
  } else if ((fisherMen > 7) & (fisherMen <= 11)) {
    seasonPrice = seasonPrice * 0.85;
  } else if (fisherMen >= 12) {
    seasonPrice = seasonPrice * 0.75;
  }
  if (fisherMen % 2 == 0 && season !== "Autumn") {
    seasonPrice = seasonPrice * 0.95;
  } else {
    seasonPrice = seasonPrice;
  }

  if (groupBudget >= seasonPrice) {
    console.log(
      `Yes! You have ${(groupBudget - seasonPrice).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money! You need ${(seasonPrice - groupBudget).toFixed(
        2
      )} leva.`
    );
  }
}
fishingBoat(["2000", "Winter", "12"]);
