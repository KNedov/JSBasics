function histogram(input){
let numbCount = input[0];
let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;
for(let i=1; i<=numbCount;i++){
    let CurentNumber= Number(input[i]);
    if (CurentNumber<200){
        p1++;
       
    } else if (CurentNumber<=399){
        p2++;
    }else if (CurentNumber<=599){
        p3++
    }else if (CurentNumber<=799){
        p4++
    }else {
        p5++
    }

}console.log (`${((p1/numbCount)*100).toFixed(2)}%`)
console.log (`${((p2/numbCount)*100).toFixed(2)}%`)
console.log (`${((p3/numbCount)*100).toFixed(2)}%`)
console.log (`${((p4/numbCount)*100).toFixed(2)}%`)
console.log (`${((p5/numbCount)*100).toFixed(2)}%`)


}histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])
