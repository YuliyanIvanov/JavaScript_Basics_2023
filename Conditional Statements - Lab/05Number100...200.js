function numbers(input) {
  let number = Number(input[0]);

  if (number <= 99) {
    console.log("Less than 100");
  } else if (number == 100 || number <= 200) {
    console.log("Between 100 and 200");
  } else if (number > 200) {
    console.log("Greater than 200");
  }
}

numbers(["95"]);
numbers(["120"]);
numbers(["210"]);