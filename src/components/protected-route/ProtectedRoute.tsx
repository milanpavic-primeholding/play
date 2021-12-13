import React from 'react';

import { Route, useNavigate } from 'react-router-dom';

interface tt {
  isAuth: boolean;
  Component: React.FC;
  [key: string]: any;
}

const ProtectedRoute = ({ isAuth: isAuth, Component, ...rest }: tt) => {
  const navigate = useNavigate();
  if (isAuth) {
    return <Route {...rest} element={<Component />} />;
  }
  navigate('/');
};

export default ProtectedRoute;
