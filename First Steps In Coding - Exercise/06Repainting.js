function repainting(input) {
  let plasticCover = Number(input[0]);
  let paint = Number(input[1]);
  let paintThinner = Number(input[2]);
  let workHours = Number(input[3]);

  let plasticCoverPrice = (plasticCover + 2) * 1.5;
  let paintPricce = (paint + paint * 0.1) * 14.5;
  let thinnerPrice = paintThinner * 5;

  let totalMaterials = plasticCoverPrice + paintPricce + thinnerPrice + 0.4;

  let workers = totalMaterials * 0.3 * workHours;

  let total = totalMaterials + workers;

  console.log(total);
}

repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
