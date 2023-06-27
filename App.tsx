import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import Biometrics from 'react-native-biometrics';

class App extends Component {
  state = {
    isAuthenticated: false,
  };

  authenticate = async () => {
    try {
      const result = await new Biometrics();
      console.log('Authentication');
      result
        .simplePrompt({promptMessage: 'Confirm fingerprint'})
        .then(resultObject => {
          const {success} = resultObject;

          if (success) {
            this.setState({isAuthenticated: true});
          } else {
            this.setState({isAuthenticated: false});
          }
        })
        .catch(() => {
          console.log('biometrics failed');
        });
    } catch {}
  };
  render() {
    const {isAuthenticated} = this.state;
    return (
      <View>
        <Button
          title="Authenticate"
          onPress={() => this.authenticate()}
         
        />
        {isAuthenticated && <Text>You are authenticated!</Text>}
      </View>
    );
  }
}

export default App;
