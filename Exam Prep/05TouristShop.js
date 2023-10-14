function shop(input) {
  let budget = Number(input[0]);
  let productCount = 0;
  let totalCost = 0;
  let i = 1;

  while (i < input.length) {
    let productName = input[i];

    if (productName === "Stop") {
      break;
    }

    let productPrice = Number(input[i + 1]);

    if (isNaN(productPrice)) {
      console.log("Invalid input. Please provide a valid product price.");
      return;
    }

    productCount++;

    if (productCount % 3 === 0) {
      productPrice /= 2;
    }

    totalCost += productPrice;

    if (totalCost > budget) {
      console.log("You don't have enough money!");
      console.log(`You need ${(totalCost - budget).toFixed(2)} leva!`);
      return;
    }

    i += 2;
  }

  console.log(
    `You bought ${productCount} products for ${totalCost.toFixed(2)} leva.`
  );
}
// let budget = Number(input[0]);
// let productCount = 0;
// let totalCost = 0;

// for (let i = 1; i < input.length; i += 2) {
//   let productName = input[i];
//   if (productName === "Stop") {
//     break;
//   }

//   let productPrice = Number(input[i + 1]);

//   if (isNaN(productPrice)) {
//     console.log("Invalid input. Please provide a valid product price.");
//     return;
//   }

//   productCount++;

//   if (productCount % 3 === 0) {
//     productPrice /= 2;
//   }

//   totalCost += productPrice;

//   if (totalCost > budget) {
//     console.log("You don't have enough money!");
//     console.log(`You need ${(totalCost - budget).toFixed(2)} leva!`);
//     return;
//   }
// }

// console.log(
//   `You bought ${productCount} products for ${totalCost.toFixed(2)} leva.`
// );
//}

shop([
  "153.20",
  "Backpack",
  "25.20",
  "Shoes",
  "54",
  "Sunglasses",
  "30",
  "Stop",
]);
shop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);
