import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import AppStack from './src/presentation/component/AppStack/AppStack';
import LoginProvider from './src/Utils/LoginProvider';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginProvider>
          <AppStack/>
        </LoginProvider>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 5
  }
});