function operationsBetweenNumbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];
  switch (operator) {
    case "+":
      let sum = n1 + n2;
      if (sum % 2 === 0) {
        console.log(`${n1} + ${n2} = ${sum} - even`);
      } 
      else{
        console.log(`${n1} + ${n2} = ${sum} - odd`);
      }
      break;
    case "-":
      let diff = n1 - n2;
      if (diff % 2 === 0) {
        console.log(`${n1} - ${n2} = ${diff} - even`);
      }else{
        console.log(`${n1} - ${n2} = ${diff} - odd`);
      }break;
    case "*":
      let product = n1 * n2;
      if (product % 2 === 0) {
        evenOdd = "even";
        console.log(`${n1} * ${n2} = ${product} - even`);
      } else{
        console.log(`${n1} * ${n2} = ${product} - odd`);
      }
      break;


    case "/":
      if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        console.log(`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`);
      }
      break;
    case "%":
      if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        console.log(`${n1} % ${n2} = ${n1 % n2}`);
      }
      break;
  }
}
operationsBetweenNumbers(["10", "12", "+"]);
