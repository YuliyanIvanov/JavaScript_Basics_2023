function fuelTank(input) {
  let fuel = input[0].toLowerCase(); 
  let liters = Number(input[1]);

  switch (fuel) {
    case "diesel":
    case "gasoline":
    case "gas":
      if (liters >= 25) {
        console.log(`You have enough ${fuel}.`);
      } else {
        console.log(`Fill your tank with ${fuel}!`);
      }
      break;
    default:
      console.log("Invalid fuel!");
  }
}

fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);
