function oscars(input) {
  //Входни данни - Име на актьора, точки с които стартира и колко съдии има.
  let actorName = String(input[0]);
  let academyPoints = Number(input[1]);
  let judges = Number(input[2]);

  //Брояч на точките
  let totalScore = 0;

  //Обхождаме за да видим колко точки ще дадат съдиите
  for (let i = 3; i < judges * 2 + 3; i += 2) {
    //Взимаме името на съдията и колко точки дава
    let judges = String(input[i]);
    let judgeScore = Number(input[i + 1]);

    //Изчисляване на приноса на съдията към точките на актьора.
    totalScore += (judgeScore * judges.length) / 2;

    // Проверка дали общите точки на актьора надхвърлят прага (1250.5).
    if (totalScore + academyPoints > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${(
          totalScore + academyPoints
        ).toFixed(1)}!`
      );
      break;
    }
  }

  // Проверка дали общите точки на актьора са все още по-малки или равни на 1250.5.
  if (totalScore + academyPoints <= 1250.5) {
    console.log(
      `Sorry, ${actorName} you need ${(
        1250.5 -
        (academyPoints + totalScore)
      ).toFixed(1)} more!`
    );
  }
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
