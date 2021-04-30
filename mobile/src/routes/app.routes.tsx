import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTab from '../screens/HomeTab';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      hidden={false}
      translucent
      backgroundColor="transparent"
    />
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}
    >
      <App.Screen name="HomeTab" component={ HomeTab } />
    </App.Navigator>
  </>
);

export default AppRoutes;
