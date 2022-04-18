import React, { useEffect } from 'react';
import './LandingPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ACTION_TYPES } from 'reducer';
import { useStateContext } from 'hooks';
import { Navbar, Footer } from 'components';
import { HeroSection } from './sub-comp/HeroSection';

const LandingPage = () => {
  const { state, stateDispatch } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/categories');
        if (res.status === 200) {
          stateDispatch({
            type: ACTION_TYPES.SET_CATEGORIES,
            payload: { category: res.data.categories }
          });
        }
      } catch (err) {
        console.error('Unexpected error while loading categories', err);
      }
    })();
  }, []);

  return (
    <div className="novaq-wrapper grid">
      <header className="header grid">
        <Navbar />
        <HeroSection />
      </header>
      <main className="main">
        <div className="main__wrapper">
          <section className="main__featured featured-category">
            <h1 className="featured-category__title">Featured Category</h1>
            <div className="featured-category__container grid">
              {state?.categories.map((item) => {
                return (
                  <article
                    key={item._id}
                    className="featured-category__category flex category">
                    <div>
                      <h2 className="category__title">
                        {item.categoryName} Quiz
                      </h2>
                      <button type="button" className="category__action">
                        <Link to="/category" state={{ categoryId: item._id }}>
                          Click Me
                        </Link>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
          <section className="main__bottom popular">
            <h1 className="popular__title">Popular Quizzes</h1>
            <div className="popular__container grid">
              <article className="popular__quiz quiz-card flex">
                <section className="card card--basic quiz-card__card">
                  <div className="card__image-container">
                    <img
                      src="https://images.unsplash.com/photo-1504387828636-abeb50778c0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                      alt="cooking"
                      className="card__image"
                    />
                  </div>
                  <div className="card__content quiz-card__content">
                    <h3 className="card__title quiz-card__title">
                      Do you know these cooking Jargons?
                    </h3>
                    <p className="card__author quiz-card__subtitle">
                      Take this quiz to test yourself
                    </p>
                    <p className="card__info quiz-card__info">10 Questions</p>
                    <a href="/pages/rules.html">View Quiz</a>
                  </div>
                </section>
              </article>
              <article className="popular__quiz quiz-card flex">
                <section className="card card--basic quiz-card__card">
                  <div className="card__image-container">
                    <img
                      src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c291dGglMjBpbmRpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                      alt="south-indian-food"
                      className="card__image"
                    />
                  </div>
                  <div className="card__content quiz-card__content">
                    <h3 className="card__title quiz-card__title">
                      Do you know about south indian food?
                    </h3>
                    <p className="card__author quiz-card__subtitle">
                      Take this quiz to test yourself
                    </p>
                    <p className="card__info quiz-card__info">5 Questions</p>
                  </div>
                </section>
              </article>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { LandingPage };
