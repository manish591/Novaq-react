import React from 'react';
import { useAuthContext } from 'hooks';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const RedirectedRoute = ({ children }) => {
  const { token } = useAuthContext();
  return token ? <Navigate to="/home" replace /> : children;
};

RedirectedRoute.propTypes = {
  children: PropTypes.element.isRequired
};

export { RedirectedRoute };
