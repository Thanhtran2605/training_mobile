import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import {
    SettingsStackParamList
} from '../type/NavigationType';
type Props = NativeStackScreenProps<SettingsStackParamList, 'Profile'>;

const ProfileScreen = ({ navigation, route }: Props) => {
  const { user, age, onUpdateAge } = route.params;

  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Current user: {user}</Text>
      <Text>Current age : {age}</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          onUpdateAge(30);
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default ProfileScreen;
