import {UIKittenProvider} from '@/app/UI/shared/components/ui-kitten-provider/ui-kitten-provider';
import {Router} from '@/app/UI/shared/routes';
import '@/config/locale';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const App = () => {
  const isDarkMode = false;

  return (
    <NavigationContainer>
      <UIKittenProvider darkMode={isDarkMode}>
        <Router />
      </UIKittenProvider>
    </NavigationContainer>
  );
};

export default App;
