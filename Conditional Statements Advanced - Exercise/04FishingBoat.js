function fishing(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermen = Number(input[2]);

  let springRent = 3000;
  let summerRent = 4200;
  let autumnRent = 4200;
  let winterRent = 2600;

  let total;
  let discount;

  switch (season) {
    case `Spring`:
      total = springRent;
      break;
    case `Summer`:
      total = summerRent;
      break;
    case `Autumn`:
      total = autumnRent;
      break;
    case `Winter`:
      total = winterRent;
      break;

    default:
      break;
  }
  if (fishermen <= 6) {
    discount = total * 0.1;
    total = total - discount;
  } else if (fishermen <= 11) {
    discount = total * 0.15;
    total = total - discount;
  } else if (fishermen >= 12) {
    discount = total * 0.25;
    total = total - discount;
  }

  if (fishermen % 2 == 0 && season != `Autumn`) {
    discount = total * 0.05;
    total = total - discount;
  }
  if (budget >= total) {
    let moneyLeft = budget - total;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else if (budget < total) {
    let moneyNeeded = total - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}

fishing(["3000", "Summer", "11"]);
fishing(["3600", "Autumn", "6"]);
fishing(["2000", "Winter", "13"]);
