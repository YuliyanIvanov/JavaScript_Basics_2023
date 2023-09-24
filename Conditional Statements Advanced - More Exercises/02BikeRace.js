function moneyForCharity(input) {
  let juniors = Number(input[0]);
  let seniors = Number(input[1]);
  let type = input[2];

  let junorTax = 0;
  let seniorTax = 0;

  switch (type) {
    case "trail":
      junorTax = 5.5;
      seniorTax = 7;
      break;
    case "cross-country":
      junorTax = 8;
      seniorTax = 9.5;

      let particepents = juniors + seniors;

      if (particepents >= 50) {
        junorTax -= junorTax * 0.25;
        seniorTax -= seniorTax * 0.25;
      }
      break;
    case "downhill":
      junorTax = 12.25;
      seniorTax = 13.75;
      break;
    case "road":
      junorTax = 20;
      seniorTax = 21.5;
      break;
  }

  let juniorTotal = junorTax * juniors;
  let seniorTotal = seniorTax * seniors;

  let totalMoney = juniorTotal + seniorTotal;

  totalMoney *= 0.95;

  console.log(totalMoney.toFixed(2));
}

moneyForCharity(["10", "20", "trail"]);
moneyForCharity(["21", "26", "cross-country"]);
moneyForCharity(["30", "25", "cross-country"]);
moneyForCharity(["10", "10", "downhill"]);
moneyForCharity(["3", "40", "road"]);
