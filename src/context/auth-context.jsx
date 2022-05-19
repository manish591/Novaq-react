import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
  const [userID, setUserID] = useState(
    JSON.parse(localStorage.getItem('userID'))
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user'))
  );
  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        token,
        userID,
        currentUser,
        setToken,
        setUserID,
        setCurrentUser
      }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { AuthContextProvider, AuthContext };
