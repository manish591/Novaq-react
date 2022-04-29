import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [userID, setUserID] = useState('');
  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        token,
        userID,
        setToken,
        setUserID
      }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { AuthContextProvider, AuthContext };
