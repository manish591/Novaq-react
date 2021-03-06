import React, { useEffect, useState } from 'react';
import './Category.css';
import { db } from 'firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from 'hooks';
import { Footer, Navbar, QuizCard } from 'components';

const CategoryPage = () => {
  const [categoryData, setCategoryData] = useState({});
  const location = useLocation();
  const categoryId = location?.state?.categoryId;
  const categoryRef = doc(db, 'categories', categoryId);

  useEffect(() => {
    (async () => {
      try {
        const res = await getDoc(categoryRef);
        setCategoryData(res.data());
      } catch (err) {
        console.error('Error in getting quiz for this category', err);
      }
    })();
  }, []);

  useScrollToTop();

  return (
    <div>
      <header className="header grid">
        <Navbar />
      </header>
      <main className="category-page grid">
        <header className="category-page__header category-header">
          <div className="category-header__wrapper">
            <h2 className="category-header__title">
              {categoryData?.categoryName}
            </h2>
            <p className="category-header__description">
              {categoryData?.description}
            </p>
          </div>
        </header>
        <section className="category-page__list category-list">
          {categoryData.quizzes && categoryData.quizzes.length < 1 ? (
            <div className="category-page__coming-soon">
              <h1>Coming Soon...</h1>
            </div>
          ) : (
            <div className="category-list__wrapper grid">
              {categoryData.quizzes &&
                categoryData?.quizzes.map((item) => {
                  return (
                    <QuizCard
                      key={item._id}
                      _id={item._id}
                      totalQuestion={item.totalQuestion}
                      categoryName={item.categoryName}
                      title={item.title}
                      image={item.image}
                    />
                  );
                })}
            </div>
          )}
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
};

export { CategoryPage };
