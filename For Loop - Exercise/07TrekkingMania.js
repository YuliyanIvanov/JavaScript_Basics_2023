function mania(input) {
  let climbers = Number(input[0]);

  let musala = 0;
  let monblan = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;

  let totalPeople = 0;

  for (let i = 1; i <= climbers; i++) {
    let people = Number(input[i]);

    if (people <= 5) {
      musala += people;
    } else if (people <= 12) {
      monblan += people;
    } else if (people <= 25) {
      kilimanjaro += people;
    } else if (people <= 40) {
      k2 += people;
    } else {
      everest += people;
    }

    totalPeople += people;
  }

  let musalaP = ((musala * 1.0) / totalPeople) * 100;
  let monblanP = ((monblan * 1.0) / totalPeople) * 100;
  let kilimanjaroP = ((kilimanjaro * 1.0) / totalPeople) * 100;
  let k2P = ((k2 * 1.0) / totalPeople) * 100;
  let everestP = ((everest * 1.0) / totalPeople) * 100;

  console.log(`${musalaP.toFixed(2)}%`);
  console.log(`${monblanP.toFixed(2)}%`);
  console.log(`${kilimanjaroP.toFixed(2)}%`);
  console.log(`${k2P.toFixed(2)}%`);
  console.log(`${everestP.toFixed(2)}%`);
}

mania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
mania(["5", "25", "41", "31", "250", "6"]);
