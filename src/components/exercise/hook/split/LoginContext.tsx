import React from 'react';
import { Button, Text } from 'react-native';
import { useCurrentUser } from './CurrentContext';

const LoginButton = () => {
  const { currentUser, setCurrentUser } = useCurrentUser();

  if (currentUser) {
    return <Text>You are logged in as {currentUser.name}</Text>;
  }

  return (
    <Button
      title="Login"
      onPress={() => setCurrentUser({ name: 'ThanhTran' })}
    />
  );
};

export default LoginButton;
