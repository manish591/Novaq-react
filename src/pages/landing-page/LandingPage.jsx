import React, { useEffect } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { db } from 'firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { ACTION_TYPES } from 'reducer';
import { useStateContext, useScrollToTop } from 'hooks';
import { toast } from 'react-hot-toast';
import { Navbar, Footer, QuizCard } from 'components';
import { HeroSection } from './sub-comp/HeroSection';

const LandingPage = () => {
  const { state, stateDispatch } = useStateContext();
  const categoriesRef = collection(db, 'categories');

  useEffect(() => {
    (async () => {
      try {
        const res = await getDocs(categoriesRef);
        const newCategories = res.docs.map((doc) => {
          return { ...doc.data(), _id: doc.id };
        });
        stateDispatch({
          type: ACTION_TYPES.SET_CATEGORIES,
          payload: { category: newCategories }
        });
      } catch (err) {
        toast.error('Unexpected error while loading categories');
      }
    })();
  }, []);

  useScrollToTop();

  return (
    <div className="novaq-wrapper grid">
      <Navbar />
      <header className="header grid">
        <HeroSection />
      </header>
      <main className="main">
        <div className="main__wrapper">
          <section className="main__featured featured-category" id="categories">
            <h1 className="featured-category__title">Featured Category</h1>
            <div className="featured-category__container grid">
              {state?.categories.length
                ? state?.categories.map((item) => {
                    return (
                      <article
                        key={item._id}
                        className="featured-category__category flex category"
                        style={{
                          backgroundImage: `url(${item.img})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover'
                        }}>
                        <div className="featured-category__backdrop">
                          &nbsp;
                        </div>
                        <div className="category__content">
                          <h2 className="category__title">
                            {item.categoryName} Quiz
                          </h2>
                          <button type="button" className="category__action">
                            <Link
                              to="/category"
                              state={{ categoryId: item._id }}>
                              Click Me
                            </Link>
                          </button>
                        </div>
                      </article>
                    );
                  })
                : null}
            </div>
          </section>
          <section className="main__bottom popular">
            <h1 className="popular__title">Popular Quizzes</h1>
            <div className="popular__container grid">
              <QuizCard
                _id="6db2deca-544e-499a-aed8-ffee86a534bb"
                categoryName="Books"
                totalQuestion="5"
                title="Are you a books lover? Part I"
                image="https://res.cloudinary.com/dcugqfvvg/image/upload/v1651666063/image_43_z4b5j8.webp"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { LandingPage };
