function income(input) {
  let movie = input[0];
  let days = Number(input[1]);
  let tickets = Number(input[2]);
  let ticketPrice = Number(input[3]);
  let cinemaProfit = Number(input[4]);

  let tiketProfit = tickets * ticketPrice;
  let totalProfit = days * tiketProfit;
  let cinemaIncome = (totalProfit * cinemaProfit) / 100;

  let studioProfit = totalProfit - cinemaIncome;

  console.log(
    `The profit from the movie ${movie} is ${studioProfit.toFixed(2)} lv.`
  );
}

income(["The Programmer", "20", "500", "7.50", "7"]);
income(["Python Basics", "40", "34785", "10.45", "14"]);
income(["The Jungle", "22", "20500", "9.37", "30"]);
