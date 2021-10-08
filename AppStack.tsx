import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginContext} from './src/Utils/LoginProvider';
import LoadingScreen from './src/presentation/component/Common/LoadingScreen';
import Login from './src/presentation/component/Login/Login';
import Home from './src/presentation/component/Home/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const UserDrawerList = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default function AppStack() {
  const {user, isLoading} = useContext(LoginContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="loading"
            options={{headerShown: false}}
            component={LoadingScreen}
          />
        ) : user ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="UserDrawerList"
            component={UserDrawerList}
          />
        ) : (
          <Stack.Screen
            name="EduTec"
            options={{headerTitleAlign: 'center'}}
            component={Login}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
