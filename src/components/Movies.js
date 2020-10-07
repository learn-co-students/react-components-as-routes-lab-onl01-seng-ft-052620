import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <div>
          <h2>Doctor Strange</h2>
          <h3>Time: 115</h3>
          <ul>
            <li>Action</li>
            <li>Adventure</li>
            <li>Fantasy</li>
          </ul>
        </div>
        <div>
          <h2>Trolls</h2>
          <h3>Time: 92</h3>
          <ul>
            <li>Animation</li>
            <li>Adventure</li>
            <li>Comedy</li>
            <li>Family</li>
            <li>Fantasy</li>
          </ul>
        </div>
        <div>
          <h2>Jack Reacher: Never Go Back</h2>
          <h3>Time: 118</h3>
          <ul>
            <li>Action</li>
            <li>Adventure</li>
            <li>Crime</li>
            <li>Mystery</li>
            <li>Thriller</li>
          </ul>
        </div>
    </div>
  );
};

export default Movies;
