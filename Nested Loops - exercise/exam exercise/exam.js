function exam(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);
  let thirdNum = Number(input[2]);
  let nonPrime = true;
  for (let a = 1; a <= firstNum; a++) {
    for (let b = 1; b <= secondNum; b++) {
      for (let c = 1; c <= thirdNum; c++) {
        if (a % 2 == 0 && c % 2 == 0) {
          for (let index = 0; index < c; index++) {
            if (b/1===b&&b/b===1&&b%2!==0) {
              nonPrime = false;
            } 
         if (nonPrime === false) {
          console.log(`${a} ${b} ${c}`) }
        } 
       
            
          
        }
      }
    }
  }
}
exam(["3", "5", "5"]);
