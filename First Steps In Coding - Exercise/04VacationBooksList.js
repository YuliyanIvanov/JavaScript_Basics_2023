function books(input) {
  let numPages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let numDays = Number(input[2]);

  let totalBook = numPages / pagesPerHour;
  let hoursneeded = totalBook / numDays;

  console.log(hoursneeded);
}

books(["212 ", "20 ", "2 "]);
books(["432 ", "15 ", "4 "]);
