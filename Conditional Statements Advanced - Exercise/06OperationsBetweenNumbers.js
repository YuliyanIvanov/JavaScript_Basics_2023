function operations(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];

  let output;
  let even;
  let odd;

  switch (operator) {
    case "+":
      output = n1 + n2;
      evenOrOdd = output % 2 === 0 ? `even` : `odd`;
      console.log(`${n1} ${operator} ${n2} = ${output} - ${evenOrOdd}`);
      break;
    case "-":
      output = n1 - n2;
      evenOrOdd = output % 2 === 0 ? `even` : `odd`;
      console.log(`${n1} ${operator} ${n2} = ${output} - ${evenOrOdd}`);
      break;
    case "*":
      output = n1 * n2;
      evenOrOdd = output % 2 === 0 ? `even` : `odd`;
      console.log(`${n1} ${operator} ${n2} = ${output} - ${evenOrOdd}`);
      break;
    case "/":
      if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        output = n1 / n2;
        console.log(`${n1} / ${n2} = ${output.toFixed(2)}`);
      }
      break;
    case "%":
      if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        output = n1 % n2;
        console.log(`${n1} % ${n2} = ${output}`);
      }
      break;
    default:
      return;
  }
}

operations(["10", "12", "+"]);
operations(["10", "1", "-"]);
operations(["7", "3", "*"]);
operations(["123", "12", "/"]);
operations(["10", "3", "%"]);
operations(["112", "0", "/"]);
operations(["10", "0", "%"]);
