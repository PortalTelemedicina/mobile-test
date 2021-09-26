import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RoutesSpecialists } from '../navigation/INavigationApp';
import TabRoutes from './tab.routes';

const App = createStackNavigator<RoutesSpecialists>();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen
        name="MainBottom"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
