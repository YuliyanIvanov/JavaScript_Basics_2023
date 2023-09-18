function secondSum(input) {
  let firstTime = Number(input[0]);
  let secondTime = Number(input[1]);
  let thirdTime = Number(input[2]);

  let totalTime = firstTime + secondTime + thirdTime;

  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

secondSum(["35", "45", "44"]);
secondSum(["22", "7", "34"]);
secondSum(["50", "50", "49"]);
secondSum(["14", "12", "10"]);
