function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let sumBudget = 0;
  if (budget <= 100) {
    switch (season) {
      case "summer":
        budget *= 0.3;
        break;
      case "winter":
        budget *= 0.7;
        break;
    }
    if (season == "summer") {
      console.log("Somewhere in Bulgaria");
      console.log(`Camp - ${budget.toFixed(2)}`);
    }else if (season=="winter"){
        console.log("Somewhere in Bulgaria");
      console.log(`Hotel - ${budget.toFixed(2)}`);
    }
  } else if (budget <= 1000) {
    switch (season) {
      case "summer":
        budget *= 0.4;
        break;
      case "winter":
        budget *= 0.8;
        break;
    }if (season == "summer") {
        console.log("Somewhere in Balkans");
        console.log(`Camp - ${budget.toFixed(2)}`);
      }else if (season=="winter"){
          console.log("Somewhere in Balkans");
        console.log(`Hotel - ${budget.toFixed(2)}`);
      }
  } else {
    console.log("Somewhere in Europe");
    console.log(`Hotel - ${(budget * 0.90).toFixed(2)}`);
  }
}
journey(["1500", "summer"])
