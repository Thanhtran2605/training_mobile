import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Image, Alert } from 'react-native';
import { Button } from '@react-navigation/elements';
import { RootParamList } from '../types';

type NavigationProp = NativeStackNavigationProp<RootParamList>;

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.push('Profile', { name: 'MyName' })}>
        Go to details again
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.navigate('Home')}>Go home</Button>
      <Button onPress={() => navigation.popToTop()}>
        Go back first screen
      </Button>
    </View>
  );
};

export default ProfileScreen;