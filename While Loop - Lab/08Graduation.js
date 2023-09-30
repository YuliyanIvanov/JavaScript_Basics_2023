function graduation(input) {
  let name = input[0];
  let grades = 1;
  let sum = 0;
  let excluded = false;
  let index = 1;

  while (grades <= 12) {
    let grade = Number(input[index]);
    if (grade >= 4.0) {
      sum += grade;
      grades++;
    } else {
      excluded = true;
      break;
    }

    index++;

    if (grades > 12) {
      let averageGrade = (sum / 12).toFixed(2);
      console.log(`${name} graduated. Average grade: ${averageGrade}`);
    }
  }

  if (excluded) {
    console.log(`${name} has been excluded at ${grades} grade`);
  }
}

graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
