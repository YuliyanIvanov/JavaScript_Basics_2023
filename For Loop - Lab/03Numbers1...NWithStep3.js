function numWithStepByThree(input) {
  let n = Number(input[0]);
  for (let index = 1; index <= n; index += 3) {
    console.log(index);
  }
}

numWithStepByThree(["10"]);
numWithStepByThree(["7"]);
numWithStepByThree(["15"]);
