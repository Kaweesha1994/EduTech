import React, {Component, useContext} from 'react';
import { Button, Text, View } from 'react-native';
import { LoginContext } from '../../../Utils/LoginProvider';
import styles from './Home.component.style';

const HomeComponent = (props) => {

    const {user} = useContext(LoginContext);

    return (
        <View>
            <Text>Home: {user?. email}</Text>
            <Button onPress= {() => props.signOut()} title='Log Out'/>
        </View>
    );

}

export default HomeComponent;