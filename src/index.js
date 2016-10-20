import React from 'react';
import {Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import configureStore from './store'
// import { Intro } from '~/components';
import { AppContainer } from '~/containers';
// import { View, Text } from 'react-native';
const store = configureStore();

// const RouterWithRedux = connect()(Router)

export default function NavigationExampleFlux() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
