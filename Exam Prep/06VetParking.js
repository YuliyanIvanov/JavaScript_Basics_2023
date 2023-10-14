function parking(input) {
  let days = Number(input[0]);
  let hoursPerDay = Number(input[1]);
  let totalCost = 0;

  for (let day = 1; day <= days; day++) {
    let dailyCost = 0;

    for (let hour = 1; hour <= hoursPerDay; hour++) {
      if (day % 2 === 0 && hour % 2 !== 0) {
        dailyCost += 2.5;
      } else if (day % 2 !== 0 && hour % 2 === 0) {
        dailyCost += 1.25;
      } else {
        dailyCost += 1;
      }
    }

    console.log(`Day: ${day} - ${dailyCost.toFixed(2)} leva`);
    totalCost += dailyCost;
  }

  console.log(`Total: ${totalCost.toFixed(2)} leva`);
}

parking(["2", "5"]);
parking(["5", "2"]);
