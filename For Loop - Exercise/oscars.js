function oscars(input) {
  let name = input[0];
  let startingPoints = Number(input[1]);
  let juryNumbers = Number(input[2]);

  let jurypoint = 0;
  for (let i = 3; i < input.length; i += 2) {
    if (i % 2 !== 0) {
      let point = i + 1;
      let total = (input[i].length * Number(input[point])) / 2;
      startingPoints += total;
    }
    if (startingPoints > 1250.5) {
      break;
    }
  }if (startingPoints>1250.50){
    console.log(`Congratulations, ${name} got a nominee for leading role with ${(startingPoints).toFixed(1)}!`)
}else {
    console.log(`Sorry, ${name} you need ${(1250.50-startingPoints).toFixed(1)} more!`);
}
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
