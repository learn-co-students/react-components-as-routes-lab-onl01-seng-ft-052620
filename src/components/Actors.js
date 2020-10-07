import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
      <h2>Benedict Cumberbatch</h2>
      <ul>
        <li>Doctor Strange</li>
        <li>The Imitation Game</li>
        <li>Black Mass</li>
      </ul>
      </div>
      <div>
      <h2>Justin Timberlake</h2>
      <ul>
        <li>Trolls</li>
        <li>Friends with Benefits</li>
        <li>The Social Network</li>
      </ul>
      </div>
      <div>
      <h2>Anna Kendrick</h2>
      <ul>
        <li>Trolls</li>
        <li>Pitch Perfect</li>
        <li>Into The Wood</li>
      </ul>
      </div>
      <div>
      <h2>Tom Cruise</h2>
      <ul>
        <li>Jack Reacher: Never Go Back</li>
        <li>Mission Impossible 4</li>
        <li>War of the Worlds</li>
      </ul>
      </div>
    </div>
  );
};

export default Actors;
