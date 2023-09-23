function symbolFlow(input) {
  let text = input[0];
  for (let index = 0; index < text.length; index++) {
    let symbol = text[index];
    console.log(symbol);
  }
}

symbolFlow(["softuni"]);
symbolFlow(["ice cream"]);
