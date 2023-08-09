function suppliesforSchool(input){
    let numberOfPackagePens = Number((input[0])*5.80)
    let numberOFPackageMarkers = Number((input[1])*7.20)
    let literForCLeaner = Number((input[2])*1.20)
    let percentDiscount = Number((input[3])/100)
    let NeededMoney = Number (numberOfPackagePens + numberOFPackageMarkers + literForCLeaner)
    let totalNededMoney = Number(NeededMoney-(NeededMoney*percentDiscount))
    console.log (totalNededMoney)
}
 suppliesforSchool(["2","3","4","25"])