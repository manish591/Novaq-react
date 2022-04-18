import React from 'react';

const QuizCard = () => {
  return (
    <article className="category-list__quiz quiz-card flex">
      <section className="card card--basic quiz-card__card">
        <div className="card__image-container">
          <img
            src="https://images.unsplash.com/photo-1504387828636-abeb50778c0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="group"
            className="card__image"
          />
        </div>
        <div className="card__content quiz-card__content">
          <h3 className="card__title quiz-card__title">
            Do You know these cooking jargons?
          </h3>
          <p className="card__author quiz-card__subtitle">
            Take this quiz to test yourself
          </p>
          <p className="card__info quiz-card__info">10 Questions</p>
        </div>
      </section>
    </article>
  );
};

export { QuizCard };
