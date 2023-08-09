function oldBooks(input) {
  let index = 0;
  let anysBook = input[index];
  index++;
  let searchingBook = input[index];
  index++;
  let checkedBooks = 0;
  let bookIsFound = false;
  while (searchingBook !== "No More Books") {
    if (searchingBook === anysBook) {
      bookIsFound = true;
      break;
    }
    checkedBooks++;
    searchingBook = input[index];
    index++;
  }
  if (bookIsFound === false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${checkedBooks} books.`);
  } else {
    console.log(`You checked ${checkedBooks} books and found it.`);
  }
}
oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
