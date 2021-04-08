import React from 'react';
import { SvgUri } from 'react-native-svg';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../../assets/images/chat';
import Home from '../pages/Home';
import ListSpecialists from '../pages/ListSpecialists';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen(): JSX.Element {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        options={{
          headerStyle: {
            elevation: 0,
            backgroundColor: '#fff',
          },
          headerTitle: '',
          headerRight: () => (
            <SvgUri
              uri="https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/filter-results-button.svg"
              width="100%"
              height="100%"
              fill="blue"
            />
          ),
        }}
        name="ListSpecialists"
        component={ListSpecialists}
      />
    </HomeStack.Navigator>
  );
}

const NotificationView = (): JSX.Element => {
  return (
    <View>
      <Text>View</Text>
    </View>
  );
};

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'below-icon',
      activeTintColor: '#8462E8',
      labelStyle: {
        fontFamily: 'Segoe UI Semi-Bold',
        fontSize: 14,
      },
      showLabel: true,
      style: {
        flexDirection: 'column',
        display: 'flex',
      },
      inactiveTintColor: '#768494',
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <SvgUri
            uri="https://svgshare.com/i/Vrw.svg"
            width="70%"
            height="70%"
            fill={color}
          />
        ),
        title: 'Home',
      }}
      name="Home"
      component={HomeStackScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Chat width="70%" height="70%" fill={color} />
        ),
        title: 'Chats',
      }}
      name="Chats"
      component={NotificationView}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <SvgUri
            uri="https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/notification.svg"
            width="70%"
            height="70%"
            fill={color}
          />
        ),
        title: 'Notifications',
      }}
      name="Notifications"
      component={NotificationView}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <SvgUri
            uri="https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/menu.svg "
            width="70%"
            height="70%"
            fill={color}
          />
        ),
        title: 'More',
      }}
      name="More"
      component={NotificationView}
    />
  </Tab.Navigator>
);

export default TabRoutes;
