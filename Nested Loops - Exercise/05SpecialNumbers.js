function specialNumbers(input) {
  let specialNumbers = [];

  for (let num = 1111; num <= 9999; num++) {
    let isSpecial = true;
    let currentNum = num;

    while (currentNum > 0) {
      let digit = currentNum % 10;
      if (digit === 0 || input % digit !== 0) {
        isSpecial = false;
        break;
      }
      currentNum = Math.floor(currentNum / 10);
    }

    if (isSpecial) {
      specialNumbers.push(num);
    }
  }

  console.log(specialNumbers.join(" "));
}

specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);
