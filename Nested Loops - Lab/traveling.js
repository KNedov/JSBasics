function travelDestinations(input) {
  let destination = input[0];
  let MoneyForDestination = Number(input[1]);
  let index = 1;
  let savings = 0;

  while (destination !== "End") {
    index++;

    while (savings < MoneyForDestination) {
      savings += Number(input[index]);
      index++;
    }

    console.log(`Going to ${destination}!`);

    destination = input[index];
    index += 1;
    MoneyForDestination = input[index];
    savings = 0;
  }
}

travelDestinations([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
