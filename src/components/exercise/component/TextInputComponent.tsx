import React, { Component, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState(' ');

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40, padding: 5 }}
        placeholder="Type here to translate!"
        defaultValue={text}
        onChangeText={newText => setText(newText)}
      />

      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split('')
          .map(word => word && '🍕')
          .join('')}
      </Text>
    </View>
  );

};

export default PizzaTranslator;