function magicNum(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magic = Number(input[2]);
  let count = 1;
  let found = false;

  for (let i = start; i <= end && !found; i++) {
    for (let j = start; j <= end && !found; j++) {
      if (i + j === magic) {
        console.log(`Combination N:${count} (${i} + ${j} = ${magic})`);
        found = true;
      }
      count++;
    }
  }

  if (!found) {
    console.log(`${count - 1} combinations - neither equals ${magic}`);
  }
}

magicNum(["1", "10", "5"]);
magicNum(["23", "24", "20"]);
magicNum(["88", "888", "1000"]);
magicNum(["88", "888", "2000"]);
