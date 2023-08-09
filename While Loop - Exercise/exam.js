function exam(input) {
  let drink = input[0];
  let extras = input[1];
  let numberOfDrinks = Number(input[2]);
  let sumMoneyDrink = 0;
  let discount = 0;

  switch (drink) {
    case "Espresso":
      switch (extras) {
        case "Without":
          sumMoneyDrink = numberOfDrinks * 0.9;
          discount = (sumMoneyDrink * 35) / 100;
          sumMoneyDrink -= discount;

          break;
        case "Normal":
          sumMoneyDrink = numberOfDrinks * 1.0;
          break;
        case "Extra":
          sumMoneyDrink = numberOfDrinks * 1.2;
          break;
      }
      break;
    case "Cappuccino":
      switch (extras) {
        case "Without":
          sumMoneyDrink = numberOfDrinks * 1.0;
          discount = (sumMoneyDrink * 35) / 100;
          sumMoneyDrink -= discount;
          break;
        case "Normal":
          sumMoneyDrink = numberOfDrinks * 1.2;
          break;
        case "Extra":
          sumMoneyDrink = numberOfDrinks * 1.6;
          break;
      }
      break;
    case "Tea":
      switch (extras) {
        case "Without":
          sumMoneyDrink = numberOfDrinks * 0.5;
          discount = (sumMoneyDrink * 35) / 100;
          sumMoneyDrink -= discount;
          break;
        case "Normal":
          sumMoneyDrink = numberOfDrinks * 0.6;
          break;
        case "Extra":
          sumMoneyDrink = numberOfDrinks * 0.7;
          break;
      }
      break;
  }
  if (drink === "Espresso" && numberOfDrinks >= 5) {
    let discount1 = (sumMoneyDrink * 25) / 100;
    sumMoneyDrink -= discount1;
  }
  if (sumMoneyDrink > 15) {
    let discount1 = (sumMoneyDrink * 20) / 100;
    sumMoneyDrink -= discount1;
  }
  console.log(
    `You bought ${numberOfDrinks} cups of ${drink} for ${sumMoneyDrink.toFixed(
      2
    )} lv.`
  );
}
exam(["Tea", "Extra", "3"]);

//               Без захар          Нормално         Допълнително захар
//Еспресо         0.90 лв./бр.      1 лв. /бр.        1.20 лв. /бр.
//Капучино        1.00 лв. /бр.     1.20 лв. /бр.     1.60 лв. /бр.
//Чай             0.50 лв. /бр.     0.60 лв. /бр.     0.70 лв. /бр

// При избрана напитка без захар има 35% отстъпка.
// При избрана напитка "Espresso" и закупени поне 5 броя, има 25% отстъпка.
// При сума надвишава 15 лева, 20% отстъпка от крайната цена,
