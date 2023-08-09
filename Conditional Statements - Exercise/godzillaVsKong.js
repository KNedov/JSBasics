function godzillaVsKong(input) {
    let budget = Number(input[0])
    let statist = Number(input[1])
    let Clothingprice = Number(input[2])

    let priceForDecor = (0.10 * budget)
    let priceForClothing = (statist * Clothingprice)
    if (statist > 150) {
        let discountClothing = (priceForClothing - (priceForClothing * 0.10))
        let totalPriceForMovie = (discountClothing + priceForDecor)
        if (budget >= totalPriceForMovie) {
            console.log("Action!")
            console.log(`Wingard starts filming with ${(budget - totalPriceForMovie).toFixed(2)} leva left.`)
        } else {
            console.log('Not enough money!')
            console.log(`Wingard needs ${(totalPriceForMovie - budget).toFixed(2)} leva more.`)
        }
    } else {
        let totalPriceForMovie = priceForDecor + priceForClothing
        if (budget >= totalPriceForMovie) {
            console.log("Action!")
            console.log(`Wingard starts filming with ${(budget - totalPriceForMovie).toFixed(2)} leva left.`)
        } else {
            console.log('Not enough money!')
            console.log(`Wingard needs ${(totalPriceForMovie - budget).toFixed(2)} leva more.`)
        }
    }




}
godzillaVsKong(["20000",
    "120",
    "55.5"])
