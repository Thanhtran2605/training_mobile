import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Image, Alert } from 'react-native';

import { Button } from '@react-navigation/elements';
const Stack = createNativeStackNavigator();

type RootParamList = {
  Home: undefined;
  Profile: { name: string };
};

type NavigationProp = NativeStackNavigationProp<RootParamList>;

// const LogoTitle = () => {
//   return <Image source={require('')} style={{ width: 50, height: 50 }} />;
// };

const LogoTitle = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('./assets/logo.png')}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>
        Profile
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'MyName' })}
      >
        Go to Profile
      </Button>
    </View>
  );
};

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.push('Profile', { name: 'MyName' })}>
        Go to details again
      </Button>
      <Button onPressIn={() => navigation.goBack()}>Go back</Button>
      <Button onPressIn={() => navigation.navigate('Home')}>Go home</Button>
      <Button onPressIn={() => navigation.popToTop()}>
        Go back first screen
      </Button>
    </View>
  );
};

// custome header, ui, truyền options cho từng thành phần screen. set riêng cho từng screen. bằng stack.screen dùng options={}
// custome cho tất cà màn hình trình duyệt stack.navigator dùng screenOptions={{  }}

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
            fontFamily: '',
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
        // options={({ route }) => ({
        //   title: route.name,
        // })}
        options={{
          headerTitle: () => <LogoTitle />,
        }}
      />
    </Stack.Navigator>
  );
};

// truyền props vào màn hình, khuyến nghị dùng context

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
