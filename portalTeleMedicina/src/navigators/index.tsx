import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

// TabBar
import TabBar from './TabBar/TabBar';
import { ScreenNames } from './TabBar/TabBarIcon';

// Screens
import Home from '@screens/Home/Home';
import SpecialistList from '@screens/SpecialistList/SpecialistList';

const Navigators = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: '#FFF',
    },
  };

  const TabBarStack = () => (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={ScreenNames.HOME} component={Home} options={{headerShown: false}}/>
      <Tab.Screen name={ScreenNames.DOWNLOADS} component={Home} options={{headerShown: false}}/>
      <Tab.Screen name={ScreenNames.PROFILE} component={Home} options={{headerShown: false}}/>
    </Tab.Navigator>
  )

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <NavigationContainer theme={CustomDefaultTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeScreen'>
          <Stack.Screen name='HomeScreen' component={TabBarStack}/>
          <Stack.Screen name='SpecialistListScreen' component={SpecialistList}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Navigators;