function yardGreening(input){
    let totalYardsPrice = Number ([input[0]]*[7.61])
    let discount = Number ([0.18] * [totalYardsPrice])
    let finalPrice = ([totalYardsPrice] - [discount])
   
    console.log (`The final price is: ${finalPrice} lv.`)
    console.log (`The discount is: ${discount} lv.`)
}
yardGreening([550])