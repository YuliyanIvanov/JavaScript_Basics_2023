function bestPlayer(input) {
  let bestPlayerName = "";
  let bestPlayerGoals = 0;

  for (let i = 0; i < input.length; i += 2) {
    let playerName = input[i];
    let playerGoals = Number(input[i + 1]);

    if (playerName === "END") {
      break;
    }

    if (playerGoals > bestPlayerGoals) {
      bestPlayerName = playerName;
      bestPlayerGoals = playerGoals;
    }

    if (playerGoals >= 10) {
      break;
    }
  }

  console.log(`${bestPlayerName} is the best player!`);
  if (bestPlayerGoals >= 3) {
    console.log(
      `He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`
    );
  } else {
    console.log(`He has scored ${bestPlayerGoals} goals.`);
  }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Petrov", "2", "Drogba", "11"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);
