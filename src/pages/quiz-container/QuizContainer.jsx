import React, { useEffect } from 'react';
import axios from 'axios';
import { Outlet, useParams } from 'react-router-dom';
import { useStateContext } from 'hooks';
import { ACTION_TYPES } from 'reducer';

const QuizContainer = () => {
  const { quizId } = useParams();
  const { stateDispatch } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/quizzes/${quizId}`);
        if (res.status === 200) {
          stateDispatch({
            type: ACTION_TYPES.SET_CURRENT_QUIZ,
            payload: { quiz: res.data.quiz }
          });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="quiz-container">
      <Outlet />
    </div>
  );
};

export { QuizContainer };
