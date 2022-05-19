import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper grid">
      <ul className="footer__list">
        <li className="footer__item">
          <h2 className="footer__logo">
            <Link to="/">NovaQ</Link>
          </h2>
        </li>
      </ul>
      <ul className="footer__list footer__list--links flex">
        <li className="footer__item">
          <Link to="/">Home</Link>
        </li>
        <li className="footer__item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="footer__item">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <ul className="footer__list footer__list--socials flex">
        <li className="footer__item">
          <a href="https://twitter.com/manishdevrani77">Twitter</a>
        </li>
        <li className="footer__item">
          <a href="https://www.linkedin.com/in/manishdevrani77/">LinkedIn</a>
        </li>
        <li className="footer__item">
          <a href="https://github.com/manish591">Github</a>
        </li>
      </ul>
    </div>
  </footer>
);

export { Footer };
