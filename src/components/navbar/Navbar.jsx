import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__wrapper flex">
      <ul className="navbar__list flex">
        <li className="navbar__items">
          <Link to="/home">
            <h1 className="navbar__logo">NovaQ</h1>
          </Link>
        </li>
      </ul>
      <ul className="navbar__list navbar__list--normal flex">
        <li className="navbar__items navbar__items--name">
          <Link to="/home">Home</Link>
        </li>
        <li className="navbar__items navbar__items--name">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="navbar__items navbar__items--name">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <ul className="navbar__list navbar__list--icons flex">
        <li className="navbar__items">
          <Link to="/home">
            <span className="material-icons-round material-black">home</span>
          </Link>
        </li>
        <li className="navbar__items">
          <Link to="/dashboard">
            <span className="material-icons-round material-black">
              dashboard
            </span>
          </Link>
        </li>
        <li className="navbar__items">
          <Link to="/profile">
            <span className="material-icons-round material-black">person</span>
          </Link>
        </li>
      </ul>
      <ul className="navbar__list flex">
        <li className="navbar__items">
          <a
            href="https://github.com/manish591"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export { Navbar };
