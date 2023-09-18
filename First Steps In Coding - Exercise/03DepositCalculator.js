function depositCalculator(input) {
  let depSum = Number(input[0]);
  let timeDep = Number(input[1]);
  let yearIntrest = Number(input[2]);

  let total = depSum + timeDep * ((depSum * yearIntrest) / 100 / 12);

  console.log(total);
}

depositCalculator(["200 ", "3 ", "5.7 "]);
depositCalculator(["2350", "6 ", "7 "]);
