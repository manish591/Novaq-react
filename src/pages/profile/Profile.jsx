import React from 'react';
import { useAuthService, useScrollToTop } from 'hooks';

const Profile = () => {
  const { logout } = useAuthService();
  useScrollToTop();
  return (
    <div className="profile">
      <h1>Name: Manish</h1>
      <h1>Email: manishdevrani777@gmail.com</h1>
      <button
        type="button"
        className="btn btn--contained-primary"
        onClick={() => {
          logout();
        }}>
        Logout
      </button>
    </div>
  );
};

export { Profile };
