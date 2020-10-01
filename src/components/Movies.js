import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => {
          return (<div className='movie'>
                    <h2> {movie.title} </h2>
                    <p> {movie.time} </p>
                    <ul>
                    {movie.genres.map(genre => {
                      return <li> {genre} </li>
                    })}
                    </ul>
                    <p> {movie.metascore} </p>
                    <br></br>
                </div>
                )
        })}
    </div>
  );
};

export default Movies;
