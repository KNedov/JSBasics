function worldSwimmingRecord(input) {
    let recordInSec = Number(input[0])
    let lenghtInMeter = Number(input[1])
    let secForOneMeter = Number(input[2])

    let ivanTime = lenghtInMeter * secForOneMeter
    let adds = Math.floor(lenghtInMeter / 15) * 12.5
    let totalTime = ivanTime + adds
    if (totalTime < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)



    } else {
        console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`)
    }

}
worldSwimmingRecord(["55555.67",
    "3017",
    "5.03"])
