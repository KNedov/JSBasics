function birthdayParty(input) {
  let rent = Number(input[0]);
  let theCake = (rent * 20) / 100;
  let drinks = theCake - (theCake * 45) / 100;
  let animator = rent / 3;
  let totalMoneyNeeded = rent + theCake + drinks + animator;
  console.log(totalMoneyNeeded);
}
birthdayParty ([3720])

//Торта – цената ѝ е 20% от наема на залата
//• Напитки – цената им е 45% по-малко от тази на тортата
//• Аниматор – цената му е 1/3 от цената за наема на залата
