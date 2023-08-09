function repainting(input){
    let nylon = Number(input[0])
    let literPaint = Number (input[1])
    let diluent = Number (input[2])
    let timeFinishWork = Number (input[3])
    let priceForNylon = Number(nylon+2)
    let percentageToAdd = 10
    let priceforPaint = Number (literPaint +(literPaint*(percentageToAdd / 100)))
    let totPriceNylon = Number (priceForNylon*1.50)
    let totPricePaint = Number (priceforPaint * 14.50)
    let priceForDiluent = Number (diluent*5.000)
    let totalPriceMats = Number (totPriceNylon + totPricePaint + priceForDiluent+0.40)
    let percent30 = 30
    let priceWorker = Number ((totalPriceMats*(percent30 / 100))*timeFinishWork)
    let totalPrice = totalPriceMats + priceWorker
    console.log (totalPrice)
}
repainting (
    ["5",
    "10",
    "10",
    "1"])    