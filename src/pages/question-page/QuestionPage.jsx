import React, { useEffect, useState } from 'react';
import './QuestionPage.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStateContext } from 'hooks';
import { ACTION_TYPES } from 'reducer';

const QuestionPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestionData, setCurrentQuestionData] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const { state, stateDispatch } = useStateContext();
  const location = useLocation();
  const quizId = location?.state?.quizId;
  const questionId = state?.currentQuiz?.mcqs[questionNumber]._id;
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/quizzes/${quizId}/${questionId}`);
        if (res.status === 200) {
          setCurrentQuestionData(res.data.question);
        }
      } catch (err) {
        console.error('Error in fetching question', err);
      }
    })();
  }, [questionNumber]);

  const calculateScore = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer ? 5 : 0;
  };

  return (
    <div>
      <main className="question-main flex">
        <div className="question-main__wrapper grid">
          <section className="question-main__details question-info grid">
            <div className="question-info__top flex">
              <div>
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
              <img
                src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                alt=""
                className="responsive-img"
              />
              {questionNumber + 1 >= state?.currentQuiz?.totalQuestions ? (
                <button
                  type="button"
                  onClick={() => {
                    navigate(`/quiz/${quizId}/result`, { replace: true });
                  }}>
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setQuestionNumber((qn) => qn + 1);
                  }}>
                  Save & Next
                </button>
              )}
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
};

export { QuestionPage };
