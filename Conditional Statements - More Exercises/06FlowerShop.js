function flowerShop(input) {
  let magnolias = Number(input[0]);
  let hyacinths = Number(input[1]);
  let roses = Number(input[2]);
  let cacti = Number(input[3]);
  let giftPrice = Number(input[4]);

  let magnoliasPrice = magnolias * 3.25;
  let hyacinthsPrice = hyacinths * 4;
  let rosesPrice = roses * 3.5;
  let cactiPrice = cacti * 8;

  let profit = magnoliasPrice + hyacinthsPrice + rosesPrice + cactiPrice;
  let profitAfterTax = profit - profit * 0.05;

  if (profitAfterTax >= giftPrice) {
    let moneyLeft = Math.floor(profitAfterTax - giftPrice);
    console.log(`She is left with ${moneyLeft} leva.`);
  } else {
    let moneyNeeded = Math.ceil(giftPrice - profitAfterTax);
    console.log(`She will have to borrow ${moneyNeeded} leva.`);
  }
}

flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);
