/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import {
  Alert,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { SafeAreaView, ScrollView } from 'react-native';
import Header from './src/components/exercise/component/HeaderComponent';
import MyButton from './src/components/exercise/component/ButtonComponent';
import ListView from './src/components/exercise/component/FlatList';
import SectionView from './src/components/exercise/component/SectionList';

// import { NavigationContainer } from '@react-navigation/native';
// import RootStack from './src/components/navigator/navigation/RootStack';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [item, setItem] = useState([
    { id: '1', name: 'Coffee' },
    { id: '2', name: 'Soda' },
  ]);

  const [itemSection, setItemSection] = useState([
    { title: 'Shirt', data: [{ id: '1', name: 'Shirt' }] },
    { title: 'Legging', data: [{ id: '2', name: 'Legging' }] },
  ]);

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NewAppScreen templateFileName="App.tsx" />

        <Header title="MyHeader" />

        <MyButton
          title="MyButton"
          onPress={() => {
            Alert.alert('Hii');
          }}
        />

        <ListView list={item} />

        <SectionView list={itemSection} />
      </ScrollView>
    </SafeAreaView>
  );

  // return (
  //   <NavigationContainer>
  //     <RootStack />
  //   </NavigationContainer>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
