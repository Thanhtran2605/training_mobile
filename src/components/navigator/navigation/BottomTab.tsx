import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const myTabs = () => {
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = '';

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },

      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: true,

      tabBarStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        elevation: 0,
      },

      tabBarLabelPosition: 'below-icon',
      tabBarLabelStyle: {
        fontSize: 16,
        fontFamily: 'Georgia',
        fontWeight: 300,
      },
      animation: 'fade',
    })}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',

        tabBarBadge: 3,
        tabBarBadgeStyle: {
          color: 'black',
          backgroundColor: 'yellow',
        },
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Home',

        tabBarBadge: 5,
        tabBarBadgeStyle: {
          color: 'white',
          backgroundColor: 'red',
        },
      }}
    />
  </Tab.Navigator>
};
