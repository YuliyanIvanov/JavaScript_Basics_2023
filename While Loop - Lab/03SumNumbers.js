function sumNum(params) {
  let goalNum = Number(params[0]);
  let sumOfNum = 0;
  let index = 1;
  let currentNum = Number(params[index]);

  while (sumOfNum < goalNum) {
    sumOfNum += currentNum;

    index++;
    currentNum = Number(params[index]);
  }
  console.log(sumOfNum);
}

sumNum(["100", "10", "20", "30", "40"]);
sumNum(["20", "1", "2", "3", "4", "5", "6"]);
