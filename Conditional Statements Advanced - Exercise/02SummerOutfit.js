function outfit(input) {
  let temp = Number(input[0]);
  let timeOfDay = input[1];

  let outfit;
  let shoes;

  switch (timeOfDay) {
    case `Morning`:
      if (temp <= 18) {
        outfit = `Sweatshirt`;
        shoes = `Sneakers`;
      } else if (temp <= 24) {
        outfit = `Shirt`;
        shoes = `Moccasins`;
      } else if (temp >= 25) {
        outfit = `T-Shirt`;
        shoes = `Sandals`;
      }
      break;
    case `Afternoon`:
      if (temp <= 18) {
        outfit = `Shirt`;
        shoes = `Moccasins`;
      } else if (temp <= 24) {
        outfit = `T-Shirt`;
        shoes = `Sandals`;
      } else if (temp >= 25) {
        outfit = `Swim Suit`;
        shoes = `Barefoot`;
      }
      break;
    case `Evening`:
      if (temp <= 18) {
        outfit = `Shirt`;
        shoes = `Moccasins`;
      } else if (temp <= 24) {
        outfit = `Shirt`;
        shoes = `Moccasins`;
      } else if (temp >= 25) {
        outfit = `Shirt`;
        shoes = `Moccasins`;
      }
      break;
    default:
      break;
  }
  console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}

outfit(["16", "Morning"]);
outfit(["22", "Afternoon"]);
outfit(["28", "Evening"]);
