function toyShop(input) {
  let tripPrice = Number(input[0]);
  let puzzels = Number(input[1]);
  let talkingDolls = Number(input[2]);
  let teddyBear = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let puzzelsPrice = puzzels * 2.6;
  let talkingDollsPrice = talkingDolls * 3;
  let teddyBearPrice = teddyBear * 4.1;
  let minionsPrice = minions * 8.2;
  let trucksPrice = trucks * 2;

  let profit =
    puzzelsPrice +
    talkingDollsPrice +
    teddyBearPrice +
    minionsPrice +
    trucksPrice;

  let toysCount = puzzels + talkingDolls + teddyBear + minions + trucks;

  if (toysCount >= 50) {
    profit = profit - profit * 0.25;
    // profit *= 0.75;
  }

  let rent = profit * 0.1;

  let moneyLeft = profit - rent;
//   let moneyLeftAfterTrip = 0;
//   let neededMoney = 0;

  let diff = Math.abs(moneyLeft - tripPrice);

//   if (moneyLeft > tripPrice) {
//     moneyLeftAfterTrip = moneyLeft - tripPrice;
//   } else {
//     neededMoney = tripPrice - moneyLeft;
//   }

  if (moneyLeft >= tripPrice) {
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
