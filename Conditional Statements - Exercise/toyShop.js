function toyShop(input) {
    let priceTrip = Number(input[0])
    let puzzles = Number(input[1])
    let dols = Number(input[2])
    let bears = Number(input[3])
    let minions = Number(input[4])
    let trucks = Number(input[5])

    let totPricePuzzles = puzzles * 2.60;
    let totPriceDols = dols * 3;
    let totPriceBears = bears * 4.10;
    let totPriceMinions = minions * 8.20;
    let totPriceTruck = trucks * 2;

    let totalPrice = totPricePuzzles + totPriceDols + totPriceBears + totPriceMinions + totPriceTruck;
    let totToys = puzzles + dols + bears + minions + trucks;

    if (totToys >= 50) {
        totalPrice*=0.75;
    }
    let totalPriceAfterRent=totalPrice*0.90
    if (totalPriceAfterRent>=priceTrip){
        console.log (`Yes! ${(totalPriceAfterRent-priceTrip).toFixed(2)} lv left.`)
    }else {
        console.log (`Not enough money! ${(priceTrip-totalPriceAfterRent).toFixed(2)} lv needed.`)
    }

    
       
}


toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
