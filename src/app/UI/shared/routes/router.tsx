import {Login} from '@/app/UI/pages';
import {HomeRoutes, RouteList} from '@/app/UI/shared/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import ListDoctors from '../../pages/list-doctors/list-doctors';

const Stack = createNativeStackNavigator<RouteList>();
const Router: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="HOME">
      <Stack.Group>
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
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          options={({route}) => ({
            title: route.params.title,
            headerShown: true,
          })}
          name="LIST-DOCTORS"
          component={ListDoctors}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Router;
