function time(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let sum = hours * 60 + minutes + 15;
  hours = Math.floor(sum / 60);
  minutes = sum % 60;

  if (hours >= 24) {
    hours = 0;
  }

  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }
}

time(["1", "46"]);
time(["0", "01"]);
time(["23", "59"]);
time(["11", "08"]);
time(["12", "49"]);