import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { addUser, deleteByUserId, editUser } from '../slice/userSlice';
import { useAppDispatch } from '../store/hook';

const UserForm = () => {
  const dispatch = useAppDispatch();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    geo: { lat: '', lng: '' },
  });

  const handleAdd = () => {
    if (!name || !username || !email) {
      Alert.alert('Error, name or username or email is empty');
      return;
    }
    dispatch(addUser({ name, username, email, phone, website, address }));
  };

  const handleEdit = () => {
    if (!id) return;
    dispatch(
      editUser({
        id: parseInt(id),
        user: { name, username, email, phone, website, address },
      }),
    );
  };

  const handleDelete = () => {
    if (!id) return;
    dispatch(deleteByUserId(parseInt(id)));
  };

  return (
    <View style={{ padding: 10 }}>
      <Text>ID</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={id => setId(id)}
        keyboardType="numeric"
      />

      <Text>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={name => setName(name)}
      />

      <Text>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={username => setUsername(username)}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />

      <Text>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={phone => setPhone(phone)}
      />

      <Text>Website</Text>
      <TextInput
        style={styles.input}
        placeholder="Website"
        value={website}
        onChangeText={website => setWebsite(website)}
      />

      <Text>Street</Text>
      <TextInput
        style={styles.input}
        placeholder="Address Street"
        value={address.street}
        onChangeText={street => setAddress({ ...address, street })}
      />

      <Text>City</Text>
      <TextInput
        style={styles.input}
        placeholder="Address City"
        value={address.city}
        onChangeText={city => setAddress({ ...address, city })}
      />

      <Text>Geo Lat</Text>
      <TextInput
        style={styles.input}
        placeholder="Geo Latitude"
        value={address.geo.lat}
        onChangeText={lat =>
          setAddress({ ...address, geo: { ...address.geo, lat } })
        }
      />

      <Text>Geo Lng</Text>
      <TextInput
        style={styles.input}
        placeholder="Geo Lagitude"
        value={address.geo.lng}
        onChangeText={lng => {
          setAddress({
            ...address,
            geo: { ...address.geo, lng },
          });
        }}
      />

      <Button title=" Add" onPress={handleAdd} />
      <Button title=" Edit" onPress={handleEdit} />
      <Button title=" Delete" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UserForm;

