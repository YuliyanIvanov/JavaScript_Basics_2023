function forecast2(input) {
  let temperature = Number(input[0]);

  if (temperature >= 26 && temperature <= 35) {
    console.log("Hot");
  } else if (temperature >= 20.1 && temperature <= 25.9) {
    console.log("Warm");
  } else if (temperature >= 15 && temperature <= 20) {
    console.log("Mild");
  } else if (temperature >= 12 && temperature <= 14.9) {
    console.log("Cool");
  } else if (temperature >= 5 && temperature <= 11.9) {
    console.log("Cold");
  } else {
    console.log("unknown");
  }
}

forecast2(["16.5"]);
forecast2(["8"]);
forecast2(["22.4"]);
forecast2(["26"]);
forecast2(["0"]);
