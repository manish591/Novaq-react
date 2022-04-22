import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from 'firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { useStateContext } from 'hooks';
import { ACTION_TYPES } from 'reducer';
import { QuestionPage, Result, Rules } from 'pages';

const QuizContainer = () => {
  const [showQuizPage, setShowQuizPage] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const { quizId } = useParams();
  const { stateDispatch, state } = useStateContext();
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
      {state.currentQuiz === null && <h1>...Loading</h1>}
      {!showResult && (
        <div>
          {showQuizPage && state.currentQuiz ? (
            <QuestionPage setShowResult={setShowResult} />
          ) : (
            <Rules setShowQuizPage={setShowQuizPage} />
          )}
        </div>
      )}

      {showResult && <Result />}
    </div>
  );
};

export { QuizContainer };
