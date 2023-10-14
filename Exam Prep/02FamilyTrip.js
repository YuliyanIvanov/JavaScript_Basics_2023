function trip(input) {
  let budget = Number(input[0]);
  let overnightStay = Number(input[1]);
  let overnightStayPrice = Number(input[2]);
  let additionalExpense = Number(input[3]);

  if (overnightStay > 7) {
    overnightStayPrice *= 0.95;
  }

  let totalExpenses =
    overnightStay * overnightStayPrice + (additionalExpense / 100) * budget;

  if (budget >= totalExpenses) {
    let leftMoney = budget - totalExpenses;
    console.log(
      `Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`
    );
  } else {
    let neededMoney = totalExpenses - budget;
    console.log(`${neededMoney.toFixed(2)} leva needed.`);
  }
}

trip(["800.50", "8", "100", "2"]);
trip(["500", "7", "66", "15"]);
