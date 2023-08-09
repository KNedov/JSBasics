function password(input) {
  let index = 0;
  let name = input[index];

  index++;
  let pass = input[index];
  index++;
  let currentPass = input[index];

  index++;
  while (currentPass !== pass) {
    data = Number(input[index]);
    index++;
    break;
  }
  console.log(`Welcome ${name}!`);
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);
