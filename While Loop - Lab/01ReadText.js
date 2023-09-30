function words(input) {
  let index = 0;
  let words = input[index];

  while (words !== `Stop`) {
    console.log(words);
    ++index;
    words = input[index];
  }
}

words([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);


words([
  "Sofia",
  "Berlin",
  "Moscow",
  "Athens",
  "Madrid",
  "London",
  "Paris",
  "Stop",
  "AfterStop",
]);
