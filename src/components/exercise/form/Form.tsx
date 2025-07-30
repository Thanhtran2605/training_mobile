import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const UseForm = () => {
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

  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState<{
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    website?: string;
    address?: {
      street?: string;
      city?: string;
      geo?: { lat?: string; lng?: string };
    };
  }>();

  const validate = () => {
    const newErrors: typeof error = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!username.trim()) newErrors.username = 'Username is required';
    if (!phone.trim()) newErrors.phone = 'Phone is required';
    if (!website.trim()) newErrors.website = 'Website is required';
    if (!address.street.trim())
      newErrors.address = {
        ...newErrors.address,
        street: 'Street is required',
      };
    if (!address.city.trim())
      newErrors.address = { ...newErrors.address, city: 'City is required' };
    if (!address.geo.lat.trim())
      newErrors.address = {
        ...newErrors.address,
        geo: { ...address.geo, lat: 'Latitude is required' },
      };

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      Alert.alert(
        'Form Submit',
        `Name: ${name}\nUsername: ${username}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website}\nAddress: ${address.street}, ${address.city} geo (${address.geo.lat}, ${address.geo.lng})`
      );
      setModalVisible(false);
      setName('');
      setUsername('');
      setEmail('');
      setPhone('');
      setWebsite('');
      setAddress({
        street: '',
        city: '',
        geo: { lat: '', lng: '' },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to My Form</Text>
      <Button title="openModal" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            {/* Name */}
            <View style={styles.block}>
              <Text style={styles.label}>Name : </Text>
              <TextInput
                style={[styles.input, error?.name && styles.inputError]}
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
              />
              {error?.name && (
                <Text style={styles.errorText}>{error.name}</Text>
              )}
            </View>

            {/* Address street */}
            <View style={styles.block}>
              <Text style={styles.label}>Address street : </Text>
              <TextInput
                style={[
                  styles.input,
                  error?.address?.street && styles.inputError,
                ]}
                placeholder="Enter street"
                value={address.street}
                onChangeText={(text) =>
                  setAddress({ ...address, street: text })
                }
              />
              {error?.address?.street && (
                <Text style={styles.errorText}>{error.address.street}</Text>
              )}
            </View>

            {/* Address geo */}
            <View style={styles.block}>
              <Text style={styles.label}>Address Geo : </Text>
              <TextInput
                style={[
                  styles.input,
                  error?.address?.geo?.lat && styles.inputError,
                ]}
                placeholder="Enter latitude"
                value={address.geo.lat}
                onChangeText={(text) =>
                  setAddress({ ...address, geo: { ...address.geo, lat: text } })
                }
              />
              {error?.address?.geo?.lat && (
                <Text style={styles.errorText}>{error.address.geo.lat}</Text>
              )}
            </View>

            {/* Button submit */}
            <View style={styles.groupBtn}>
              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, styles.cancelBtn]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
    alignItems: 'center',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  block: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 10,
  },

  label: {
    width: 80,
    fontSize: 16,
    fontWeight: '500',
    marginRight: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    height: 40,
    flex: 1,
  },

  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 6,
    marginLeft: 6,
    flex: 1,
  },

  groupBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 9,
  },

  btn: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 5,
  },
  cancelBtn: {
    backgroundColor: '#6c757d',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UseForm;
