import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import AppStack from './src/presentation/component/AppStack/AppStack';
import LoginProvider from './src/Utils/LoginProvider';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const reference = database().ref('/users/123');

export default class App extends Component {

  // componentWillUnmount() {

  //   var firebaseConfig = {
  //     apiKey: "AIzaSyAO0tMj9xXBLN80WfKWAbismVNzKqJBZEw",
  //     authDomain: "edutec-d74f6.firebaseapp.com",
  //     databaseURL: "https://edutec-d74f6-default-rtdb.firebaseio.com",
  //     projectId: "edutec-d74f6",
  //     storageBucket: "edutec-d74f6.appspot.com",
  //     messagingSenderId: "820594719420",
  //     appId: "1:820594719420:web:ec236b7f5caf6406f2aeb9",
  //     measurementId: "G-16S03B3R3E"
  //   };

  //   firebase.initializeApp(firebaseConfig);

  // }



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