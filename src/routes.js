import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack';
import Icon from '~/components/Icon'

import HomeScreen from '~/screens/Home'
import ChatScreen from '~/screens/Chat'
import NotificationScreen from '~/screens/Notification'
import MoreScreen from '~/screens/More'
import SpecialistsScreen from '~/screens/Specialists'

import { white, gray, purple, light_gray } from './styles/colors'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Main = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        if (route.name === 'Home') iconName = 'home'

        if (route.name === 'Chat') iconName = 'chat'

        if (route.name === 'Notification') iconName = 'notification'

        if (route.name === 'More') iconName = 'menu'

        return <Icon name={iconName} size={size} color={color} />
      }
    })}
    tabBarOptions={{
      activeTintColor: purple,
      inactiveTintColor: light_gray,
      style: {
        backgroundColor: white,
        borderTopWidth: 1,
        borderTopColor: light_gray
      }
    }}>
    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Chat' component={ChatScreen} />
    <Tab.Screen name='Notification' component={NotificationScreen} />
    <Tab.Screen name='More' component={MoreScreen} />
  </Tab.Navigator>
)

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'Main'}>
      <Stack.Screen
        name='Main'
        component={Main}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Specialists'
        component={SpecialistsScreen}
        options={{
          title: ''
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Router
