function lunchBreak(input) {
    nameSerial = input[0]
    durationSerial = Number(input[1])
    brakeTime = Number(input[2])
    lunchTime = brakeTime / 8
    relaxTime = brakeTime / 4

    let timeLeft = brakeTime - lunchTime - relaxTime
    if (timeLeft >= durationSerial) {
        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(timeLeft - durationSerial)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(durationSerial - timeLeft)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",
    "48",
    "60"])
