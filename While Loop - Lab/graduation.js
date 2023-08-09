function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  let sumGrade = 0;
  let i = 1;
  let badGradeCount = 0;
  let hasExcluded = false;
  while (i <= 12) {
    let grades = Number(input[index]);
    index++;
    if (grades < 4) {
      badGradeCount++;
      if (badGradeCount >= 2) {
        console.log(`${name} has been excluded at ${i} grade`);
        hasExcluded = true;
        break;
      }
      continue;
    }
    sumGrade += grades;
    i++;
  }
  if (!hasExcluded) {
    console.log(
      `${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`
    );
  }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
