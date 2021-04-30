import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';
import Routes from './routes';

const App = () => (
  <NavigationContainer>
    <AppProvider>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
