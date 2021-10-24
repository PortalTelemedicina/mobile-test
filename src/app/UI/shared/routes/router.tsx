import {Login} from '@/app/UI/pages';
import {HomeRoutes, RouteList} from '@/app/UI/shared/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

const Stack = createNativeStackNavigator<RouteList>();
const Router: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="HOME">
      <Stack.Screen
        name="LOGIN"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HOME"
        component={HomeRoutes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
