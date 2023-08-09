function newHouse(input) {
    let flower = input[0];
    let numFlower = Number(input[1]);
    let budget = Number(input[2]);
    let flowertotalPrice = 0;
    if (flower === "Roses") {
        if (numFlower > 80) {
            flowertotalPrice = (numFlower * 5) * 0.90
        } else {
            flowertotalPrice = numFlower * 5
        }
    } else if (flower === "Dahlias") {
        if (numFlower > 90) {
            flowertotalPrice = (numFlower * 3.80) * 0.85
        } else {
            flowertotalPrice = numFlower * 3.80
        }

    } else if (flower === "Tulips") {

        if (numFlower > 80) {
            flowertotalPrice = (numFlower * 2.80) * 0.85
        } else {
            flowertotalPrice = numFlower * 2.80
        }

    } else if (flower === "Narcissus") {
        if (numFlower < 120) {
            flowertotalPrice = (numFlower * 3) *1.15
        } else {
            flowertotalPrice = numFlower * 3
        }

    } else if (flower === "Gladiolus") {
        if (numFlower < 80) {
            flowertotalPrice = (numFlower * 2.5) * 1.20
        } else {
            flowertotalPrice = numFlower * 2.5
        }

    } if (flowertotalPrice <= budget) {
        console.log(`Hey, you have a great garden with ${numFlower} ${flower} and ${(budget - flowertotalPrice).toFixed(2)} leva left.`)
    } else { console.log(`Not enough money, you need ${(flowertotalPrice - budget).toFixed(2)} leva more.`) }

} newHouse(["Narcissus",
"119",
"360"])





//	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
//	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
//  Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
//	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
//	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
