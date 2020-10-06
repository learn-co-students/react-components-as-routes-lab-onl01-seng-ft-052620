import React from "react";
import { movies } from "../data";

const renderMovies = () => {
  return movies.map((movie) => {
    return (
      <div>
        <h2>Name: {movie.title}</h2>
        <p>Name: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    );
  });
};

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
