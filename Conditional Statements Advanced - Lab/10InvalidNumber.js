function invalid(input) {
  let number = Number(input[0]);
  let isValid = (number >= 100 && number <= 200) || number === 0;
  if (!isValid) {
    console.log("invalid");
  } else {
    console.log();
  }
}
invalid(["75"]);
invalid(["150"]);
invalid(["220"]);
invalid(["199"]);
invalid(["-1"]);
invalid(["100"]);
invalid(["200"]);
invalid(["0"]);
