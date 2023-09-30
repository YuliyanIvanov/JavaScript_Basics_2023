function minNum(input) {
  let element = input[0];
  let index = 1;
  let min = Number.MAX_SAFE_INTEGER;

  while (element !== `Stop`) {
    let num = Number(element);
    if (num < min) {
      min = num;
    }
    element = input[index];
    index++;
  }
  console.log(min);
}

minNum(["100", "99", "80", "70", "Stop"]);
minNum(["-10", "20", "-30", "Stop"]);
minNum(["45", "-20", "7", "99", "Stop"]);
minNum(["999", "Stop"]);
minNum(["-1", "-2", "Stop"]);
