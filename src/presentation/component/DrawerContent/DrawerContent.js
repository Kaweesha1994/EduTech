import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { Component, useContext, useEffect, useState } from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';
import styles from './Drawer.component.style';
import {LoginContext} from '../../../Utils/LoginProvider';
import FirebaseUtil from '../../../Utils/FirebaseUtil';
import { UserRepositoryImpl } from '../../../data/repositoryImpl/UserRepositoryImpl';
import { UserServiceImpl } from '../../../domain/service/impl/UserServiceImpl';
import { UserDto } from '../../../data/dto/UserDto';


export const userRepository = new UserRepositoryImpl();
export const userService = new UserServiceImpl(userRepository);

export function DrawerContent(props) {   
    
    const [url, setUrl] = useState('');

    const {user} = useContext(LoginContext);

    const getImage = () => {
        let userDto = new UserDto();
        userDto.Email = user?.email;

        userService.loadProfilePic(userDto).then(response => {

        setUrl(response.ProfilePicUri);

        console.log('drawer...');
            console.log(url);

        });

        
      }

      useEffect(() => {

            getImage();        



    },[]);
    
    return (
            <DrawerContentScrollView {...props}>
                
                {/* <DrawerItem label="Profile"> */}
                <View style={styles.viewStyle}>
                    {/* <Image style={styles.imgStyle} */}
                    
                    {
                        url != '' ? (
                            <>
                            <Image
                      source={{uri: url }}
                style={styles.imgStyle}/>
                            </>
                        ): (
                          <>
                          <Image
                      source={require('../../../../image/user-profile-icon.png')}
                      
                style={styles.imgStyle}/>
                          </>
                        )
                    }
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