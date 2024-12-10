import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, isAuth, ...rest }) {
  return (
    <Route
      {...rest}
      element={isAuth ? Component : <Navigate to='/login' />}
    />
  );
}

export default ProtectedRoute;
