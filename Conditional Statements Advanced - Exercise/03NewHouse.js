function flowers(input) {
  let flower = input[0];
  let qty = Number(input[1]);
  let budget = Number(input[2]);

  let price;

  switch (flower) {
    case `Roses`:
      if (qty <= 80) {
        price = qty * 5;
      } else if (qty > 80) {
        price = qty * 5 * 0.9;
      }
      break;
    case `Dahlias`:
      if (qty <= 90) {
        price = qty * 3.8;
      } else if (qty > 90) {
        price = qty * 3.8 * 0.85;
      }
      break;
    case `Tulips`:
      if (qty <= 80) {
        price = qty * 2.8;
      } else if (qty > 80) {
        price = qty * 2.8 * 0.85;
      }
      break;
    case `Narcissus`:
      if (qty >= 120) {
        price = qty * 3;
      } else if (qty < 120) {
        price = qty * 3 * 1.15;
      }
      break;
    case `Gladiolus`:
      if (qty >= 80) {
        price = qty * 2.5;
      } else if (qty < 80) {
        price = qty * 2.5 * 1.2;
      }
      break;
    default:
      break;
  }
  if (budget >= price) {
    let moneyleft = budget - price;
    console.log(
      `Hey, you have a great garden with ${qty} ${flower} and ${moneyleft.toFixed(
        2
      )} leva left.`
    );
  } else {
    let moneyNeeded = price - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}

flowers(["Roses", "55", "250"]);
flowers(["Tulips", "88", "260"]);
flowers(["Narcissus", "119", "360"]);
