function vacationBookList(input){
    let numberOfPages = Number(input[0]);
    let pagesFor1Hour=Number(input[1]);
    let numberOfDays=Number(input[2]);
    let totalHourForLearing=numberOfPages/pagesFor1Hour 
    let hoursPerDayForLearing= totalHourForLearing/numberOfDays
    console.log(hoursPerDayForLearing)

}
vacationBookList(["212","20","2"])