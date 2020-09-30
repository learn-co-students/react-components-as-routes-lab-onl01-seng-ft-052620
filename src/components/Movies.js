import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map( (movie, i) => {
          return(
            <div key={i}>
              <h3>{movie.title}</h3>
              <h3>{movie.time}</h3>
          <ul>
            {movie.genres.map( genres => <li>{genres}</li>)}
          </ul>
              <h3>{movie.metascores}</h3>
              </div>
          )

        })}
    </div>
  );
};

export default Movies;
