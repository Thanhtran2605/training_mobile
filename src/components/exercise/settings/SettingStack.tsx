import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsStackParamList } from '../type/NavigationType';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  <Stack.Navigator>
    {/* <Stack.Screen name="SettingsMain" component={SettingsScreen} /> */}
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>;
};

export default SettingsStack;
