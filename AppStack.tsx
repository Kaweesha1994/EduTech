import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginContext} from './src/Utils/LoginProvider';
import LoadingScreen from './src/presentation/component/Common/LoadingScreen';
import Login from './src/presentation/component/Login/Login';
import Home from './src/presentation/component/Home/Home';

const Stack = createStackNavigator();

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
          <Stack.Screen name="home" component={Home} />
        ) : (
          <Stack.Screen name="App" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
