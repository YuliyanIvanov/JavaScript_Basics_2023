function pcStore(input) {
  let cpuPriceInUSD = Number(input[0]);
  let gpuPriceInUSD = Number(input[1]);
  let ramPriceInUSD = Number(input[2]);

  let ramQty = Number(input[3]);
  let discount = Number(input[4]);

  let cpuPriceInBGN = cpuPriceInUSD * 1.57;
  let gpuPriceInBGN = gpuPriceInUSD * 1.57;
  let ramPriceInBGN = ramPriceInUSD * 1.57;

  let totalRAM = ramQty * ramPriceInBGN;
  let cpuPriceAfterDiscount = cpuPriceInBGN - cpuPriceInBGN * discount;
  let gpuPriceAfterDiscount = gpuPriceInBGN - gpuPriceInBGN * discount;

  let totalCost = cpuPriceAfterDiscount + gpuPriceAfterDiscount + totalRAM;

  console.log(`Money needed - ${totalCost.toFixed(2)} leva.`);
}

pcStore(["500", "200", "80", "2", "0.05"]);
pcStore(["1200", "850", "120", "4", "0.1"]);
pcStore(["200", "100", "80", "1", "0.01"]);
