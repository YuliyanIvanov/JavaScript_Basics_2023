function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let destination = ``;
  let accommodation = ``;
  let expenses;

  switch (season) {
    case `summer`:
      if (budget <= 100) {
        destination = `Bulgaria`;
        accommodation = `Camp`;
        expenses = budget * 0.3;
      } else if (budget <= 1000) {
        destination = `Balkans`;
        accommodation = `Camp`;
        expenses = budget * 0.4;
      } else {
        destination = `Europe`;
        accommodation = `Hotel`;
        expenses = budget * 0.9;
      }
      break;
    case `winter`:
      if (budget <= 100) {
        destination = `Bulgaria`;
        accommodation = `Hotel`;
        expenses = budget * 0.7;
      } else if (budget <= 1000) {
        destination = `Balkans`;
        accommodation = `Hotel`;
        expenses = budget * 0.8;
      } else {
        destination = `Europe`;
        accommodation = `Hotel`;
        expenses = budget * 0.9;
      }
      break;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${accommodation} - ${expenses.toFixed(2)}`);
}

journey([50, "summer"]);
journey([75, "winter"]);
journey([312, "summer"]);
journey([678.53, "winter"]);
journey([1500, "summer"]);
