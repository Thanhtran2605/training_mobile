import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface myHeader {
  title: string;
}

const Header = (props: myHeader) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#28a745',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
