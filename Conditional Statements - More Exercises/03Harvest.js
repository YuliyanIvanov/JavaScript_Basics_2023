function harvest(input) {
  let vineyard = Number(input[0]);
  let grapesForOneSqM = Number(input[1]);
  let wineVolume = Number(input[2]);
  let workers = Number(input[3]);

  let totalGrapeHarvest = vineyard * grapesForOneSqM;
  let wine = (0.4 / 2.5) * totalGrapeHarvest;

  if (wine >= wineVolume) {
    let wineLeft = Math.floor(wine - wineVolume);
    let wineForWorkers = Math.ceil(wineLeft / workers);

    console.log(
      `Good harvest this year! Total wine: ${wine.toFixed(0)} liters.`
    );
    console.log(
      `${wineLeft.toFixed(0)} liters left -> ${wineForWorkers.toFixed(
        0
      )} liters per person.`
    );
  } else {
    let wineNeeded = Math.floor(wineVolume - wine);

    console.log(
      `It will be a tough winter! More ${wineNeeded.toFixed(
        0
      )} liters wine needed.`
    );
  }
}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);
