import React, {Component, useContext} from 'react';
import { View } from 'react-native';
import HomeComponent from './HomeComponent';
import styles from './Home.component.style';
import FirebaseUtil from '../../../Utils/FirebaseUtil';

export default class Home extends Component{ 

    signOut = () => {
        FirebaseUtil.signOut().catch((e) => {
            console.log(e);
            alert("Something went wrong");
        });
    }

    render() {
        return (
            <View style = {styles.container}>
                <HomeComponent  
                signOut = {this.signOut}
                />
            </View>
        );
    }

}