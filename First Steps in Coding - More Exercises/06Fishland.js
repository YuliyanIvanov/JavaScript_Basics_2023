function fishMarket(input) {
    
  let mackerelKgPrice = Number(input[0]);
  let spratKgPrice = Number(input[1]);
  let bonitoKg = Number(input[2]);
  let scadKg = Number(input[3]);
  let clamsKg = Number(input[4]);

  let bonitoKgPrize = bonitoKg * (mackerelKgPrice + 0.6 * mackerelKgPrice);
  let scadKgPrize = scadKg * (spratKgPrice + 0.8 * spratKgPrice);
  let clamsPrize = clamsKg * 7.5;

  let total = bonitoKgPrize + scadKgPrize + clamsPrize;

  console.log(total.toFixed(2));
}

fishMarket(["6.90", "4.20", "1.5", "2.5", "1"]);
fishMarket(["5.55", "3.57", "4.3", "3.6", "7"]);
