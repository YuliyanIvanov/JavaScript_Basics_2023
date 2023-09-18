function workingHours(input) {
  let hour = Number(input[0]);
  let day = input[1];

  switch (day) {
    case `Monday`:
    case `Tuesday`:
    case `Wednesday`:
    case `Thursday`:
    case `Friday`:
    case `Saturday`:
      if (hour >= 10 && hour <= 18) {
        console.log(`open`);
      } else {
        console.log(`closed`);
      }
      break;

    default:
      console.log(`closed`);
      break;
  }
}

workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);
