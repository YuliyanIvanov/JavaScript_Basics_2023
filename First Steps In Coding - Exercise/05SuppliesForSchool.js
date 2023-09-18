function school(input) {
  let pens = Number(input[0] * 5.8);
  let markers = Number(input[1] * 7.2);
  let boardCleaner = Number(input[2] * 1.2);
  let discount = Number(input[3] / 100);

  let totalSupplies = pens + markers + boardCleaner;
  let totalPlusDiscount = totalSupplies - (totalSupplies * discount);

  console.log(totalPlusDiscount);
}

school(["2 ", "3 ", "4 ", "25 "]);
school(["4 ", "2 ", "5 ", "13 "]);
