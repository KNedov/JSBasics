function Vacation(input) {
  let index = 0;
  let moneyForTrip = Number(input[index]);
  index++;
  let jesysMoney = Number(input[index]);
  index++;
  let action = input[index];
  index++;
  let moneySaveOrSpend = Number(input[index]);
  index++;

  let spendDays = 0;
  let days = 0;
  let sumMoney = 0;
  let spend5Days = false;
  while (jesysMoney < moneyForTrip) {
    switch (action) {
      case "spend":
        spendDays++;
        jesysMoney -= moneySaveOrSpend;
        if (jesysMoney < 0) {
          jesysMoney = 0;
        }
        break;

      default:
        jesysMoney += moneySaveOrSpend;
        spendDays = 0;
        break;
    }

    days++;
    action = input[index];
    index++;
    moneySaveOrSpend = Number(input[index]);
    index++;
    if (spendDays == 5) {
      spend5Days = true;
      break;
    }
  }
  if (spend5Days === true) {
    console.log(`You can't save the money.`);
    console.log(`${days}`);
  } else console.log(`You saved the money for ${days} days.`);
}
Vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
