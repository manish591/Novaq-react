import React from 'react';
import './Result.css';
import { Footer, Navbar } from 'components';

const Result = () => (
  <div>
    <header className="header grid">
      <Navbar />
    </header>
    <div className="result grid">
      <section className="result__messages">
        <h1 className="result__title">Result</h1>
        <h2 className="result__greeting">You Played Better!</h2>
        <p className="result__score">Score: 5 / 10</p>
      </section>
      <section className="result__details grid">
        <article className="question-card">
          <p className="question-card__number">Question One</p>
          <h2 className="question-card__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            itaque?
          </h2>
          <ul className="question-card__choices-list grid">
            <li className="question-card__choices">Option One</li>
            <li className="question-card__choices question-card__choices--right">
              Option Two
            </li>
            <li className="question-card__choices">Option Three</li>
            <li className="question-card__choices">Option Four</li>
          </ul>
        </article>
        <article className="question-card">
          <p className="question-card__number">Question Two</p>
          <h2 className="question-card__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a
            aperiam doloribus est dolorem voluptatem?
          </h2>
          <ul className="question-card__choices-list grid">
            <li className="question-card__choices question-card__choices--wrong">
              Option One
            </li>
            <li className="question-card__choices">Option Two</li>
            <li className="question-card__choices question-card__choices--right">
              Option Three
            </li>
            <li className="question-card__choices">Option Four</li>
          </ul>
        </article>
        <article className="question-card">
          <p className="question-card__number">Question Three</p>
          <h2 className="question-card__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            eveniet minus?
          </h2>
          <ul className="question-card__choices-list grid">
            <li className="question-card__choices">Option One</li>
            <li className="question-card__choices question-card__choices--right">
              Option Two
            </li>
            <li className="question-card__choices">Option Three</li>
            <li className="question-card__choices question-card__choices--wrong">
              Option Four
            </li>
          </ul>
        </article>
        <article className="question-card">
          <p className="question-card__number">Question Four</p>
          <h2 className="question-card__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
          </h2>
          <ul className="question-card__choices-list grid">
            <li className="question-card__choices">Option One</li>
            <li className="question-card__choices question-card__choices--wrong">
              Option Two
            </li>
            <li className="question-card__choices">Option Three</li>
            <li className="question-card__choices question-card__choices--right">
              Option Four
            </li>
          </ul>
        </article>
        <article className="question-card">
          <p className="question-card__number">Question Five</p>
          <h2 className="question-card__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            architecto doloribus ab aspernatur amet deserunt ad accusamus!
            Labore?
          </h2>
          <ul className="question-card__choices-list grid">
            <li className="question-card__choices question-card__choices--right">
              Option One
            </li>
            <li className="question-card__choices">Option Two</li>
            <li className="question-card__choices">Option Three</li>
            <li className="question-card__choices">Option Four</li>
          </ul>
        </article>
      </section>
    </div>
    <Footer />
  </div>
);

export { Result };
