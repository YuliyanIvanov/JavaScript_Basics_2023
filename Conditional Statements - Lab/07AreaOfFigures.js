function areas(input) {
  let figure = input[0];
  let num = Number(input[1]);
  let num2 = Number(input[2]);

  if (figure == "square") {
    let area = num * num;
    console.log(area.toFixed(3));
  } else if (figure == "rectangle") {
    let area = num * num2;
    console.log(area.toFixed(3));
  } else if (figure == "circle") {
    let area = Math.PI * num * num;
    console.log(area.toFixed(3));
  } else if (figure == "triangle") {
    let area = (num * num2) / 2;
    console.log(area.toFixed(3));
  }
}

areas(["square", "5"]);
areas(["rectangle", "7", "2.5"]);
areas(["circle", "6"]);
areas(["triangle", "4.5", "20"]);
