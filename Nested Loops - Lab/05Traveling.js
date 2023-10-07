function travel(input) {
  let index = 0;

  while (true) {
    let destination = input[index];
    index++;

    if (destination === "End") {
      break;
    }

    let budgetNeeded = Number(input[index]);
    index++;

    let totalSaved = 0;

    while (totalSaved < budgetNeeded) {
      let savings = Number(input[index]);
      index++;
      totalSaved += savings;
    }

    console.log(`Going to ${destination}!`);
  }
}

travel([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
travel([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
