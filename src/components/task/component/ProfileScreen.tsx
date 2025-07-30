import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RootTabParamList } from '../type/RootTabParam';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<RootTabParamList, 'ProfileScreen'>;

const ProfileScreen = ({route} : Props) => {
//   const route = useRoute();
  const { user, age } = route.params;

  return (
    <View>
      <Text>It is profile</Text>
      <Text>My name {user} and age : {age}</Text>
    </View>
  );
};

export default ProfileScreen;