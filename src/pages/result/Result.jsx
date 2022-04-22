import React from 'react';
import './Result.css';
import { Footer, Navbar } from 'components';
import { useStateContext, useScrollToTop } from 'hooks';

const Result = () => {
  const { state } = useStateContext();

  const findMyScore = (arr) => {
    return arr.reduce((acc, curr) => acc + curr.score, 0);
  };

  useScrollToTop();

  return (
    <div>
      <header className="header grid">
        <Navbar />
      </header>
      <div className="result grid">
        <section className="result__messages">
          <h1 className="result__title">Result</h1>
          <h2 className="result__greeting">You Played Better!</h2>
          <p className="result__score">
            Score: {findMyScore(Object.values(state.setAnswers))} /{' '}
            {state?.currentQuiz?.totalScore}
          </p>
        </section>
        <section className="result__details grid">
          {state?.currentQuiz?.mcqs &&
            state?.currentQuiz?.mcqs.map((item) => {
              return (
                <article key={item._id} className="question-card">
                  <p className="question-card__number">Question One</p>
                  <h2 className="question-card__title">{item.question}</h2>
                  <ul className="question-card__choices-list grid">
                    {item.options.map((option) => {
                      return (
                        <li
                          key={option}
                          className={`question-card__choices ${
                            item.correct_answer === option &&
                            'question-card__choices--right'
                          }`}>
                          {option}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export { Result };
