function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    if (sales < 0.00) {
        console.log("error")
    }
    else if (city === "Sofia") {
        if (0 <= sales & sales <= 500) {
            console.log((sales * 0.05).toFixed(2));
        } else if (500 < sales & sales <= 1000) {
            console.log((sales * 0.07).toFixed(2));
        } else if (1000 < sales & sales <= 10000) {
            console.log((sales * 0.08).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 0.12).toFixed(2))
        }
    } else if (city === "Varna") {
        if (0 <= sales & sales <= 500) {
            console.log((sales * 0.045).toFixed(2));
        } else if (500 < sales & sales <= 1000) {
            console.log((sales * 0.075).toFixed(2));
        } else if (1000 < sales & sales <= 10000) {
            console.log((sales * 0.10).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 0.13).toFixed(2))
        }
    } else if (city === "Plovdiv") {
        if (0 < sales & sales <= 500) {
            console.log((sales * 0.055).toFixed(2));
        } else if (500 < sales & sales <= 1000) {
            console.log((sales * 0.08).toFixed(2));
        } else if (1000 < sales & sales <= 10000) {
            console.log((sales * 0.12).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 0.145).toFixed(2))
        }
    }
    else if (city !== "Sofia" | city !== "Plovdiv" | city !== "Varna") {
        console.log("error")
    }


} tradeCommissions(["Plovdiv", "-3874.50"])

//Град  0 ≤ s ≤ 500       500 < s ≤ 1 000        1 000 < s ≤ 10 000       s > 10 000

//Sofia     5%                  7%                         8%                    12%

//Varna     4.5%                7.5%                       10%                  13%

//Plovdiv   5.5%                8%                          12%                 14.5%