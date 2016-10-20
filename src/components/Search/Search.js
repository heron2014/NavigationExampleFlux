import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Actions} from "react-native-router-flux";

export default function Search() {
  return (
    <View>
      <Text>Search</Text>
      <Text>Scene name: </Text>
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Text>BAckkkkkk</Text>
      </TouchableOpacity>
    </View>
  )
}
