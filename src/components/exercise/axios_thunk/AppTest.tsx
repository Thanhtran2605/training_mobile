import UserComponent from './component/UserList';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import UserScreen from './screen/UserScreen';

const AppTest = () => (
  <Provider store={store}>
    <UserScreen />
  </Provider>
);

export default AppTest;
