import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorsArray = directors.map(director => <div className="director"> {director.name} {director.movies.map(movie => movie)} </div>)
  return (
    <div>
      <h1>Directors Page</h1>
        {directorsArray}
    </div>
  );
}

export default Directors
