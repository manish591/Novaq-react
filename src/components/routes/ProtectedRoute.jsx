import React from 'react';
import PropTypes from 'prop-types';
import { useAuthContext } from 'hooks';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useAuthContext();
  return token ? (
    children
  ) : (
    <Navigate to="/login" replace state={location.pathname} />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired
};

export { ProtectedRoute };
