import React, { useEffect } from 'react';
import './LandingPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ACTION_TYPES } from 'reducer';
import { useStateContext } from 'hooks';
import { Navbar, Footer, QuizCard } from 'components';
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
              <QuizCard />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { LandingPage };
