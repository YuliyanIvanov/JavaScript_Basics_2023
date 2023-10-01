function moving(input) {
  let widht = Number(input[0]);
  let lenght = Number(input[1]);
  let height = Number(input[2]);

  let volume = widht * lenght * height;

  let command = input[3];
  let index = 4;

  while (command !== `Done`) {
    let boxes = Number(command);
    volume -= boxes;

    if (volume <= 0) {
      console.log(
        `No more free space! You need ${Math.abs(volume)} Cubic meters more.`
      );
      break;
    }

    command = input[index];
    index++;
  }
  if (command === `Done`) {
    console.log(`${volume} Cubic meters left.`);
  }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
