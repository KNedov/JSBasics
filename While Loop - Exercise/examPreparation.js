function examPreparation(input) {
  let index = 0;
  let numOfBadGrades = Number(input[index]);
  index++;
  let task = input[index];
  index++;
  let grade = Number(input[index]);
  index++;
  let badGrades = 0;
  let numOfGoodGrades = 0;
  let sumOfGrades = 0;
  let lastTask = "";
  while (numOfBadGrades !== badGrades) {
    if (grade <= 4) {
      badGrades++;
    }
    lastTask = task;
    lastTask;
    numOfGoodGrades++;
    sumOfGrades += grade;
    task = input[index];
    index++;
    grade = Number(input[index]);
    index++;
    if (task === "Enough") {
      break;
    }
  }
  if (badGrades === numOfBadGrades) {
    console.log(`You need a break, ${badGrades} poor grades.`);
  } else {
    console.log(`Average score: ${(sumOfGrades / numOfGoodGrades).toFixed(2)}`);
    console.log(`Number of problems: ${numOfGoodGrades}`);
    console.log(`Last problem: ${lastTask}`);
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
