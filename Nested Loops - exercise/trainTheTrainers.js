function trainTheTrainers(input) {
  let index = 0;
  let sumEvaluation = 0;

  let numOfDjudges = Number(input[0]);
  let namePresentation = input[++index];
  let numEvaluation = 0;
  let totalSumEvaluation = 0;
  let averageEvaluation = 0;
  let secondAverageEvaluation = 0;
  while (namePresentation !== "Finish") {
    for (let i = 1; i <= numOfDjudges; i++) {
      let Evaluation = Number(input[++index]);
      numEvaluation++;
      sumEvaluation += Evaluation;
      totalSumEvaluation += Evaluation;
    }

    averageEvaluation = sumEvaluation / numOfDjudges;
    console.log(`${namePresentation} - ${averageEvaluation.toFixed(2)}.`);
    secondAverageEvaluation += averageEvaluation;
    sumEvaluation = 0;
    averageEvaluation = 0;
    index++;
    namePresentation = input[index];
  }
  console.log(
    `Student's final assessment is ${(
      totalSumEvaluation / numEvaluation
    ).toFixed(2)}.`
  );
}
trainTheTrainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
