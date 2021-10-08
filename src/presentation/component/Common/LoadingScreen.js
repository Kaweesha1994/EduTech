import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

export default function LoadingScreen() {
    return(
        <View style={styles.container}>
            <ActivityIndicator color='#000' size='large'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignContent: 'center',
        
    }
});