import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const Dimensions = useWindowDimensions();

const isLargeWidth = Dimensions.width > 768

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: 'green',
        drawerActiveBackgroundColor: '#003CB3',
        drawerLabelStyle: {
          color: 'white',
          fontSize: 20,
          fontFamily: 'Georgia',
        },
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        drawerPosition: 'left',
        drawerType: isLargeWidth ? 'permanent' : 'front',
        overlayColor: '#ccc', // from 0 to 1 when drawer open full.
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
