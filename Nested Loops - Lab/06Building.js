function building(input) {
  let floors = input[0];
  let roomsPerFloor = input[1];
  
  for (let floor = floors; floor >= 1; floor--) {
    let floorType = floor % 2 === 0 ? "O" : "A";

    if (floor === floors) {
      floorType = "L";
    }

    let output = "";

    for (let room = 0; room < roomsPerFloor; room++) {
      output += `${floorType}${floor}${room} `;
    }

    console.log(output);
  }
}

building(["6", "4"]);
building(["9", "5"]);
building(["4", "4"]);
