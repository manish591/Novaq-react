import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from 'hooks';

const HeroSection = () => {
  const { token } = useAuthContext();
  return (
    <section className="hero">
      <div className="hero__wrapper flex">
        <section className="hero__description flex">
          <h2 className="hero__heading">Getting Bored? Try these quizzes.</h2>
          <p className="hero__text">
            A quiz app lets you experience different kinds of entertainment. You
            can enjoy a new way to spend your time. You do not need to sign up
            an account or provide any personal information - just start playing!
          </p>
          {token ? (
            <a href="#categories">
              <button
                type="button"
                className="hero__action btn btn--contained-primary">
                View Categories
              </button>
            </a>
          ) : (
            <Link to="/login">
              <button
                type="button"
                className="hero__action btn btn--contained-warning">
                Get Started
              </button>
            </Link>
          )}
        </section>
        <section className="hero__image-container">
          <img
            src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1650111013/undraw_online_test_gba7_ekztlt.svg"
            alt="hero"
            className="hero__img"
          />
        </section>
      </div>
    </section>
  );
};

export { HeroSection };
