function multiplicationTable(input) {
  let number = Number(input[0]);

  let thirdDigit = number % 10;
  let secondDigit = Math.floor((number / 10) % 10);
  let firstDigit = Math.floor(number / 100);

  if (firstDigit > 0 && secondDigit > 0 && thirdDigit > 0) {
    for (let x = 1; x <= thirdDigit; x++) {
      for (let y = 1; y <= secondDigit; y++) {
        for (let z = 1; z <= firstDigit; z++) {
          let result = x * y * z;

          console.log(`${x} * ${y} * ${z} = ${result};`);
        }
      }
    }
  }
}

multiplicationTable(["324"]);
multiplicationTable(["222"]);
