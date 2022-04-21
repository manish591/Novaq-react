import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { AuthContextProvider, AuthContext };
