import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from 'firebaseConfig';
import { getDoc, doc, collection, getDocs } from 'firebase/firestore';
import { useAuthContext, useStateContext } from 'hooks';
import { ACTION_TYPES } from 'reducer';
import { QuestionPage, Result, Rules } from 'pages';
import { QuizActions } from 'components';

const QuizContainer = () => {
  const [showQuizPage, setShowQuizPage] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isQuizActionsOpen, setIsQuizActionsOpen] = useState(false);
  const { quizId } = useParams();
  const { stateDispatch, state } = useStateContext();
  const quizColRef = doc(db, 'quizzes', quizId);

  const { userID } = useAuthContext();

  const userRef = collection(db, 'users');

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

  useEffect(() => {
    (async () => {
      try {
        const res = await getDocs(userRef);
        const newArr = res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        const currentUser = newArr.find((item) => {
          return item.userID === userID;
        });
        localStorage.setItem('userref', JSON.stringify(currentUser.id));
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="quiz-container">
      {state.currentQuiz === null && <h1>...Loading</h1>}
      {!showResult && state.currentQuiz !== null ? (
        <div>
          {showQuizPage && state.currentQuiz ? (
            <QuestionPage
              setShowResult={setShowResult}
              setIsQuizActionsOpen={setIsQuizActionsOpen}
            />
          ) : (
            <Rules setShowQuizPage={setShowQuizPage} />
          )}
        </div>
      ) : null}

      {showResult && <Result />}
      {isQuizActionsOpen && (
        <QuizActions
          setIsQuizActionsOpen={setIsQuizActionsOpen}
          setShowResult={setShowResult}
        />
      )}
    </div>
  );
};

export { QuizContainer };
