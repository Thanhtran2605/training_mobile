import React from 'react';
import { Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogoTitle from '../components/LogoTitle';
import { Button } from '@react-navigation/elements';
import { RootParamList } from '../types';

const Stack = createNativeStackNavigator<RootParamList>();

const RootStack = () => {   
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerStyle: { backgroundColor: 'tomato' } }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16,
            color: 'black',
          },
          headerRight: () => (
            <Button onPressIn={() => Alert.alert('This a button info')}>
              Info
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: () => <LogoTitle />,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
