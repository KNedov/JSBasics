function tennisRanklist(input) {
  let numberOfTurnirs = Number(input[0]);
  let Firstpoints = Number(input[1]);
  let sumWinPoints = 0;
  let wins = Number(0);
  for (i = 2; i < input.length; i++) {
    let position = input[i];
    switch (position) {
      case "W":
        sumWinPoints += 2000;
        wins += 1;
        break;
      case "F":
        sumWinPoints += 1200;
        break;
      case "SF":
        sumWinPoints += 720;
        break;
    }
  }
  console.log(`Final points: ${sumWinPoints + Firstpoints}`);
  console.log(`Average points: ${Math.floor(sumWinPoints / numberOfTurnirs)}`);
  console.log(`${((wins / numberOfTurnirs) * 100).toFixed(2)}%`);
}
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
