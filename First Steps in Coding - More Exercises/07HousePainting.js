function housePainting(input) {

  let x = Number(input[0]);
  let y = Number(input[1]);
  let h = Number(input[2]);

  //пресмятаме предната стената, като извадим вратата
  let front = x * x - 1.2 * 2;
  //пресмятаме задната стена
  let back = x * x;
  //пресмятаме лява и дясна страна, като вадим площа на прозореца
  let rightAndLeftSide = (x * y - 1.5 * 1.5) * 2;
  //пресмятаме обюо площа за боядисване
  let walls = front + back + rightAndLeftSide;
  //пресмятаме нужното количество боя за всичките страни на къщата
  let paintForWalls = walls / 3.4;

  //пресмятаме лице и гръб на покрива
  let roofFrontAndBack = x * h;
  //пресмятаме страните на покрива
  let roofSides = x * y * 2;
  //пресмятаме площа на покрива
  let roof = roofSides + roofFrontAndBack;
  //пресмятаме количеството боя нужна за покрива
  let paintForRoof = roof / 4.3;

  //отпечатваме резултата
  console.log(paintForWalls.toFixed(2));
  console.log(paintForRoof.toFixed(2));
}

housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.88"]);
