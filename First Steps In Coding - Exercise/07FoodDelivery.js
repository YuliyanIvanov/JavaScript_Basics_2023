function foodDelovery(input) {
  let chikenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let vegyMenu = Number(input[2]);

  let chikenMenuPrice = chikenMenu * 10.35;
  let fishMenupPrice = fishMenu * 12.4;
  let vegyMenuPrice = vegyMenu * 8.15;

  let totalMenu = chikenMenuPrice + fishMenupPrice + vegyMenuPrice;
  let desert = totalMenu * 0.2;

  let total = totalMenu + desert + 2.5;

  console.log(total);
}

foodDelovery(["2 ", "4 ", "3 "]);
foodDelovery(["9 ", "2 ", "6 "]);
