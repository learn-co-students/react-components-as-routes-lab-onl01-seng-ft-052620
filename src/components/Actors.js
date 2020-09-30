import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map( (actors,i) => {
        return(
          <div key={i}>
            <h3>{actors.name}</h3>
        {actors.movies.map(movie => <li>{movie}</li> )}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
