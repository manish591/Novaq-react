import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper grid">
      <ul className="footer__list">
        <li className="footer__item">
          <h2 className="footer__logo">NovaQ</h2>
        </li>
      </ul>
      <ul className="footer__list footer__list--links flex">
        <li className="footer__item">Home</li>
        <li className="footer__item">Dashboard</li>
        <li className="footer__item">Profile</li>
      </ul>
      <ul className="footer__list footer__list--socials flex">
        <li className="footer__item">Twitter</li>
        <li className="footer__item">LinkedIn</li>
        <li className="footer__item">Github</li>
      </ul>
    </div>
  </footer>
);

export { Footer };
