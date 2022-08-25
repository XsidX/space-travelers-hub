import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/planet.png';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src={logo} alt="logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <nav className="nav">
      <NavLink
        className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
        to="/rockets"
      >
        Rockets
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
        to="/missions"
      >
        Missions
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
        to="/profile"
      >
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default Header;
