function sumPrimeNonPrime(input) {
    let index = 0;
    let currentInput = input[index];
    let primesSum = 0;
    let nonPrimesSum = 0;
    let nonPrime = false;
    while (currentInput !== "stop") {
        let num = Number(currentInput);
        if (currentInput < 0) {
            console.log("Number is negative.");
            index++;
            currentInput = input[index];
            continue;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    nonPrime = true;
                    break;
                }
            }
        }
        if (nonPrime === true) {
            nonPrimesSum += num;
            nonPrime = false;
        } else {
            primesSum += num;
        }
        index++;
        currentInput = input[index];
    }

    console.log(`Sum of all prime numbers is: ${primesSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimesSum}`);
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
