import React from 'react';
import './LandingPage.css';

import { Navbar, Footer } from 'components';
import { HeroSection } from './sub-comp/HeroSection';

const LandingPage = () => (
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
            <article className="featured-category__category flex category category--one">
              <div>
                <h2 className="category__title">Cooking Jargons</h2>
                <button type="button" className="category__action">
                  <a href="/pages/category.html">Click Me</a>
                </button>
              </div>
            </article>
            <article className="featured-category__category flex category category--two">
              <div>
                <h2 className="category__title">Vagetables Mystery</h2>
                <button type="button" className="category__action">
                  View Quiz
                </button>
              </div>
            </article>
            <article className="featured-category__category flex category category--three">
              <div>
                <h2 className="category__title">Food Season</h2>
                <button type="button" className="category__action">
                  View Quiz
                </button>
              </div>
            </article>
            <article className="featured-category__category flex category category--four">
              <div>
                <h2 className="category__title">Category Four</h2>
                <button type="button" className="category__action">
                  View Quiz
                </button>
              </div>
            </article>
            <article className="featured-category__category flex category category--five">
              <div>
                <h2 className="category__title">Category Five</h2>
                <button type="button" className="category__action">
                  View Quiz
                </button>
              </div>
            </article>
            <article className="featured-category__category flex category category--six">
              <div>
                <h2 className="category__title">Category Six</h2>
                <button type="button" className="category__action">
                  View Quiz
                </button>
              </div>
            </article>
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

export { LandingPage };
