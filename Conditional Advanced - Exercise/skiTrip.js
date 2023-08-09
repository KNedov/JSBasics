function skiTrip(input) {
  let day = Number(input[0]);
  let nights=day-1
  let typeRoom = input[1];
  let rating = input[2];
  let roomForOnePerson = 18;
  let apartment = 25;
  let presidentApartment = 35;
  let discount=0;
  let priceForRoom=0;
  let ratingPrice
  switch (typeRoom) {
    case "room for one person":
        priceForRoom=roomForOnePerson*nights;break;
    case "apartment":
        priceForRoom=apartment*nights
       if (nights<10){
        priceForRoom=apartment*nights
        discount=priceForRoom*0.30
        priceForRoom-=discount
       }else if (nights>=10 && nights<=15){
        discount=priceForRoom*0.35
        priceForRoom-=discount
       }else {
        discount=priceForRoom*0.50
        priceForRoom-=discount
 }break;
    case "president apartment":
        priceForRoom= presidentApartment*nights
        priceForRoom=presidentApartment*nights
        if (nights<10){
         priceForRoom=presidentApartment*nights
         discount=priceForRoom*0.10
         priceForRoom-=discount
        }else if (nights>=10 && nights<=15){
         discount=priceForRoom*0.15
         priceForRoom-=discount
        }else {
         discount=priceForRoom*0.20
         priceForRoom-=discount
};break;
}if(rating=="positive"){
  ratingPrice  = priceForRoom*0.25
    console.log((priceForRoom+ratingPrice).toFixed(2))
}else if ("negative"){
    ratingPrice  = priceForRoom*0.10
    console.log((priceForRoom-ratingPrice).toFixed(2))
}
}
skiTrip(["2",
"apartment",
"positive"])



