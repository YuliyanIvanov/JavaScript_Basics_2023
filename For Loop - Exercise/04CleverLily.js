function washingMashine(input) {
  let age = Number(input[0]);
  let washingMashine = Number(input[1]);
  let toyPrice = Number(input[2]);

  let money = 0;
  let allMoney = 0;
  let toysCount = 0;
  let brother = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 == 0) {
      money += 10;
      allMoney += money;
      brother++;
    } else {
      toysCount++;
    }
  }

  let toysSum = toyPrice * toysCount - brother;
  let totalMoney = allMoney + toysSum;
  
  let diff = Math.abs(washingMashine - totalMoney);

  if (totalMoney >= washingMashine) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}

washingMashine(["10", "170.00", "6"]);
washingMashine(["21", "1570.98", "3"]);
