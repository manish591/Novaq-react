import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__wrapper flex">
      <ul className="navbar__list flex">
        <li className="navbar__items">
          <h2 className="navbar__logo">NovaQ</h2>
        </li>
      </ul>
      <ul className="navbar__list navbar__list--normal flex">
        <li className="navbar__items navbar__items--name">Home</li>
        <li className="navbar__items navbar__items--name">Dashboard</li>
        <li className="navbar__items navbar__items--name">Profile</li>
      </ul>
      <ul className="navbar__list navbar__list--icons flex">
        <li className="navbar__items">
          <span className="material-icons-round material-black">home</span>
        </li>
        <li className="navbar__items">
          <span className="material-icons-round material-black">dashboard</span>
        </li>
        <li className="navbar__items">
          <span className="material-icons-round material-black">person</span>
        </li>
      </ul>
      <ul className="navbar__list navbar__list flex">
        <li className="navbar__items">
          <span className="material-icons-round material-black">search</span>
        </li>
      </ul>
    </div>
  </nav>
);

export { Navbar };
