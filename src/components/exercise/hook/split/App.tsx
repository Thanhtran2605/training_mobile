import React from 'react';
import { View } from 'react-native';
import { CurrentUserProvider } from './CurrentContext';
import LoginButton from './LoginContext';

export default function App() {
  return (
    <CurrentUserProvider>
      <View style={{ padding: 20 }}>
        <LoginButton />
      </View>
    </CurrentUserProvider>
  );
}
