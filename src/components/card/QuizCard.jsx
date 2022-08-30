import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuizCard = ({ _id, categoryName, title, totalQuestion, image }) => {
  return (
    <Link to={`/quiz/${_id}`} className="category-list__quiz quiz-card flex">
      <section className="card card--basic quiz-card__card">
        <div className="card__image-container">
          <img
            src={
              image ||
              'https://res.cloudinary.com/dcugqfvvg/image/upload/v1661796776/l9rf9sz6cqngif9w7amf.png'
            }
            alt="group"
            className="card__image"
          />
        </div>
        <div className="card__content quiz-card__content">
          <h2 className="card__title quiz-card__title">{title}</h2>
          <p>{categoryName}</p>
          <p className="card__info quiz-card__info">
            {totalQuestion} Questions
          </p>
        </div>
      </section>
    </Link>
  );
};

QuizCard.propTypes = {
  _id: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  totalQuestion: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export { QuizCard };
