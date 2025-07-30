import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { HomeTabParamList, RootDrawerParamList } from '../type/NavigationType';

type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Feed'>,
  DrawerScreenProps<RootDrawerParamList>
>;

const FeedScreen = ({ navigation, route }: Props) => {
  const [age, setAge] = useState(18);

  const handleGoToProfile = () => {
    navigation.navigate('SettingsStack', {
      screen: 'Profile',
      params: {
        user: 'Thanh',
        age,
        onUpdateAge: (newAge: number) => {
          setAge(newAge);
        },
      },
    });
  };

  return (
    <View>
      <Text>Feed Screen</Text>
      <Text>Current age: {age}</Text>
      <Button title="Go to Profile" onPress={handleGoToProfile} />
    </View>
  );
};

export default FeedScreen;
