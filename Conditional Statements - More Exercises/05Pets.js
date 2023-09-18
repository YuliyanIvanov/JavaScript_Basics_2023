function pets(input) {
  let days = Number(input[0]);
  let foodGiven = Number(input[1]);
  let dogFoodForADay = Number(input[2]);
  let catFoodForADay = Number(input[3]);
  let turtleFoodForADay = Number(input[4]);

  let totalFoodNeeded = Math.ceil(
    days * (dogFoodForADay + catFoodForADay + turtleFoodForADay * 0.001)
  );

  if (foodGiven >= totalFoodNeeded) {
    console.log(
      `${Math.ceil(foodGiven - totalFoodNeeded)} kilos of food left.`
    );
  } else {
    console.log(
      `${Math.ceil(totalFoodNeeded - foodGiven)} more kilos of food are needed.`
    );
  }
}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);
