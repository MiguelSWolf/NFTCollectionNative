import React from 'react';
import {SafeAreaView} from 'react-native';
// import ExampleUI from './components/ExampleUI';
import CollectionListScreen from './Screens/CollectionListScreen';

class MainComponent extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <CollectionListScreen />
      </SafeAreaView>
    );
  }
}

export default MainComponent;
