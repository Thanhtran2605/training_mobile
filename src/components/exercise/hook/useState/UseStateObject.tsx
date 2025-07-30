import { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text } from 'react-native';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function changeName(name: string) {
    setFormData(() => ({
      ...formData,
      name: name,
    }));
  }

  function changeEmail(email: string) {
    setFormData(() => ({
      ...formData,
      email: email,
    }));
  }

  function changePassword(password: string) {
    setFormData(() => ({
      ...formData,
      password: password,
    }));
  }

  return (
    <View>
      <Text>Form</Text>
      <Text>InputName : </Text><TextInput value={formData.name} onChangeText={changeName} />
      <TextInput value={formData.email} onChangeText={changeEmail} />
      <TextInput value={formData.password} onChangeText={changePassword} secureTextEntry />
   
   
      <Text>Name : {formData.name}</Text>
      <Text>Email : {formData.email}</Text>
      <Text>Password : {formData.password}</Text>
    </View>
  );
}
