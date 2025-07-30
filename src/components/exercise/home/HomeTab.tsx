import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../type/NavigationType';
import FeedScreen from './FeedScreen';
import MessagesScreen from './MessagesScreen';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTab = () => {
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Messages" component={MessagesScreen} />
  </Tab.Navigator>;
};

export default HomeTab;
