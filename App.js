import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import AppStack from './AppStack';
import LoadingScreen from './src/presentation/component/Common/LoadingScreen';
import Home from './src/presentation/component/Home/Home';
import Login from './src/presentation/component/Login/Login';
import LoginProvider from './src/Utils/LoginProvider';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';


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