function pyramid(input) {
  let n = Number(input[0]);

  let current = 1;
  let isBigger = false;
  let printCurrentLine = "";

  for (let row = 1; row <= n; row++) {
    for (let cols = 1; cols <= row; cols++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      printCurrentLine += current + " ";
      current++;
    }
    console.log(printCurrentLine);
    printCurrentLine = "";
    if (isBigger) {
      break;
    }
  }
}

pyramid(["7"]);
pyramid(["12"]);
pyramid(["15"]);
