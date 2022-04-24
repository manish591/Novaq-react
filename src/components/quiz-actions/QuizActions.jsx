import React from 'react';
import './QuizActions.css';

const QuizActions = () => {
  return (
    <div className="quiz-actions">
      <div className="quiz-actions__overlay">
        <p>overlay</p>
      </div>
      <div className="quiz-actions__wrapper">
        <button type="button" className="btn btn--outlined-secondary">
          Quit Quiz
        </button>
      </div>
    </div>
  );
};

export { QuizActions };
