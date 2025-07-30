import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

interface DataItem {
  id: string;
  name: string;
}

interface ListViewProps {
  list: DataItem[];
}

const ListView = ({ list }: ListViewProps) => {
  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});

export default ListView;
