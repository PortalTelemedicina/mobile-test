import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="dark-content"
      hidden={false}
      translucent
      backgroundColor="transparent"
    />
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Auth.Screen name="Welcome" component={ Welcome } />
    </Auth.Navigator>
  </>
);

export default AppRoutes;
