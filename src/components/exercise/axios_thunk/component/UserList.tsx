import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import {
  fetchUsers,
  selectAllUsers,
  selectStatus,
} from '../slice/userSlice';
import { useAppDispatch, useAppSelector } from '../store/hook';

const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status]);

  if (status === 'loading') return <ActivityIndicator size="large" />;
  if (status === 'failed') return <Text>Error loading users.</Text>;
  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>
            *************************User : {item.id}*********************
          </Text>
          <Text style={{ color: 'blue', fontWeight: 600 }}>{item.name}</Text>
          <Text>Username : {item.username}</Text>
          <Text>Email : {item.email}</Text>
          <Text>
            Address : {item.address.street}, {item.address.city}
          </Text>
          <Text>
            Geo : {item.address.geo.lat}, {item.address.geo.lng}
          </Text>
          <Text>Phone : {item.phone}</Text>
          <Text>Website : {item.website}</Text>
        </View>
      )}
    />
  );
};

export default UserList;
