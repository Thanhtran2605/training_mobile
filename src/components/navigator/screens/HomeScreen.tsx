import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Image, Alert } from 'react-native';
import { Button } from '@react-navigation/elements';
import { RootParamList } from '../types';

type NavigationProp = NativeStackNavigationProp<RootParamList>;

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

export default HomeScreen;
