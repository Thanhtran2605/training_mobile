import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RootTabParamList } from '../type/RootTabParam';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<RootTabParamList, 'MessagesScreen'>;

const MessageScreen = ({ navigation }: Props) => {
  // const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('ProfileScreen', { user: 'Thanh', age: '19' });
  };

  return (
    <View>
      <Text>Go to message</Text>
      <Button
        title="Message Screen"
        onPress={() => {
          handleNavigation();
        }}
      />
    </View>
  );
};

export default MessageScreen;
