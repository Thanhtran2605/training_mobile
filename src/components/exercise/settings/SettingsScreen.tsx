import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { HomeTabParamList, RootDrawerParamList } from '../type/NavigationType';

type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Feed'>,
  DrawerScreenProps<RootDrawerParamList>
>;

const SettingsScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button
        title="OpenDraw"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default SettingsScreen;
