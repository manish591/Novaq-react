import React from 'react';
import './QuestionPage.css';

const QuestionPage = () => (
  <div>
    <main className="question-main flex">
      <div className="question-main__wrapper grid">
        <section className="question-main__details question-info grid">
          <div className="question-info__top flex">
            <div>
              <p className="question-info__number">Question 5 of 10</p>
              <h2 className="question-info__question">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                sed rem provident quis incidunt molestiae, dolores iure.
                Molestias, dolor veritatis?
              </h2>
            </div>
            <button type="button" className="question-info__menu">
              <span className="material-icons-outlined">menu</span>
            </button>
          </div>
          <div className="refrence">
            <img
              src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
              className="responsive-img"
            />
          </div>
          <div className="question-info__bottom">
            <div className="question-info__options choices">
              <ul className="choice__list grid">
                <li className="choices__item">Option One</li>
                <li className="choices__item">Option Two</li>
                <li className="choices__item">Option Three</li>
                <li className="choices__item">Option Four</li>
              </ul>
            </div>
            <div className="question-action__wrapper flex">
              <button
                type="button"
                className="question-action__next btn btn--contained-primary">
                <a href="/pages/result.html">Save & Next</a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export { QuestionPage };
