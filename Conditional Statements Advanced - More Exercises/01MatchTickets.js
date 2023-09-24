function matchTikets(input) {
  let budget = Number(input[0]);
  let tiketTipe = input[1];
  let peopleGroup = Number(input[2]);

  let forTransport = 0;
  let totalExp = 0;

  if (peopleGroup < 5) {
    forTransport = budget * 0.75;
  } else if (peopleGroup < 10) {
    forTransport = budget * 0.6;
  } else if (peopleGroup < 24) {
    forTransport = budget * 0.5;
  } else if (peopleGroup < 50) {
    forTransport = budget * 0.4;
  } else {
    forTransport = budget * 0.25;
  }

  if (tiketTipe === `VIP`) {
    totalExp = peopleGroup * 499.99 + forTransport;
  } else {
    totalExp = peopleGroup * 249.99 + forTransport;
  }

  let diff = Math.abs(totalExp - budget);

  if (totalExp > budget) {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  } else {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  }
}

matchTikets(["1000", "Normal", "1"]);
matchTikets(["30000", "VIP", "49"]);
