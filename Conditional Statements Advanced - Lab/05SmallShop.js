function shop(input) {
  let product = input[0];
  let city = input[1];
  let qty = Number(input[2]);

  switch (city) {
    case `Sofia`:
      if (product === `coffee`) {
        price = qty * 0.5;
      } else if (product === `water`) {
        price = qty * 0.8;
      } else if (product === `beer`) {
        price = qty * 1.2;
      } else if (product === `sweets`) {
        price = qty * 1.45;
      } else if (product === `peanuts`) {
        price = qty * 1.6;
      }
      break;
    case `Plovdiv`:
      if (product === `coffee`) {
        price = qty * 0.4;
      } else if (product === `water`) {
        price = qty * 0.7;
      } else if (product === `beer`) {
        price = qty * 1.15;
      } else if (product === `sweets`) {
        price = qty * 1.3;
      } else if (product === `peanuts`) {
        price = qty * 1.5;
      }
      break;
    case `Varna`:
      if (product === `coffee`) {
        price = qty * 0.45;
      } else if (product === `water`) {
        price = qty * 0.7;
      } else if (product === `beer`) {
        price = qty * 1.1;
      } else if (product === `sweets`) {
        price = qty * 1.35;
      } else if (product === `peanuts`) {
        price = qty * 1.55;
      }
      break;
  }
  console.log(price);
}

shop(["coffee", "Varna", "2"]);
shop(["peanuts", "Plovdiv", "1"]);
shop(["beer", "Sofia", "2"]);
shop(["water", "Plovdiv", "2"]);
shop(["sweets", "Sofia", "2.23"]);
