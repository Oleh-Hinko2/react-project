import React from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="nav">
      <div className="item">
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className="item">
        <NavLink to='/dialogs'>Messages</NavLink>
      </div>
      <div className="item">
      <NavLink to='/news'>News</NavLink>
      </div>
      <div className="item">
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div className="item">
        <NavLink to='/settings'>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
