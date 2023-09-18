function trasportPrice(input) {
  let kilometers = Number(input[0]);
  let timeOfDay = input[1];

  let taxiStartPrice = 0.7;
  let taxyDayPrice = 0.79;
  let taxyNightPrice = 0.9;

  let dayPrice = taxiStartPrice + kilometers * taxyDayPrice;
  let nightPrice = taxiStartPrice + kilometers * taxyNightPrice;

  let busDayAndNightPrice = 0.09;

  let trainDayAndNightPrice = 0.06;

  if (kilometers < 20) {
    let taxiPrice;
    if (timeOfDay === "day") {
      taxiPrice = dayPrice;
    } else {
      taxiPrice = nightPrice;
    }
    console.log(taxiPrice.toFixed(2));
  } else if (kilometers < 100) {
    let busPrice = kilometers * busDayAndNightPrice;
    console.log(busPrice.toFixed(2));
  } else {
    let trainPrice = kilometers * trainDayAndNightPrice;
    console.log(trainPrice.toFixed(2));
  }
}

trasportPrice(["5", "day"]);
trasportPrice(["7", "night"]);
trasportPrice(["25", "day"]);
trasportPrice(["180", "night"]);
