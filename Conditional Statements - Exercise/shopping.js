function shopping(input) {
    let Buget = (input[0]);
    let gpu = (input[1]);
    let cpu = (input[2]);
    let ram = (input[3]);

    let priceGPU = gpu * 250
    let sumCPU = 0.35 * priceGPU
    let sumRam = 0.10 * priceGPU
    let priceCpu = sumCPU * cpu
    let priceRam = sumRam * ram
    totPrice = priceCpu + priceGPU + priceRam
    if (gpu > cpu) {
        totPrice = priceCpu + priceGPU + priceRam
        totPrice *= 0.85
        if (totPrice <= Buget) {
            console.log(`You have ${(Buget - totPrice).toFixed(2)} leva left!`)
        } else {
            console.log(`Not enough money! You need ${(totPrice - Buget).toFixed(2)} leva more!`)
        }


    } else {
        totPrice = priceCpu + priceGPU + priceRam
        if (totPrice <= Buget) {
            console.log(`You have ${(Buget - totPrice).toFixed(2)} leva left!`)
        } else {
            console.log(`Not enough money! You need ${(totPrice - Buget).toFixed(2)} leva more!`)
        }

    }





}
shopping(["920.45",
    "3",
    "4",
    "1"])

