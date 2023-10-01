function books(input) {
  let targetBook = input[0];

  let command = input[1];
  let index = 2;
  let bookChecked = 0;

  while (command !== `No More Books`) {
    if (command === targetBook) {
      console.log(`You checked ${bookChecked} books and found it.`);
      break;
    }

    bookChecked++;

    command = input[index];
    index++;
  }

  if (command === `No More Books`) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${bookChecked} books.`);
  }
}

books(["Troy", "Stronger", "Life Style", "Troy"]);
books([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
books([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
