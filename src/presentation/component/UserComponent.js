import React, { Component } from 'react';
import {Text, View} from 'react-native';
import getUser from "../presenter/UserPresenter";

export default class UserComponent extends Component {

    state = {
        fullname: 'Hello'
    }
  
    getSampleUserDataHandler = () => {
      const user = getUser();

      this.setState({fullname: user.fullname});
    };
  
    render() {
        return (
            <View>
              
              <Text onPress={this.getSampleUserDataHandler}>
                  {this.state.fullname}
                  </Text>
            </View>
          );
    }
    
  }