function cinemaTickets(input) {
  let index = 0;
  let finish = input[index];
  let name = input[index];
  let freeSpace = Number(input[++index]);
  let command = input[++index];

  let studentTickets = 0;
  let standartTickets = 0;
  let kidTickets = 0;
  let isFull = false;
  let totalTicketCounter = 0;

  while (name !== "Finish") {
    let ticket = 0;
    while (command !== "End") {
      switch (command) {
        case "student":
          studentTickets++;
          break;
        case "standard":
          standartTickets++;
          break;
        case "kid":
          kidTickets++;

        default:
          break;
      }
      ticket++;
      if (ticket >= freeSpace) {
        isFull = true;

        break;
      }

      index++;
      command = input[index];
    }

    console.log(`${name} - ${((ticket / freeSpace) * 100).toFixed(2)}% full.`);
    totalTicketCounter += ticket;
    command = input[++index];
    name = command;
    command = input[++index];
    freeSpace = Number(command);
    command = input[++index];
  }
  console.log(`Total tickets: ${totalTicketCounter}`);
  console.log(
    `${((studentTickets / totalTicketCounter) * 100).toFixed(
      2
    )}% student tickets.`
  );
  console.log(
    `${((standartTickets / totalTicketCounter) * 100).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((kidTickets / totalTicketCounter) * 100).toFixed(2)}% kids tickets.`
  );
}
cinemaTickets (['Shutter Island'
,'9'
,'standard'
,'standard'
,'standard'
,'student'
,'student'
,'student'
,'kid'
,'kid'
,'kid'
,'Rush'
,'9'
,'standard'
,'standard'
,'standard'
,'student'
,'student'
,'student'
,'kid'
,'kid'
,'kid'
,'Deadpool'
,'9'
,'standard'
,'standard'
,'standard'
,'student'
,'student'
,'student'
,'kid'
,'kid'
,'kid'
,'Finish'])