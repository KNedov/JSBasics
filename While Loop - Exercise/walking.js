function walking(input) {
  let goalSteps = 10000;
  let index = 0;
  let command = input[index];
  let sumSteps = 0;

  while (command !== "Going home") {
    let steps = Number(command);
    sumSteps += steps;
    if (sumSteps >= goalSteps) {
      console.log(`Goal reached! Good job!`);
      console.log(`${sumSteps - goalSteps} steps over the goal!`);
      break;
    }

    index++;
    command = input[index];
  }
  if (command === "Going home") {
    let stepsToHome = Number(input[index + 1]);

    sumSteps += stepsToHome;

    if (sumSteps >= goalSteps) {
      console.log(`Goal reached! Good job!`);
      console.log(`${sumSteps - goalSteps} steps over the goal!`);
    } else {
      console.log(`${goalSteps - sumSteps} more steps to reach goal.`);
    }
  }
}
walking(["0",
"500",
"2000",
"6500"])


