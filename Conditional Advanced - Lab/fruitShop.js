function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let num = Number(input[2])
    if (day === "Monday" | day === "Tuesday" | day === "Wednesday" | day === "Thursday" | day === "Friday") {
        switch (fruit) {
            case "banana": console.log((num * 2.50).toFixed(2)); break;
            case "apple": console.log((num * 1.20).toFixed(2)); break;
            case "orange": console.log((num * 0.85).toFixed(2)); break;
            case "grapefruit": console.log((num * 1.45).toFixed(2)); break;
            case "kiwi": console.log((num * 2.70).toFixed(2)); break;
            case "pineapple": console.log((num * 5.50).toFixed(2)); break;
            case "grapes": console.log((num * 3.85).toFixed(2)); break;
            default: console.log("error"); break;
        }

    } else if (day === "Saturday" | day === "Sunday") {
        switch (fruit) {
            case "banana": console.log((num * 2.70).toFixed(2)); break;
            case "apple": console.log((num * 1.25).toFixed(2)); break;
            case "orange": console.log((num * 0.90).toFixed(2)); break;
            case "grapefruit": console.log((num * 1.60).toFixed(2)); break;
            case "kiwi": console.log((num * 3).toFixed(2)); break;
            case "pineapple": console.log((num * 5.60).toFixed(2)); break;
            case "grapes": console.log((num * 4.20).toFixed(2)); break;
            default: console.log("error"); break;
        }

    } else {
        console.log("error")
    }

}


fruitShop(["apple", "Sunday", "0.5"])
//(Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday)
//(banana / apple / orange / grapefruit / kiwi / pineapple / grapes)
//плод banana  apple  orange  grapefruit   kiwi   pineapple grapes
//цена  2.70   1.25    0.90      1.60      3.00     5.60     4.20