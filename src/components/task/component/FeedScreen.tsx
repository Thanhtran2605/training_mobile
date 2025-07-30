import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootTabParamList } from '../type/RootTabParam';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<RootTabParamList, 'FeedScreen'>;

const FeedScreen = ({ navigation } : Props) => {
  return (
    <View>
      <Text>Go to message</Text>
      <Button
        title="Feed Screen"
        onPress={() => {
          navigation.navigate('MessagesScreen');
        }}
      />
    </View>
  );
};

export default FeedScreen;