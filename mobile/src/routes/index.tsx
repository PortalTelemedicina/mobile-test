import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

import { useAuth } from '../hooks/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import Loading from '../components/Loading';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    SplashScreen.hide();
  }, []);  

  if (loading) {
    return (
      <Loading />
    );
  }  

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
