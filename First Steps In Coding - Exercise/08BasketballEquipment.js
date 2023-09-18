function equipment(input) {
  let yearTax = Number(input[0]);

  let shoes = yearTax - yearTax * 0.4;
  let outfit = shoes - shoes * 0.2;
  let ball = outfit / 4;
  let trinkets = ball / 5;

  let total = yearTax + shoes + outfit + ball + trinkets;

  console.log(total);
}

equipment(["365"]);
equipment(["550"]);
