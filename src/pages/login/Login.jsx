import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useAuthService, useScrollToTop } from 'hooks';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState({
    emailError: '',
    passwordError: ''
  });

  const { login } = useAuthService();

  const handleUserLogin = async (e) => {
    e.preventDefault();
    login(loginData.email, loginData.password);
  };

  const handleValidateUser = (e) => {
    const { name, validationMessage } = e.target;
    const isValid = e.target.validity.valid;
    if (isValid) {
      setLoginError({ ...loginError, [`${name}Error`]: '' });
    } else {
      setLoginError({ ...loginError, [`${name}Error`]: validationMessage });
    }
  };

  const handleGuestLogin = () => {
    setLoginData({
      email: 'manishdevrani777@gmail.com',
      password: '123456789'
    });
    login('manishdevrani777@gmail.com', '123456789');
  };

  useScrollToTop();

  return (
    <main className="login main-shadow">
      <div className="wrapper">
        <div className="login__header">
          <h1 className="login__title">Log In</h1>
          <p className="login__greeting">Welcome! Back</p>
        </div>
        <form className="login__form" onSubmit={handleUserLogin}>
          <section className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="login__email"
              autoComplete="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              onBlur={handleValidateUser}
              required
            />
            <p className="login-form__error error-state">
              {loginError.emailError}
            </p>
          </section>
          <section className="password-container">
            <label htmlFor="password">Password</label>
            <section className="password-toggle">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="login__password"
                minLength={8}
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                onBlur={handleValidateUser}
                required
              />
              <button
                type="button"
                className="password-toggle__icon"
                onClick={() => {
                  setShowPassword((sp) => !sp);
                }}>
                {showPassword ? (
                  <span className="material-icons-outlined">
                    visibility_off
                  </span>
                ) : (
                  <span className="material-icons-outlined">visibility</span>
                )}
              </button>
            </section>
            <p className="login-form__error error-state">
              {loginError.passwordError}
            </p>
          </section>
          <section className="submit-btn">
            <button type="submit" className="login__submit">
              Log In
            </button>
          </section>
        </form>
        <div className="login__footer">
          <p>Don&apos;t Have an account? </p>
          <button type="button" className="login__signup">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
        <div className="guest-login">
          <p>or</p>
          <button
            type="button"
            className="guest-login__btn"
            onClick={handleGuestLogin}>
            Guest Login
          </button>
        </div>
      </div>
    </main>
  );
};

export { Login };
