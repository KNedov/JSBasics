function trekkingMania(input) {
  let numbGroups = Number(input[0]);
  let totalPeople = Number(0);
  let musala = Number(0);
  let monblan = Number(0);
  let kilimandjaro = Number(0);
  let k2 = Number(0);
  let everest = Number(0);
  for (let i = 1; i < input.length; i++) {
    totalPeople += Number(input[i]);
    if (input[i] <= 5) {
      musala += Number(input[i]);
    } else if (input[i] <= 12) {
      monblan += Number(input[i]);
    } else if (input[i] <= 25) {
      kilimandjaro += Number(input[i]);
    } else if (input[i] <= 40) {
      k2 += Number(input[i]);
    } else {
      everest += Number(input[i]);
    }
  }
  console.log(`${((musala / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((monblan / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((kilimandjaro / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((k2 / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((everest / totalPeople) * 100).toFixed(2)}%`);
}
trekkingMania(["5", "25", "41", "31", "250", "6"]);
