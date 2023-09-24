function histogram(input) {
  let num = Number(input[0]);

  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  let c4 = 0;
  let c5 = 0;

  for (let index = 1; index <= num; index++) {
    let num = Number(input[index]);

    if (num < 200) {
      c1++;
    } else if (num < 400) {
      c2++;
    } else if (num < 600) {
      c3++;
    } else if (num < 800) {
      c4++;
    } else {
      c5++;
    }
  }

  let p1 = (c1 / num) * 100;
  let p2 = (c2 / num) * 100;
  let p3 = (c3 / num) * 100;
  let p4 = (c4 / num) * 100;
  let p5 = (c5 / num) * 100;

  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram([
  "14",
  "53",
  "7",
  "56",
  "180",
  "450",
  "920",
  "12",
  "7",
  "150",
  "250",
  "680",
  "2",
  "600",
  "200",
]);
