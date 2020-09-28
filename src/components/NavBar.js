import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact activeStyle={{color: 'grey'}}>Home</NavLink>
      <NavLink to="/movies" exact activeStyle={{color: 'grey'}}>Movies</NavLink>
      <NavLink to="/directors" exact activeStyle={{color: 'grey'}}>Directors</NavLink>
      <NavLink to="/actors" exact activeStyle={{color: 'grey'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
