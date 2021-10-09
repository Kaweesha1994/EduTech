import React, {Component, useContext} from 'react';
import { View } from 'react-native';
import ProfileComponent from './ProfileComponent';
import styles from './Profile.component.style';

export default class Profile extends Component{ 


    render() {
        return (
            <View style = {styles.container}>
                <ProfileComponent/>
            </View>
        );
    }

}