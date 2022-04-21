import React from 'react';
import {
  Text,
  ActivityIndicator,
  TextInput,
  Button,
  Switch,
  Alert,
} from 'react-native';

class ExampleUI extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Text>Loading</Text>
        <ActivityIndicator />

        <Text>Input</Text>
        <TextInput placeholder="fill your text..." />

        <Text>Switch</Text>
        <Switch />

        <Text>Button</Text>
        <Button title="button" onPress={() => Alert.alert('teste')} />
      </React.Fragment>
    );
  }
}

export default ExampleUI;
