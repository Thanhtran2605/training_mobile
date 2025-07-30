import React, { createContext, useContext, useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { Button as RNButton } from 'react-native';
import { TextInput } from 'react-native';

const ThemeContext = createContext('light');

function MyApp() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <View>
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        ></Switch>
        <Button />
      </View>
    </ThemeContext.Provider>
  );
}

function Button() {
  const theme = useContext(ThemeContext);
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
        Current theme: {theme}
      </Text>
    </View>
  );
}
