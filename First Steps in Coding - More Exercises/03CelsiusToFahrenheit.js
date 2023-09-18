function converterTemp(input) {
  let celsius = Number(input[0]);
  let toFahrenheit = celsius * 1.8 + 32;
  console.log(toFahrenheit.toFixed(2));
}

converterTemp(["25"]);
converterTemp(["0"]);
converterTemp(["-5.5"]);
converterTemp(["32.3"]);
