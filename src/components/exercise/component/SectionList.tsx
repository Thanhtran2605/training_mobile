import React from 'react';
import { SectionList, Text, StyleSheet, View } from 'react-native';

interface DataEle {
  id: string;
  name: string;
}

interface SectionData {
  title: string;
  data: DataEle[];
}

interface ListViewProps {
  list: SectionData[];
}

const SectionView = ({ list }: ListViewProps) => {
  const renderItem = ({ item }: { item: DataEle }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }: { section: SectionData }) => (
    <Text style={styles.text}>{section.title}</Text>
  );

  return (
    <SectionList
      sections={list}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
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

export default SectionView;
