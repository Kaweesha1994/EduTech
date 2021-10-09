import React, {Component, useContext} from 'react';
import { View } from 'react-native';
import ChatComponent from './ChatComponent';
import styles from './Chat.component.style';

export default class Chat extends Component{ 


    render() {
        return (
            <View style = {styles.container}>
                <ChatComponent/>
            </View>
        );
    }

}