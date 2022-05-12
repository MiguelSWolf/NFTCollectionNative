import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';

export default () => {
  const [search, onChangeSearch] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="text"
        onChangeText={text => onChangeSearch(text)}
        value={search}
        style={styles.input}
      />
      <Text style={styles.text}>Search result for "{search}"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    color: '#333',
  },
  text: {
    color: '#333',
  },
});
