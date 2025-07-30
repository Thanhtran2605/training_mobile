import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../component/FeedScreen';
import MessageScreen from '../component/MessageScreen';
import ProfileScreen from '../component/ProfileScreen';
import { RootTabParamList } from '../type/RootTabParam';

const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen name="MessagesScreen" component={MessageScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTab;
