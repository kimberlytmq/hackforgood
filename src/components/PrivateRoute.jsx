// import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;