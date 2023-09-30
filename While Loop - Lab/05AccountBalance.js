function balance(input) {
  let total = 0;
  let index = 0;
  let currentRow = input[index];

  while (currentRow !== `NoMoreMoney`) {
    let currentRowAsNum = Number(currentRow);

    if (currentRowAsNum < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    console.log(`Increase: ${currentRowAsNum.toFixed(2)}`);
    total += currentRowAsNum;
    index++;
    currentRow = input[index];
  }
  console.log(`Total: ${total.toFixed(2)}`);
}

balance(["5.51", "69.42", "100", "NoMoreMoney"]);
balance(["120", "45.55", "-150"]);
