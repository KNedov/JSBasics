function salary(input) {
  let numberofTabs = Number(input[0]);
  let salary = Number(input[1]);
  let tabs = 0;
  let forfeit = 0;
  for (let i = 2; i < input.length; i = i + 1) {
    tabs = input[i];
    switch (tabs) {
      case "Facebook":
        forfeit += 150;
        break;
      case "Instagram":
        forfeit += 100;
        break;
      case "Reddit":
        forfeit += 50;
        break;
    }
  }
  totalsum = salary - forfeit;

  if (totalsum <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(Math.floor(totalsum));
  }
}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
