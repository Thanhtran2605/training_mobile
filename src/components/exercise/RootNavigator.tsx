import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabNavigator from './home/HomeTab';
import SettingsStackNavigator from './settings/SettingStack';
import { RootDrawerParamList } from './type/NavigationType';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

// const RootNavigator = () => (
//   <NavigationContainer>
//     <Drawer.Navigator>
//       <Drawer.Screen name="HomeTab" component={HomeTabNavigator} />
//       <Drawer.Screen name="SettingsStack" component={SettingsStackNavigator} />
//     </Drawer.Navigator>
//   </NavigationContainer>
// );

// export default RootNavigator;
