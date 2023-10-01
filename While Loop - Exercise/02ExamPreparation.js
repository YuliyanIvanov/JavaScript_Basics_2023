function examPrep(input) {
  let maxBadGrades = Number(input[0]);

  let command = input[1];
  let index = 2;

  let badGrades = 0;
  let totalGrades = 0;
  let gradeSum = 0;

  let lastProblem = "";

  while (command !== `Enough`) {
    lastProblem = command;

    let grade = Number(input[index]);
    index++;

    if (grade <= 4) {
      badGrades++;
    }

    if (badGrades === maxBadGrades) {
      console.log(`You need a break, ${badGrades} poor grades.`);
      break;
    }
    totalGrades++;
    gradeSum += grade;

    command = input[index];
    index++;
  }

  if (command === `Enough`) {
    let avgGrade = gradeSum / totalGrades;
    
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${totalGrades}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}

examPrep([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
examPrep(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
