import React, { useState } from 'react';
import './QuestionPage.css';
import { useStateContext, useScrollToTop } from 'hooks';
import { ACTION_TYPES } from 'reducer';
import PropTypes from 'prop-types';

const QuestionPage = ({ setShowResult }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const { state, stateDispatch } = useStateContext();
  const currentQuestionData = state?.currentQuiz?.mcqs[questionNumber];

  useScrollToTop();

  const calculateScore = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer ? 5 : 0;
  };

  return (
    <div>
      <main className="question-main flex">
        <div className="question-main__wrapper grid">
          <section className="question-main__details question-info grid">
            <div className="question-info__top flex">
              <div className="question-info__questions">
                <p className="question-info__number">
                  Question {questionNumber + 1} of{' '}
                  {state?.currentQuiz?.totalQuestions}
                </p>
                <h2 className="question-info__question">
                  {currentQuestionData?.question}
                </h2>
              </div>
              <button type="button" className="question-info__menu">
                <span className="material-icons-outlined">menu</span>
              </button>
            </div>
            <div className="refrence">
              <div className="refrence__wrapper">
                <img
                  src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="responsive-img"
                />
                {questionNumber + 1 >= state?.currentQuiz?.totalQuestions ? (
                  <button
                    type="button"
                    className="reference__next btn btn--contained-primary"
                    onClick={() => {
                      setShowResult(true);
                    }}>
                    Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    className="reference__next btn btn--contained-primary"
                    onClick={() => {
                      setQuestionNumber((qn) => qn + 1);
                    }}>
                    Save & Next
                  </button>
                )}
              </div>
            </div>
            <div className="question-info__bottom">
              <div className="question-info__options choices">
                <ul className="choice__list grid">
                  {currentQuestionData.options &&
                    currentQuestionData?.options.map((item) => {
                      return (
                        <li
                          key={item}
                          className={`choices__item ${
                            selectedOption === item && 'choices__item--selected'
                          }`}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedOption(item);
                              stateDispatch({
                                type: ACTION_TYPES.SET_ANSWERS,
                                payload: {
                                  userAction: 'setting',
                                  attempted: true,
                                  key: `one${questionNumber}`,
                                  value: item,
                                  score: calculateScore(
                                    item,
                                    currentQuestionData.correct_answer
                                  )
                                }
                              });
                            }}>
                            {item}
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="question-action__wrapper flex">
                {questionNumber + 1 >= state?.currentQuiz?.totalQuestions ? (
                  <button
                    type="button"
                    className="question-action__next btn btn--contained-primary"
                    onClick={() => {
                      setShowResult(true);
                    }}>
                    Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    className="question-action__next btn btn--contained-primary"
                    onClick={() => {
                      setQuestionNumber((qn) => qn + 1);
                    }}>
                    Save & Next
                  </button>
                )}
              </div>
              <div className="question-info__timer" style={{ display: 'none' }}>
                <meter
                  id="fuel"
                  min="0"
                  max="100"
                  low="33"
                  high="66"
                  optimum="80"
                  value="90">
                  at 50/100
                </meter>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

QuestionPage.propTypes = {
  setShowResult: PropTypes.func.isRequired
};

export { QuestionPage };
