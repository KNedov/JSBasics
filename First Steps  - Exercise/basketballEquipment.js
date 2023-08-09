function basketballEquipment (input){
    let taxForYear = Number (input[0])
    let priceForbasketSeakers = Number (taxForYear - (0.4 * taxForYear))
    let outfitForBasket = Number (priceForbasketSeakers-(0.2*priceForbasketSeakers))
    let priceForBall = Number (outfitForBasket/4)
    let priceAccessories = Number (priceForBall/5)
    let totalPrice = taxForYear + priceForbasketSeakers + outfitForBasket + priceForBall + priceAccessories
    console.log(totalPrice)
}
basketballEquipment (["365"])