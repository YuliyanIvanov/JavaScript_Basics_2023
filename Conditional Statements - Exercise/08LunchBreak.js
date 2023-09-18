function lunchBreak(input) {
  let tvShow = input[0];
  let epLenght = Number(input[1]);
  let breakLenght = Number(input[2]);

  let lunchTime = (1 / 8) * breakLenght;
  let leisureTime = (1 / 4) * breakLenght;
  let totalBreakTime = lunchTime + leisureTime;

  let timeForMovie = breakLenght - totalBreakTime;

  if (timeForMovie >= epLenght) {
    let timeLeft = timeForMovie - epLenght;
    console.log(
      `You have enough time to watch ${tvShow} and left with ${Math.ceil(
        timeLeft
      )} minutes free time.`
    );
  } else {
    let timeNeeded = epLenght - timeForMovie;
    console.log(
      `You don't have enough time to watch ${tvShow}, you need ${Math.ceil(
        timeNeeded
      )} more minutes.`
    );
  }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
