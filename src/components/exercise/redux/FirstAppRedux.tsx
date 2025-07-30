import React from 'react';
import { Provider } from 'react-redux';
// import
import store from './store/store';
import MainScreen from './component/MainScreen';

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
