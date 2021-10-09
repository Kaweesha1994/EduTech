import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Home/Home';
import { DrawerContent } from './DrawerContent';
import Profile from '../profile/Profile';
import Chat from '../chat/Chat';

const Drawer = createDrawerNavigator();


export default UserDrawerList = () => {
  
    return (
      <Drawer.Navigator 
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />   
        <Drawer.Screen name="Chat" component={Chat} />          
    
      </Drawer.Navigator>
      // <Drawer.Navigator 
      // drawerContent={props => {<DrawerContent {...props}/>}}
      // initialRouteName="Home">{
      //   <Drawer.Screen name="Home" component={Home} />
      //   }
      //   </Drawer.Navigator>
    );
  };
