import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import singleNFT from '../screens/singleNFT';
import CollectionListScreen from '../screens/CollectionListScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9AC4F8',
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="listNFT" component={CollectionListScreen} />
      <Stack.Screen
        name="singleNFT"
        component={singleNFT}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};
