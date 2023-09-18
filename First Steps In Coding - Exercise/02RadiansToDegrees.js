function convertorRadians(input) {
  let radians = Number(input[0]);
  let degrees = (radians * 180) / Math.PI;

  console.log(degrees);
}

convertorRadians(["3.1416"]);
convertorRadians(["6.2832"]);
