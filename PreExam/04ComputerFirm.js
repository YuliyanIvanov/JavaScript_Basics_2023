function computerSales(input) {
  let n = Number(input[0]);
  let totalSales = 0;
  let totalRating = 0;

  for (let i = 1; i <= n; i++) {
    let data = input[i];
    let rating = Number(data % 10);
    let sales = Math.floor(data / 10);

    switch (rating) {
      case 2:
        totalSales += 0;
        break;
      case 3:
        totalSales += sales * 0.5;
        break;
      case 4:
        totalSales += sales * 0.7;
        break;
      case 5:
        totalSales += sales * 0.85;
        break;
      case 6:
        totalSales += sales;
        break;
    }

    totalRating += rating;
  }

  let averageRating = totalRating / n;

  console.log(totalSales.toFixed(2));
  console.log(averageRating.toFixed(2));
}

computerSales(["3", "103", "103", "103"]);
computerSales(["5", "122", "156", "202", "214", "185"]);
computerSales(["2", "204", "206"]);
