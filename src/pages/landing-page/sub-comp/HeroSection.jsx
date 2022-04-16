import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero__wrapper flex">
      <section className="hero__description flex">
        <h2 className="hero__heading">
          Are you a food Lover? Check this by attempting this quiz.
        </h2>
        <p className="hero__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
          beatae dolorem. Ipsa reprehenderit temporibus deserunt suscipit quis
          aspernatur libero vel?
        </p>
        <button
          type="button"
          className="hero__action btn btn--contained-warning"
        >
          Explore
        </button>
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

export { HeroSection };
