function yardGreening(input) {
  let area = Number(input[0]);
  let areaPrice = area * 7.61;
  let discount = 18 / 100;
  let priseWithDiscount = areaPrice * discount;
  let total = areaPrice - priseWithDiscount;

  console.log(`The final price is: ${total} lv.`);
  console.log(`The discount is: ${priseWithDiscount} lv.`);
}

yardGreening(["550"]);
yardGreening(["150"]);
