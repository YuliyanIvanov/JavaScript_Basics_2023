function ski(input) {
  let days = Number(input[0]);
  let spaceType = input[1];
  let review = input[2];

  let nights = days - 1;
  let price;

  switch (spaceType) {
    case `room for one person`:
      price = nights * 18;

      break;
    case `apartment`:
      price = nights * 25;
      if (nights < 10) {
        price *= 0.7;
      } else if (nights <= 15) {
        price *= 0.65;
      } else {
        price *= 0.5;
      }
      break;
    case `president apartment`:
      price = nights * 35;
      if (nights < 10) {
        price *= 0.9;
      } else if (nights <= 15) {
        price *= 0.85;
      } else {
        price *= 0.8;
      }
      break;
    default:
      break;
  }

  if (review === `positive`) {
    price *= 1.25;
  } else {
    price *= 0.9;
  }
  console.log(price.toFixed(2));
}

ski(["14", "apartment", "positive"]);
ski(["30", "president apartment", "negative"]);
ski(["12", "room for one person", "positive"]);
ski(["2", "apartment", "positive"]);
