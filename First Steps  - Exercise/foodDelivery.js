function foodDelivery(input){
    let numberChikenMenu = Number (input[0])
    let numberFishMenu = Number (input[1])
    let numberVegetarianMenu = Number (input[2])
    let priceforChikenMenu = Number (numberChikenMenu * 10.35)
    let priceForFishMenu = Number (numberFishMenu * 12.40)
    let priceForVegetariansMenu = Number (numberVegetarianMenu * 8.15)
    let totalPriceMenu = Number (priceforChikenMenu + priceForFishMenu + priceForVegetariansMenu)
    let discountPercent = 20
    let priceForDesert =Number(totalPriceMenu*20/100)
    let totalPriceForOrder = totalPriceMenu + priceForDesert + 2.50
    console.log (totalPriceForOrder)
}
foodDelivery (["9",
"2",
"6"]
)