import React, { createContext, useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

type CurrentUserContext = {
  currentUser: { name: string } | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<{ name: string } | null>>;
};

const CurrentUserContext = createContext<CurrentUserContext | undefined>(
  undefined,
);

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState<{ name: string } | null>(null);
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <View>
        <LoginButton />
      </View>
    </CurrentUserContext.Provider>
  );
}

function LoginButton() {
  const context = useContext(CurrentUserContext);

  if (!context) {
    throw new Error(
      'LoginButton must be used within a CurrentUserContext.Provider',
    );
  }
  
  const { currentUser, setCurrentUser } = context;

  if (currentUser !== null) {
    return <Text>You logged in as {currentUser.name}.</Text>;
  }

  return (
    <Button title="Log in" onPress={() => setCurrentUser({ name: 'User' })} />
  );
}
