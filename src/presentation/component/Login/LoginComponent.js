import React, {Component} from 'react';
import { Button, Text, TextInput, View } from "react-native";
import styles from './Login.component.style';

const LoginComponent = (props) => {
    return (
        <View>
      
        <TextInput
        placeholder = "Email"
        onChangeText={props.setEmail}
        autoCapitalize = "none"
        value={props.email}
        style= {styles.textInput}
        />
        <TextInput 
        placeholder="Password"
        onChangeText={props.setPassword}
        value={props.password}
        secureTextEntry={true}
        style= {styles.textInput}
        />
        {props.create ? (
        <>
        <TextInput style= {styles.textInput}
        placeholder="Confirm Password"
        onChangeText={props.setConfirmPassword}
        value={props.confirmPassword}
        secureTextEntry={true}
        />
        <TextInput
        placeholder = "Full Name (optional)"
        onChangeText={props.setFullname}
        autoCapitalize = "none"
        value={props.fullname}
        style= {styles.textInput}
        />
        <TextInput
        placeholder = "Address (optional)"
        onChangeText={props.setAddress}
        autoCapitalize = "none"
        value={props.address}
        style= {styles.textInput}
        />
        </>): (<></>)}
        {props.create ? (
          <>
            <Button
            title ="Sign Up"
            onPress={() => props.signUp()}
            />
            <Text style={styles.text} onPress={() => props.setCreate(false)}>Sign in</Text>
          </>
        ) : (
          <>
            <Button
            title ="Sign in"
            onPress={() => props.signIn()}
            />
            <Text style={styles.text} onPress={() => props.setCreate(true)}>Create an Account</Text>
          </>
        )}
      </View>
    );
}

export default LoginComponent