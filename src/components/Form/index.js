import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Message } from '../Message/index';

export default function Form() {

  // const [message, setMessage] = useState(null);
  // const [typeMessage, setTypeMessage] = useState(null);
  // const [buttonLabel, setButtonLabel] = useState('CLIQUE AQUI!');

  return (
    <View>
      <View>
        <Text>Custom Field A:</Text>
        <TextInput placeholder="Ex. 1.84" keyboardType="numeric"></TextInput>
        <Text>Custom Field B:</Text>
        <TextInput placeholder="Ex. 1.84" keyboardType="numeric"></TextInput>
        <Button title="TAP!"/>
      </View>
      <View></View> 
      <View></View>
    </View>
  );
}
