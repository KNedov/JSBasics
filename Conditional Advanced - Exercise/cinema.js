function cinema(input) {
    let projection = input[0];
    let lines = Number(input[1]);
    let columbs = Number(input[2]);
    switch (projection) {
        case "Premiere": console.log(`${(lines * columbs * 12).toFixed(2)} leva`); break;
        case "Normal": console.log(`${(lines * columbs * 7.50).toFixed(2)} leva`); break;
        case "Discount": console.log(`${(lines * columbs * 5.00).toFixed(2)} leva`); break;
    }

} cinema(["Normal",
    "21",
    "13"])
