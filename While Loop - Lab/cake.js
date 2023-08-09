function cake(input) {
  let index = 0;
  let takedPieces = 0;
  let w = Number(input[index]);
  index++;
  let l = Number(input[index]);
  index++;
  let Pieces = input[index];
  index++;
  let sumTotalPieces = w * l;
  let totalPieces = sumTotalPieces;
  let commandIsStop = false;
  while (totalPieces >= 0) {
    let command = Pieces;
    if (command === "STOP") {
      commandIsStop = true;
      break;
    }
    takedPieces += Number(Pieces);
    totalPieces -= Number(Pieces);
    Pieces = input[index];
    index++;
  }
  if (sumTotalPieces >= takedPieces || commandIsStop === true) {
    console.log(`${sumTotalPieces - takedPieces} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${takedPieces - sumTotalPieces} pieces more.`
    );
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
