function onTime(input) {
  let hourExam = Number(input[0]);
  let minExam = Number(input[1]);
  let hourAr = Number(input[2]);
  let minAr = Number(input[3]);

  let examTime = hourExam * 60 + minExam;
  let arTime = hourAr * 60 + minAr;

  let state = ``;
  let keyword = ``;

  if (arTime > examTime) {
    state = "Late";
    keyword = "after";
  } else {
    keyword = "before";
    if (arTime >= examTime - 30) {
      state = "On time";
    } else {
      state = "Early";
    }
  }

  let diff = Math.abs(examTime - arTime);
  let formatDiff = ``;

  if (diff >= 60) {
    let diffHours = Math.floor(diff / 60);
    let diffMinutes = diff % 60;

    if (diffMinutes < 10) {
      formatDiff = `${diffHours}:0${diffMinutes} hours`;
    } else {
      formatDiff = `${diffHours}:${diffMinutes} hours`;
    }
  } else {
    formatDiff = `${diff} minutes`;
  }

  console.log(state);
  console.log(`${formatDiff} ${keyword} the start`);
}

onTime(["9", "30", "9", "50"]);
onTime(["9", "00", "8", "30"]);
onTime(["16", "00", "15", "00"]);
onTime(["9", "00", "10", "30"]);
onTime(["14", "00", "13", "55"]);
onTime(["11", "30", "8", "12"]);
onTime(["10", "00", "10", "00"]);
onTime(["11", "30", "10", "55"]);
onTime(["11", "30", "12", "29"]);
