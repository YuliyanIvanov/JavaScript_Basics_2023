function numbers(input) {
  let number = Number(input[0]);
  Boolean = number >= -100 && number <= 100 && number !== 0;
  if (Boolean) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

numbers(["-25"]);
numbers(["0"]);
numbers(["25"]);
