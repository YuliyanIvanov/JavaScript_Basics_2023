function ratings(input) {
  let movieNum = Number(input[0]);
  
  let highestRating = Number.MIN_SAFE_INTEGER;
  let lowestRating = Number.MAX_SAFE_INTEGER;
  let totalRating = 0;

  let highestRatingMovie = "";
  let lowestRatingMovie = "";

  for (let i = 1; i <= movieNum * 2; i += 2) {
    let movieName = input[i];
    let movieRating = Number(input[i + 1]);

    totalRating += movieRating;

    if (movieRating > highestRating) {
      highestRating = movieRating;
      highestRatingMovie = movieName;
    }

    if (movieRating < lowestRating) {
      lowestRating = movieRating;
      lowestRatingMovie = movieName;
    }
  }

  let averageRating = totalRating / movieNum;

  console.log(
    `${highestRatingMovie} is with highest rating: ${highestRating.toFixed(1)}`
  );
  console.log(
    `${lowestRatingMovie} is with lowest rating: ${lowestRating.toFixed(1)}`
  );
  console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

ratings([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
]);
ratings(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);
