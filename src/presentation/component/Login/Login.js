import React, {Component, useContext} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import LoginComponent from './LoginComponent';
import styles from './Login.component.style';
import FirebaseUtil from '../../../Utils/FirebaseUtil';
import { LoginContext } from '../../../Utils/LoginProvider';
import { UserRepositoryImpl } from '../../../data/repositoryImpl/UserRepositoryImpl';
import { UserServiceImpl } from '../../../domain/service/impl/UserServiceImpl';
import { UserDto } from '../../../data/dto/UserDto';

export const userRepository = new UserRepositoryImpl();
export const userService = new UserServiceImpl(userRepository);

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    create: false,
    
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

    if(this.state.email != null && this.state.email != '' && this.state.password != null && this.state.password != ''){
      

      let userDto = new UserDto();

      userDto.Email = this.state.email;
      userDto.Password = this.state.password;

      userService.loginUser(userDto);

    } else {
      alert("Email / Password cannot be empty!");
    }
    
  }

  signUp = () => {

    if(this.state.email != null && this.state.email != ''
    && this.state.password != null && this.state.email != ''
    && this.state.confirmPassword != null && this.state.confirmPassword != '') {

      if(this.state.password == this.state.confirmPassword) {

        let userDto = new UserDto();

        userDto.Email = this.state.email;
        userDto.Password = this.state.password;

        userService.signUpUser(userDto);
  
      } else {
        alert("Password and confirm password is not match");
      }


    } else {
      alert("Fields cannot be empty!");
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

