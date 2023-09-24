function tennis(input) {
  let countTournaments = Number(input[0]);
  let stratScore = Number(input[1]);

  let score = 0;
  let totalScore = 0;

  let winTournaments = 0;

  for (let i = 2; i < countTournaments + 2; i++) {
    let stageTournaments = String(input[i]);

    switch (stageTournaments) {
      case "W":
        score += 2000;
        winTournaments++;
        break;
      case "F":
        score += 1200;
        break;
      case "SF":
        score += 720;
        break;
    }
  }
  totalScore = stratScore + score;
  console.log(`Final points: ${totalScore}`);
  console.log(`Average points: ${Math.floor(score / countTournaments)}`);
  console.log(`${((winTournaments / countTournaments) * 100).toFixed(2)}%`);
}

tennis(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennis(["4", "750", "SF", "W", "SF", "W"]);
tennis(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
