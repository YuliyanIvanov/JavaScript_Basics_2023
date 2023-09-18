function pool(input) {
  let capacity = Number(input[0]);
  let flowFirstPipe = Number(input[1]);
  let flowSecondPipe = Number(input[2]);
  let hoursUnmanned = Number(input[3]);

  //изчисляваме колко вода минава през тръбите,
  //за времето в ковто отсъства работника
  let pipeOne = flowFirstPipe * hoursUnmanned;
  let pipeTwo = flowSecondPipe * hoursUnmanned;
  //изчисляваме колко вода е минала през тръбите
  let totalWater = pipeOne + pipeTwo;
  //изчисляваме колко процента се е запълнил басейна
  let persentFull = (totalWater / capacity) * 100;
  //пресмятаме колко вода е минала през тръбите в проценти
  let percentPipeOne = (pipeOne / totalWater) * 100;
  let percentPipeTwo = (pipeTwo / totalWater) * 100;

  //проверка дали се е напънил басейна или е прлял
  if (totalWater <= capacity) {
    console.log(`The pool is ${persentFull.toFixed(2)}% full.`);
    console.log(`Pipe 1: ${percentPipeOne.toFixed(2)}%.`);
    console.log(`Pipe 2: ${percentPipeTwo.toFixed(2)}%.`);
  } else {
    let diff = Math.abs(totalWater - capacity);
    console.log(
      `For ${hoursUnmanned} hours the pool overflows with ${diff.toFixed(
        2
      )} liters.`
    );
  }
}

pool(["1000", "100", "120", "3"]);
pool(["100", "100", "100", "2.5"]);
