import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map( (movie, i) => {
          return(
            <div key={i}>
              <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <ul>
                {movie.genres.map( genre => <li>{genre}</li> )}
              </ul>
              <p> {movie.metascores} </p>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
