import React, { useEffect } from 'react';
import './Category.css';
// import { useLocation } from 'react-router-dom';
import { Footer, Navbar } from 'components';

const CategoryPage = () => {
  // const [categoryData, setCategoryData] = useState({});
  // const location = useLocation();
  // const categoryId = location?.state?.categoryId;

  useEffect(() => {
    (async () => {
      try {
        // setCategoryData(res.data.category);
      } catch (err) {
        console.error('Error in getting quiz for this category', err);
      }
    })();
  }, []);

  return (
    <div>
      <header className="header grid">
        <Navbar />
      </header>
      <main className="category-page grid">
        <header className="category-page__header category-header">
          <div className="category-header__wrapper">
            <h2 className="category-header__title">
              {/* {categoryData?.categoryName} */}
            </h2>
            <p className="category-header__description">
              {/* {categoryData?.description} */}
            </p>
          </div>
        </header>
        <section className="category-page__list category-list">
          {/* {categoryData.quizzes && categoryData.quizzes.length < 1 ? (
            <div className="category-page__coming-soon">
              <h1>Coming Soon...</h1>
            </div>
          ) : (
            <div className="category-list__wrapper grid">
              {categoryData.quizzes &&
                categoryData?.quizzes.map((item) => {
                  return <QuizCard key={item._id} />;
                })}
            </div>
          )} */}
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
