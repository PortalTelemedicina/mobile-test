import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { systemColors } from '../system';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import HomeScreen from '../screens/HomeScreen';
import BlankScreen from '../screens/BlankScreen';
import SpecialistListScreen from '../screens/SpecialistListScreen';
import IconContainer from '../components/IconContainer';

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <SettingsStack.Screen
        name="SpecialistListScreen"
        component={SpecialistListScreen}
        options={{
          title: '',
          headerRight: () => <IconContainer name="filter-variant" size={25} style={{ marginRight: 15 }} />,
        }}
      />
    </SettingsStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStackScreen"
      screenOptions={{
        tabBarActiveTintColor: systemColors.tint,
      }}>
      <BottomTab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Tab2"
        component={BlankScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="comment-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Tab3"
        component={BlankScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="account-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Tab4"
        component={BlankScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="menu" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; color: string }) {
  const { name, color } = props;
  return <IconContainer size={30} style={{ marginTop: 10 }} name={name} color={color} />;
}
