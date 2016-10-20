import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Actions} from "react-native-router-flux";

export default function Detail(props) {

  const { pages, select } = props;
  const pageObj = pages.filter(page => page.title === select)[0];

  return (
    <View style={styles.container}>
      <Text>{pageObj.title}</Text>

      <TouchableOpacity onPress={() => Actions.pop()}>
        <Text>BAckkkkkk</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Actions.search()}>
        <Text>Search page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
