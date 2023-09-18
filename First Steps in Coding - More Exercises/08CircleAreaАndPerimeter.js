function circleAreaАndPerimeter(input) {
  let r = Number(input[0]);
  //изчисляване на лице 
  let area = Math.PI * r * r;
  //изчисляване на диаметър 
  let perimeter = 2 * Math.PI * r;

  console.log(area.toFixed(2));
  console.log(perimeter.toFixed(2));
}

circleAreaАndPerimeter(["3"])
circleAreaАndPerimeter(["4.5"])