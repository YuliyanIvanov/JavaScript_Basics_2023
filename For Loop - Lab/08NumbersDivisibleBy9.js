function numDiv(input) {
  let loopStart = Number(input[0]);
  let loopEnd = Number(input[1]);
  let sum = 0;
  let output = "";

  for (let index = loopStart; index <= loopEnd; index++) {
    if (index % 9 === 0) {
      sum += index;
      output += `${index}\n`;
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(output);
}

numDiv(["100", "200"]);
