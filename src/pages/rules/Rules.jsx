import React from 'react';
import './Rules.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useScrollToTop } from 'hooks';
import { Navbar, Footer } from 'components';

const Rules = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  useScrollToTop();
  return (
    <div>
      <header className="header grid">
        <Navbar />
      </header>
      <main className="rules">
        <ul className="lists rules__list">
          <li className="lists__item lists__heading">
            <h3 className="rules__heading">Rules</h3>
          </li>
          <li className="lists__item rules__item flex">
            <span className="material-icons-round">double_arrow</span>
            <p>You will be awarded 10 Points for right answer.</p>
          </li>
          <li className="lists__item rules__item flex">
            <span className="material-icons-round">double_arrow</span>
            <p>
              You need to answer before the timer ends otherwise no points will
              be awarded.
            </p>
          </li>
          <li className="lists__item rules__item flex">
            <span className="material-icons-round">double_arrow</span>
            <p>You can quit quiz anytime.</p>
          </li>
          <li className="lists__item rules__item flex">
            <span className="material-icons-round">double_arrow</span>
            <p>Lorem ipsum dolor sit.</p>
          </li>
          <li className="lists__item rules__item flex">
            <span className="material-icons-round">double_arrow</span>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className="lists__item rules__item flex">
            <span className="material-icons-round">double_arrow</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li className="lists__item rules__item flex">
            <span className="material-icons-round">double_arrow</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              amet!
            </p>
          </li>
          <li className="lists__item rules__item--action">
            <button
              type="button"
              className="rules__start-quiz btn btn--contained-primary"
              onClick={() => {
                navigate(
                  '/quiz/6db2deca-544e-499a-aed8-ffee86a534bb/question',
                  { state: { quizId }, replace: true }
                );
              }}>
              Start Quiz
            </button>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export { Rules };
