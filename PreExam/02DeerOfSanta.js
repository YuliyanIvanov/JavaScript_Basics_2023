function santaDeers(input) {
  let daysAlone = Number(input[0]);
  let foodProvided = Number(input[1]);
  let foodForFirstDeer = Number(input[2]);
  let foodForSecondDeer = Number(input[3]);
  let foodForThirdDeer = Number(input[4]);

  let firstDeer = daysAlone * foodForFirstDeer;
  let secondDeer = daysAlone * foodForSecondDeer;
  let thirdDeer = daysAlone * foodForThirdDeer;

  let neededFoodTotal = firstDeer + secondDeer + thirdDeer;

  let diff = Math.abs(foodProvided - neededFoodTotal);

  if (neededFoodTotal <= foodProvided) {
    console.log(`${Math.floor(diff)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
  }
}

santaDeers(["2", "10", "1", "1", "2"]);
santaDeers(["5", "10", "2.1", "0.8", "11"]);
