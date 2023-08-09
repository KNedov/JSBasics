function hotelRoom(input) {
  let mounth = input[0];
  let nights = Number(input[1]);
  let studioPrice = 0;
  let apartmentPrice = 0;
  switch (mounth) {
    case "May":
    case "October":
      studioPrice = 50;
      apartmentPrice = 65;
      if (nights > 14) {
        studioPrice *= 0.7;
        apartmentPrice *= 0.9;
      } else if (nights > 7) {
        studioPrice *= 0.95;
      }
      break;
    case "June":
    case "September":
      studioPrice = 75.2;
      apartmentPrice = 68.7;
      if (nights > 14) {
        apartmentPrice *= 0.9;
        studioPrice *= 0.8;
      }
      break;
    case "July":
    case "August":
      studioPrice = 76;
      apartmentPrice = 77;
      if (nights > 14) {
        apartmentPrice *= 0.9;
      }
      break;
  }
  console.log(`Apartment: ${(apartmentPrice * nights).toFixed(2)} lv.`);
  console.log(`Studio: ${(studioPrice * nights).toFixed(2)} lv.`);
}

hotelRoom(["September", "15"]);
