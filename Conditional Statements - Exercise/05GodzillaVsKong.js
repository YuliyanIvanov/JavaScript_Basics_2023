function movie(input) {
  let budget = Number(input[0]);
  let extras = Number(input[1]);
  let costumesPerPerson = Number(input[2]);

  let decorPrice = 0.1 * budget;
  let costumesCost = extras * costumesPerPerson;

  if (extras > 150) {
    costumesCost *= 0.9;
  }

  let totalPrice = decorPrice + costumesCost;

  if (budget >= totalPrice) {
    let moneyLeft = budget - totalPrice;
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  } else {
    let moneyNeeded = totalPrice - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
  }
}

movie(["20000", "120", "55.5"]);
movie(["15437.62", "186", "57.99"]);
movie(["9587.88", "222", "55.68"]);
