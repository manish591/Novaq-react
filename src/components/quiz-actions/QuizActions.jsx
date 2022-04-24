import React from 'react';
import './QuizActions.css';
import PropTypes from 'prop-types';

const QuizActions = ({ setIsQuizActionsOpen, setShowResult }) => {
  return (
    <div className="quiz-actions">
      <button
        className="quiz-actions__overlay"
        type="button"
        onClick={() => {
          setIsQuizActionsOpen(false);
        }}>
        <p>overlay</p>
      </button>
      <div className="quiz-actions__wrapper">
        <button
          type="button"
          className="btn btn--outlined-secondary"
          onClick={() => {
            setShowResult(true);
            setIsQuizActionsOpen(false);
          }}>
          Quit Quiz
        </button>
      </div>
    </div>
  );
};

QuizActions.propTypes = {
  setIsQuizActionsOpen: PropTypes.func.isRequired,
  setShowResult: PropTypes.func.isRequired
};

export { QuizActions };
