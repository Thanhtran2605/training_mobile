import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

interface buttonProps {
  title: string;
  onPress: () => void;
};

const MyButton = ({ title, onPress }: buttonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>

      <Image source={require('../assets/img/IMG-Academy.jpg')} />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },

});

export default MyButton;
