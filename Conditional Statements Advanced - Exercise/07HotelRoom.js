function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);

  let apartmentPrice;
  let studioPrice;

  let discount;

  switch (month) {
    case "May":
    case "October":
      studioPrice = nights * 50;
      apartmentPrice = nights * 65;

      if (nights > 7 && nights < 14) {
        discount = studioPrice * 0.05;
        studioPrice = studioPrice - discount;
      } else if (nights > 14) {
        discount = studioPrice * 0.3;
        studioPrice = studioPrice - discount;
      }
      break;

    case "June":
    case "September":
      studioPrice = nights * 75.2;
      apartmentPrice = nights * 68.7;

      if (nights > 14) {
        discount = studioPrice * 0.2;
        studioPrice = studioPrice - discount;
      }
      break;

    case "July":
    case "August":
      studioPrice = nights * 76;
      apartmentPrice = nights * 77;
      break;
  }
  if (nights > 14) {
    discount = apartmentPrice * 0.1;
    apartmentPrice = apartmentPrice - discount;
  }
  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
