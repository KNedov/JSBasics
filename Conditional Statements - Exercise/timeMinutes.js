function timeMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1])
    let sum15min = minutes + 15
    if (sum15min >= 60){
        hours+=1
    sum15min -=60}
    if (hours >= 24) {
        hours -= 24
    } 
    if (sum15min<10){
        console.log (`${hours}:0${sum15min}`)
    }else {
        console.log (`${hours}:${sum15min}`)
    }



}
timeMinutes(["0", "01"])