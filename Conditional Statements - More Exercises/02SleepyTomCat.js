function tomCat(input) {
  let daysOff = Number(input[0]);

  let workDays = 365 - daysOff;
  let minBreak = daysOff * 127;
  let minWork = workDays * 63;

  let playTime = 30000 - (minBreak + minWork);
  let hours = Math.abs(playTime / 60);
  let min = Math.abs(playTime % 60);

  if (playTime >= 0) {
    console.log("Tom sleeps well");
    console.log(
      `${Math.floor(hours)} hours and ${Math.floor(min)} minutes less for play`
    );
  } else {
    let h = Math.floor(hours);
    let m = Math.floor(min);
    console.log("Tom will run away");
    console.log(`${h} hours and ${m} minutes more for play`);
  }
}

tomCat(["20"]);
tomCat(["113"]);
