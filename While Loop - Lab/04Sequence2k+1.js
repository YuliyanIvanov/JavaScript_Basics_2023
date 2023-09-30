function sequence(input) {
  let num = Number(input[0]);
  let k = 1;

  while (k <= num) {
    console.log(k);
    k = k * 2 + 1;
  }
}

sequence(["3"]);
sequence(["8"]);
sequence(["17"]);
sequence(["31"]);
