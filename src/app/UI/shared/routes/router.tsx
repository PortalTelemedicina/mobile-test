import {Login} from '@/app/UI/pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../../pages/home/home';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LOGIN"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HOME"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Router;
