import React from 'react';

import { useAuth } from '../hooks/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import Loading from '../components/Loading';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Loading />
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
