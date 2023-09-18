function market(input) {
  let kiloVegPrice = Number(input[0]);
  let kiloFruitPrice = Number(input[1]);
  let kgVeg = Number(input[2]);
  let kgFruit = Number(input[3]);

  let vegTotal = kiloVegPrice * kgVeg;
  let fruitTotal = kiloFruitPrice * kgFruit;

  let total = vegTotal + fruitTotal;

  let profitInEuro = total / 1.94;

  console.log(`${profitInEuro.toFixed(2)}`);
}

market(["0.194", "19.4", "10", "10"]);
market(["1.5", "2.5", "10", "10"]);
