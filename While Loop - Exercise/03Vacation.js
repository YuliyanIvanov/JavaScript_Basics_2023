function vacation(input) {
  let index = 0;
  let moneyNeeded = parseFloat(input[index]);
  index++;
  let moneySaved = parseFloat(input[index]);
  index++;
  let consecutiveSpendDays = 0;
  let totalDays = 0;

  while (index < input.length) {
    let action = input[index];
    index++;
    let currentSum = parseFloat(input[index]);
    index++;

    if (action === "spend") {
      if (moneySaved < currentSum) {
        moneySaved = 0;
      } else {
        moneySaved -= currentSum;
      }
      consecutiveSpendDays++;
    } else if (action === "save") {
      consecutiveSpendDays = 0;
      moneySaved += currentSum;
    }

    totalDays++;

    if (consecutiveSpendDays === 5) {
      console.log(`You can't save the money.`);
      console.log(`${totalDays}`);
      return;
    }
  }

  if (moneySaved >= moneyNeeded) {
    console.log(`You saved the money for ${totalDays} days.`);
  }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
