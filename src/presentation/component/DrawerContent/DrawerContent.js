import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { Component, useContext } from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';
import styles from './Drawer.component.style';
import {LoginContext} from '../../../Utils/LoginProvider';
import FirebaseUtil from '../../../Utils/FirebaseUtil';



export function DrawerContent(props) {    

    const {user} = useContext(LoginContext);
    
    return (
            <DrawerContentScrollView {...props}>
                
                {/* <DrawerItem label="Profile"> */}
                <View style={styles.viewStyle}>
                    <Image source={require('../../../../image/1693.jpeg')} style={styles.imgStyle}/>
                </View>
                <View>
                    <Text>{user?.email}</Text>
                </View>
                {/* </DrawerItem> */}
                <DrawerItemList {...props}/>
                <View>
                    <Button onPress={signOut} title="Log Out" />
                
                </View>
            </DrawerContentScrollView>
        
    );
}

function signOut () {
    FirebaseUtil.signOut().catch((e) => {
        console.log(e);
        alert("Something went wrong");
    });
}