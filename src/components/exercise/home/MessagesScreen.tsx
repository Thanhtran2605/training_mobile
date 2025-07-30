import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { HomeTabParamList } from '../type/NavigationType';

type Props = BottomTabScreenProps<HomeTabParamList, 'Messages'>;

const MessagesScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Hello this is Message Screen</Text>
      <Button
        title="resetToFeed"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Feed' }],
          });
        }}
      />
    </View>
  );
};

export default MessagesScreen;


