import React from 'react';
import { View, Text, Image } from 'react-native';

const LogoTitle = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>
        Profile
      </Text>
    </View>
  );
};

export default LogoTitle;
