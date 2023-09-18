function worldSwimRecord(input) {
  let recordInSecunds = Number(input[0]);
  let lenghtInMeters = Number(input[1]);
  let timeForOneMeter = Number(input[2]);

  let addTime = Math.floor(lenghtInMeters / 15) * 12.5;

  let totalTime = lenghtInMeters * timeForOneMeter + addTime;

  if (totalTime < recordInSecunds) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${(totalTime - recordInSecunds).toFixed(
        2
      )} seconds slower.`
    );
  }
}

worldSwimRecord(["10464", "1500", "20"]);
worldSwimRecord(["55555.67", "3017", "5.03"]);
