function onTimeForTheExam(input) {
  let hour = Number(input[0]);
  let minutes = Number(input[1]);
  let hoursOfArrival = Number(input[2]);
  let minutesOfArrival = Number(input[3]);
  let sumHour = hour * 60 + minutes - (hoursOfArrival * 60 + minutesOfArrival);
  let min = Number(0);
  let hs = Number(0);
  if (sumHour < 0 && sumHour > -60) {
    console.log("Late");
    if (sumHour < 60) {
      min = hoursOfArrival * 60 + minutesOfArrival - (hour * 60 + minutes);
      console.log(`${min} minutes after the start`);
    } else console.log(`${minutesOfArrival - minutes} minutes after the start`);
  } else if (sumHour <= -60) {
    console.log("Late");
    if (sumHour <= -60) {
      min = sumHour % 60;
      min = min * -1;
      if (minutesOfArrival < min) {
        hs = hoursOfArrival - hour - 1;
      } else {
        hs = hoursOfArrival - hour;
      }
      if (min < 10) {
        console.log(`${hs}:0${min} hours after the start`);
      } else {
        console.log(`${hs}:${min} hours after the start`);
      }
    }
  } else if (sumHour < 60 && sumHour !== 0) {
    if (sumHour <= 30) {
      console.log("On time");

      console.log(`${sumHour} minutes before the start`);
    } else {
      console.log("Early");
      console.log(`${sumHour}} minutes before the start`);
    }
  } else if (sumHour >= 60 && sumHour !== 0) {
    console.log("Early");
    if (sumHour >= 60) {
      min = sumHour % 60;
      if (minutesOfArrival > minutes) {
        hs = hour - hoursOfArrival - 1;
      } else hs = hour - hoursOfArrival;
      if (min < 10) {
        console.log(`${hs}:0${min} hours before the start`);
      } else {
        console.log(`${hs}:${min} hours before the start`);
      }
    }
  } else {
    console.log("On time");
  }
}
onTimeForTheExam(["9", "30", "10", "10"]);
