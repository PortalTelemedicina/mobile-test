import {Activity, Chat, ListSpecialists, Menu} from '@/app/UI/pages';
import {HomeBottomBar, HomeHeader} from '@/app/UI/shared/components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeRoutes: React.FC = () => (
  <Navigator
    tabBar={({state, navigation}) => (
      <HomeBottomBar
        currentIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
      />
    )}
    screenOptions={{
      header: () => <HomeHeader />,
      headerShown: true,
    }}
  >
    <Screen name="APPOINTMENT" component={ListSpecialists} />
    <Screen name="CHAT" component={Chat} />
    <Screen name="ACTIVITY" component={Activity} />
    <Screen name="MENU" component={Menu} />
  </Navigator>
);

export default HomeRoutes;
