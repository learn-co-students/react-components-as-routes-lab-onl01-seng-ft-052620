import React from 'react';
import { movies } from '../data';

const Movies = () => {

const moviesArray = movies.map(movie => <div className="movie"> {movie.title} {movie.time} {movie.genres.map(genre => genre)}</div>)

  return (
    <div>
        <h1>Movies Page</h1>
          {moviesArray}
    </div>
  );
};

export default Movies;
