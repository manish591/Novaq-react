import React from 'react';
import './Profile.css';
import { useAuthService, useScrollToTop } from 'hooks';
import { Navbar } from 'components';

const Profile = () => {
  const { logout } = useAuthService();
  useScrollToTop();
  return (
    <>
      <header className="header grid">
        <Navbar />
      </header>
      <div className="profile">
        <div className="profile__wrapper">
          <section className="profile__content">
            <div className="profile__details flex">
              <p>Name:</p>
              <h1>Manish</h1>
            </div>
            <div className="profile__details flex">
              <p>Email:</p>
              <h1>manishdevrani777@gmail.com</h1>
            </div>
            <button
              type="button"
              className="btn btn--contained-primary profile__logout"
              onClick={() => {
                logout();
              }}>
              Logout
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export { Profile };
