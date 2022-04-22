import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { db } from 'firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { useStateContext } from 'hooks';
import { ACTION_TYPES } from 'reducer';

const QuizContainer = () => {
  const { quizId } = useParams();
  const { stateDispatch } = useStateContext();
  const quizColRef = doc(db, 'quizzes', quizId);

  useEffect(() => {
    (async () => {
      try {
        const res = await getDoc(quizColRef);
        stateDispatch({
          type: ACTION_TYPES.SET_CURRENT_QUIZ,
          payload: { quiz: { ...res.data(), _id: res.id } }
        });
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
