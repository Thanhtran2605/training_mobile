import React from 'react';
import { View, ScrollView } from 'react-native';
import UserForm from '../component/UserForm';
import UserList from '../component/UserList';

const UserScreen = () => {
  return (
    <ScrollView>
      <UserForm />
      <UserList />
    </ScrollView>
  );
};

export default UserScreen;