function fuelTankTwo(input) {
  let fuelType = input[0];
  let fuelAmount = Number(input[1]);
  let hasDiscountCard = input[2] === "Yes";

  let fuelPricePerLiter;

  switch (fuelType) {
    case "Gasoline":
      fuelPricePerLiter = 2.22;
      break;
    case "Diesel":
      fuelPricePerLiter = 2.33;
      break;
    case "Gas":
      fuelPricePerLiter = 0.93;
      break;
    default:
      console.log("Invalid fuel type!");
      return;
  }

  if (hasDiscountCard) {
    switch (fuelType) {
      case "Gasoline":
        fuelPricePerLiter -= 0.18;
        break;
      case "Diesel":
        fuelPricePerLiter -= 0.12;
        break;
      case "Gas":
        fuelPricePerLiter -= 0.08;
        break;
    }
  }

  let totalPrice = fuelAmount * fuelPricePerLiter;

  if (fuelAmount >= 20 && fuelAmount <= 25) {
    totalPrice *= 0.92;
  } else if (fuelAmount > 25) {
    totalPrice *= 0.9;
  }

  console.log(`${totalPrice.toFixed(2)} lv.`);
}

fuelTankTwo(["Gas", "30", "Yes"]);
fuelTankTwo(["Gasoline", "25", "No"]);
fuelTankTwo(["Diesel", "19", "No"]);
