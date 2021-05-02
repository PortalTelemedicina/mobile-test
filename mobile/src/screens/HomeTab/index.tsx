import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBottomNavigate from '../../components/TabBarBottom';

import Home from '../Home';
import Specialists from '../Specialists';

const Tab = createBottomTabNavigator();

const Dashboard: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={ props => <TabBottomNavigate {...props} /> }
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Specialists" component={Specialists} />
    </Tab.Navigator>
  );
};

export default Dashboard;
