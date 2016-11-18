var movies = require('./movies');

michaelsMovies = movies();
michaelsMovies.favMovie = "Good Will Hunting";

console.log("Michael's favorite movie is: " + michaelsMovies.favMovie);
