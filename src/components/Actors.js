import React from 'react';
import { actors } from '../data';

const Actors = (props) => {
  
  return (
    <div>
      <h1> Actors Page </h1>
      {actors.map(actor => {
        return (<div className='actor'>
                  <h2> {actor.name} </h2>
                  <ul>
                    {actor.movies.map(movie => {
                      return <li> {movie} </li>
                    })}
                  </ul>
                  <br></br>
               </div>
               )
      })}
    </div>
  );
};

export default Actors;
