import React from 'react';
import './Category.css';

import { Footer, Navbar } from 'components';

const CategoryPage = () => (
  <div>
    <header className="header grid">
      <Navbar />
    </header>
    <main className="category-page grid">
      <header className="category-page__header category-header">
        <div className="category-header__wrapper">
          <h2 className="category-header__title">Cooking Jargons</h2>
          <p className="category-header__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            laudantium, maxime ipsam porro dolorum neque?
          </p>
        </div>
      </header>
      <section className="category-page__list category-list">
        <div className="category-list__wrapper grid">
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
          <article className="category-list__quiz quiz-card flex">
            <section className="card card--basic quiz-card__card">
              <div className="card__image-container">
                <img
                  src="https://images.unsplash.com/photo-1605522469906-3fe226b356bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                  alt="group"
                  className="card__image"
                />
              </div>
              <div className="card__content quiz-card__content">
                <h3 className="card__title quiz-card__title">
                  Cooking equips jargon.
                </h3>
                <p className="card__author quiz-card__subtitle">
                  Take this quiz to test yourself
                </p>
                <p className="card__info quiz-card__info">10 Questions</p>
              </div>
            </section>
          </article>
          <article className="category-list__quiz quiz-card flex">
            <section className="card card--basic quiz-card__card">
              <div className="card__image-container">
                <img
                  src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="group"
                  className="card__image"
                />
              </div>
              <div className="card__content quiz-card__content">
                <h3 className="card__title quiz-card__title">
                  I &apos; play the odds, I play the man
                </h3>
                <p className="card__author quiz-card__subtitle">
                  Take this quiz to test yourself
                </p>
                <p className="card__info quiz-card__info">10 Questions</p>
              </div>
            </section>
          </article>
          <article className="category-list__quiz quiz-card flex">
            <section className="card card--basic quiz-card__card">
              <div className="card__image-container">
                <img
                  src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="group"
                  className="card__image"
                />
              </div>
              <div className="card__content quiz-card__content">
                <h3 className="card__title quiz-card__title">
                  I &apos; play the odds, I play the man
                </h3>
                <p className="card__author quiz-card__subtitle">
                  Take this quiz to test yourself
                </p>
                <p className="card__info quiz-card__info">10 Questions</p>
              </div>
            </section>
          </article>
          <article className="category-list__quiz quiz-card flex">
            <section className="card card--basic quiz-card__card">
              <div className="card__image-container">
                <img
                  src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="group"
                  className="card__image"
                />
              </div>
              <div className="card__content quiz-card__content">
                <h3 className="card__title quiz-card__title">
                  I &apos; play the odds, I play the man
                </h3>
                <p className="card__author quiz-card__subtitle">
                  Take this quiz to test yourself
                </p>
                <p className="card__info quiz-card__info">10 Questions</p>
              </div>
            </section>
          </article>
          <article className="category-list__quiz quiz-card flex">
            <section className="card card--basic quiz-card__card">
              <div className="card__image-container">
                <img
                  src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="group"
                  className="card__image"
                />
              </div>
              <div className="card__content quiz-card__content">
                <h3 className="card__title quiz-card__title">
                  I &apos; play the odds, I play the man
                </h3>
                <p className="card__author quiz-card__subtitle">
                  Take this quiz to test yourself
                </p>
                <p className="card__info quiz-card__info">10 Questions</p>
              </div>
            </section>
          </article>
          <article className="category-list__quiz quiz-card flex">
            <section className="card card--basic quiz-card__card">
              <div className="card__image-container">
                <img
                  src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="group"
                  className="card__image"
                />
              </div>
              <div className="card__content quiz-card__content">
                <h3 className="card__title quiz-card__title">
                  I &apos; play the odds, I play the man
                </h3>
                <p className="card__author quiz-card__subtitle">
                  Take this quiz to test yourself
                </p>
                <p className="card__info quiz-card__info">10 Questions</p>
              </div>
            </section>
          </article>
          <article className="category-list__quiz quiz-card flex">
            <section className="card card--basic quiz-card__card">
              <div className="card__image-container">
                <img
                  src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="group"
                  className="card__image"
                />
              </div>
              <div className="card__content quiz-card__content">
                <h3 className="card__title quiz-card__title">
                  I &apos; play the odds, I play the man
                </h3>
                <p className="card__author quiz-card__subtitle">
                  Take this quiz to test yourself
                </p>
                <p className="card__info quiz-card__info">10 Questions</p>
              </div>
            </section>
          </article>
        </div>
      </section>
      <section className="category-page__other-quiz category-other">
        <h2 className="category-other__title">Explore Other Categories</h2>
        <div className="category-other__wrapper grid">
          <section className="category-other__container flex">
            <h2>Category One</h2>
            <button type="button">View</button>
          </section>
          <section className="category-other__container flex">
            <h2>Category One</h2>
            <button type="button">View</button>
          </section>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export { CategoryPage };
