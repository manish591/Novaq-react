import React, { useEffect } from 'react';
import './Result.css';
import { Footer, Navbar } from 'components';
import { useStateContext, useScrollToTop } from 'hooks';
import { db } from 'firebaseConfig';
import { updateDoc, doc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

const findMyScore = (arr) => {
  return arr.reduce((acc, curr) => acc + curr.score, 0);
};

const Result = () => {
  const { state } = useStateContext();
  const useRefID = JSON.parse(localStorage.getItem('userref'));
  const userRefrence = doc(db, 'users', useRefID);
  const userAnswers = Object.values(state.setAnswers);

  useScrollToTop();

  useEffect(() => {
    (async () => {
      try {
        await updateDoc(userRefrence, {
          score: findMyScore(Object.values(state.setAnswers))
        });
      } catch (err) {
        toast.error('Error occured');
      }
    })();
  }, []);

  const findIsAttempted = (index) => {
    const optionsSelectedKeys = Object.keys(state.setAnswers);
    const splitLastPart = optionsSelectedKeys[index]?.slice(
      optionsSelectedKeys[index].length - 1
    );
    if (index === Number(splitLastPart)) {
      return true;
    }
    return false;
  };

  const getClassName = (answers, item, index, option) => {
    if (!answers[index].attempted && item.correct_answer === option) {
      return 'question-card__choices--right';
    }

    if (
      answers[index].attempted &&
      answers[index].value === option &&
      item.correct_answer === option
    ) {
      return 'question-attempted question-card__choices--right';
    }

    if (
      answers[index].attempted &&
      answers[index].value === option &&
      item.correct_answer !== option
    ) {
      return 'question-attempted question-card__choices--wrong';
    }

    if (
      answers[index].attempted &&
      answers[index].value !== option &&
      item.correct_answer === option
    ) {
      return 'question-card__choices--right';
    }

    return '';
  };

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
            state?.currentQuiz?.mcqs.map((item, index) => {
              return (
                <article key={item._id} className="question-card">
                  <p className="question-card__number">Question {index + 1}</p>
                  <h2 className="question-card__title">{item.question}</h2>
                  <ul className="question-card__choices-list grid">
                    {item.options.map((option) => {
                      return (
                        <li
                          key={option}
                          className={`question-card__choices ${getClassName(
                            userAnswers,
                            item,
                            index,
                            option
                          )}`}>
                          {option}
                        </li>
                      );
                    })}
                  </ul>
                  <small>{findIsAttempted(index) || 'Not Attempted'}</small>
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
