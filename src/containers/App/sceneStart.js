import React from 'react-native';
import {Scene} from 'react-native-router-flux';
import { Intro } from '~/components';

module.exports = <Scene key="start">
  <Scene key='intro' component={Intro} title='Intro Page' hideNavBar/>
</Scene>;
