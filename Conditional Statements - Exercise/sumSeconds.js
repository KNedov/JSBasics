function sumSeconds(input) {
    let firstTime = Number(input[0])
    let secondTime = Number(input[1])
    let thirdTime = Number(input[2])
    let totalTime = firstTime + secondTime + thirdTime
    let totalTimeMin = Math.floor(totalTime / 60)
    let totalTimeSec = totalTime % 60
    if (totalTimeSec < 10) {
        console.log(`${totalTimeMin}:0${totalTimeSec}`)
    } else console.log(`${totalTimeMin}:${totalTimeSec}`)

}

sumSeconds(["14", "12",
"10"])
