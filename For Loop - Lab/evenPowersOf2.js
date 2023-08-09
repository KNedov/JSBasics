function evenPowersOf2(input) {
  let n = Number(input[0]);
  let sum = 0;

  for (let i = 0; i <= n; i = i + 1) {
    if (i%2===0){
         let sum = Math.pow(2, i);
  
        console.log(sum)
    }
  }
}
evenPowersOf2(["4"])
