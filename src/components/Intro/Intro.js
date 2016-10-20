import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function Intro(props) {
  return (
    <View>
      <Text>Introoooo</Text>
      <Text>Scene name: {props.name}</Text>
      <TouchableOpacity onPress={() => Actions.intro2()}>
        <Text>Intro 2</Text>
      </TouchableOpacity>
    </View>
  )
}
