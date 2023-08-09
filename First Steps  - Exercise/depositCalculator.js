function DepositCalculator(input){
    let deposit=Number(input[0])
    let depositTerm=Number(input[1])
    let APR=Number(input[2]/100)
    let amount=(deposit+depositTerm*((deposit * APR )/12))
    console.log(amount)
}
DepositCalculator(["2350","6","7"])