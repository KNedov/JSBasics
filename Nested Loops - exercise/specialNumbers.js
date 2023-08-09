function specialNumbers(input) {
  let n = input[0];
  let afterBuff = "";
  for (let i = 1; i <= 9; i++) {
    for (let f = 1; f <= 9; f++) {
      for (let g = 1; g <= 9; g++) {
        for (let h = 1; h <= 9; h++) {
          let sumNum = `${i}${f}${g}${h}`;
          let buff = "";
          for (let s = 0; s < sumNum.length; s++) {
            n = Number(n);
            let index = s;
            let sNum = Number(sumNum[index]);
            let cal = 0;
            if (n % sNum === 0) {
              buff += sNum;
            }
            if (sumNum.length === buff.length) {
              afterBuff += `${buff} `;
              buff = 0;
            }
          }
        }
      }
    }
  }
  console.log(`${afterBuff} `);
}
specialNumbers(["16"]);
