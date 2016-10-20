import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function Intro2() {
  return (
    <View>
      <Text>Introoooo222</Text>
      <Text></Text>
      <TouchableOpacity onPress={() => Actions.intro()}>
        <Text>BAck</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Actions.tabbar()}>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}
