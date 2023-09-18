function shopping(input) {
  let budget = Number(input[0]);
  let gpuCount = Number(input[1]);
  let cpuCount = Number(input[2]);
  let ramCount = Number(input[3]);

  let gpuPrice = 250;
  let cpuPrice = 0.35 * (gpuPrice * gpuCount);
  let ramPrice = 0.1 * (gpuPrice * gpuCount);

  let price = gpuPrice * gpuCount + cpuPrice * cpuCount + ramPrice * ramCount;

  if (gpuCount > cpuCount) {
    price = 0.85 * price;
  }

  if (price <= budget) {
    console.log(`You have ${(budget - price).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(price - budget).toFixed(2)} leva more!`
    );
  }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
