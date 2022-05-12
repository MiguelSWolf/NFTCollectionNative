import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExampleScreen from '../screens/ExampleScreen';
import CollectionListScreen from '../screens/CollectionListScreen';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
          name="Home"
          component={CollectionListScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="cogs" size={size} color={color} />
            ),
          }}
          name="Test"
          component={ExampleScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
