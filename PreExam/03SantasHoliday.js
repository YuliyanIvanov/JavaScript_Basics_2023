function santaHoliday(input) {
  let stayDays = Number(input[0]);
  let roomType = input[1];
  let rating = input[2];

  let pricePerNight = 0;

  switch (roomType) {
    case "room for one person":
      pricePerNight = 18.0;
      break;
    case "apartment":
      pricePerNight = 25.0;
      if (stayDays < 10) {
        pricePerNight *= 0.7;
      } else if (stayDays <= 15) {
        pricePerNight *= 0.65;
      } else {
        pricePerNight *= 0.5;
      }
      break;
    case "president apartment":
      pricePerNight = 35.0;
      if (stayDays < 10) {
        pricePerNight *= 0.9;
      } else if (stayDays <= 15) {
        pricePerNight *= 0.85;
      } else {
        pricePerNight *= 0.8;
      }
      break;
  }

  let totalCost = (stayDays - 1) * pricePerNight;

  if (rating === "positive") {
    totalCost *= 1.25;
  } else {
    totalCost *= 0.9;
  }

  console.log(totalCost.toFixed(2));
}

santaHoliday(["14", "apartment", "positive"]);
santaHoliday(["30", "president apartment", "negative"]);
santaHoliday(["12", "room for one person", "positive"]);
santaHoliday(["2", "apartment", "positive"]);
