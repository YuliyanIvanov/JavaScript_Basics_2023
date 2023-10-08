function trainTheTrainers(input) {
  let numberOfJudges = Number(input[0]);
  let subjectIndex = 1;
  let totalScore = 0;
  let totalSubjects = 0;

  while (true) {
    let subjectName = input[subjectIndex];
    subjectIndex++;

    if (subjectName === "Finish") {
      break;
    }

    let subjectScoreSum = 0;

    for (let i = 0; i < numberOfJudges; i++) {
      let score = Number(input[subjectIndex]);
      subjectIndex++;
      subjectScoreSum += score;
    }

    let averageScore = subjectScoreSum / numberOfJudges;
    totalScore += averageScore;
    totalSubjects++;

    console.log(`${subjectName} - ${averageScore.toFixed(2)}.`);
  }

  let overallAverage = totalScore / totalSubjects;
  console.log(`Student's final assessment is ${overallAverage.toFixed(2)}.`);
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
trainTheTrainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
