import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h3>Title: {movie.title}</h3>
            <h4>Time: {movie.time} min</h4>
            <h5>Genres: </h5>
            <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}              
              </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
