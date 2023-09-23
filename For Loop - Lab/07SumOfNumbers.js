function sumOfNum(input) {
  let numAsString = input[0];
  let sum = 0;

  for (let index = 0; index < numAsString.length; index++) {
    sum += Number(numAsString[index]);
  }

  console.log(`The sum of the digits is:${sum}`);
}

sumOfNum(["1234"]);
sumOfNum(["564891"]);
