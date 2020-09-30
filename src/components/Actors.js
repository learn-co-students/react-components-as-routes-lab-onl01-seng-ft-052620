import React from 'react';
import { actors } from '../data';


const Actors = () => {

const actorsArray = actors.map(actor => <div className="actor"> {actor.name} {actor.movies.map(movie => movie)}</div>)
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsArray}
    </div>
  );
};

export default Actors;
