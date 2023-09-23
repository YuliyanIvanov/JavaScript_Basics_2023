function byTwo(input) {
  let n = Number(input[0]);
  for (let index = 0; index <= n; index += 2) {
    console.log(Math.pow(2, index));
  }
}

byTwo(["3"]);
byTwo(["4"]);
byTwo(["5"]);
byTwo(["6"]);
byTwo(["7"]);
