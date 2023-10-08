function equalSumsEvenOddPosition(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);

  let result = "";

  for (let curNum = startNum; curNum <= endNum; curNum++) {
    let sumEven = 0;
    let sumOdd = 0;

    let curNumStr = String(curNum);
    //let curNumStr = curNum.toString;

    for (let i = 0; i < curNumStr.length; i++) {
      let digit = Number(curNumStr[i]);

      let position = i + 1;

      if (position % 2 === 0) {
        sumEven += digit;
      } else {
        sumOdd += digit;
      }
    }

    if (sumEven === sumOdd) {
      result += curNum + " ";
    }
  }
  console.log(result);
}

equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["123456", "124000"]);
equalSumsEvenOddPosition(["299900", "300000"]);
equalSumsEvenOddPosition(["100115", "100120"]);
