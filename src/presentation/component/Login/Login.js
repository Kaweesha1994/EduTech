import React, {Component} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import LoginComponent from './LoginComponent';
import styles from './Login.component.style';
import FirebaseUtil from '../../../Utils/FirebaseUtil';

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    create: false
  }

  setEmail = (text) => {
    this.setState(
      {
        email: text
      }
    );
  }

  setPassword = (text) => {

    this.setState({
      password: text
    });

  }

  setConfirmPassword = (text) => {

    this.setState({
      confirmPassword: text
    });

  }

  setCreate = (bool) => {
    this.setState({
      create: bool,
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  signIn = () => {

    FirebaseUtil.signIn(this.state.email, this.state.password).catch((e) => {
        console.log(e);
        alert("Incorrect Email / Password");
      });
    
  }

  signUp = () => {

    console.log(this.state.password + ' ' + this.state.confirmPassword);

    if(this.state.password == this.state.confirmPassword) {

      FirebaseUtil.signUp(this.state.email, this.state.password).catch((e) => {
        console.log(e);
        alert("Something went wrong");
      });

    } else {
      alert("Password and confirm password is not match");
    }

  }
  
  render() {

    return (
      <View style={styles.container}>
        <LoginComponent
          email = {this.state.email}
          password = {this.state.password}
          confirmPassword = {this.state.confirmPassword}
          create = {this.state.create}
          setEmail = {this.setEmail}
          setPassword = {this.setPassword}
          setConfirmPassword = {this.setConfirmPassword}
          setCreate = {this.setCreate}
          signIn = {this.signIn}
          signUp = {this.signUp}
        />
      </View>
    );

  }
}

