import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, View, Text, TouchableHighlight} from 'react-native';

export default ({image, title, description}) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() =>
        navigation.navigate('singleNFT', {image, title, description})
      }>
      <View style={styles.container}>
        <View style={styles.flexSize}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={{...styles.text, ...styles.flexSize}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={{...styles.action, ...styles.flexSize}}>
          <View style={[styles.triangle, styles.triangleLeft]} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#333',
  },
  flexSize: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 5,
  },
  text: {
    paddingLeft: 20,
  },
  title: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  action: {
    justifyContent: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 18,
    borderRightWidth: 18,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#333',
    transform: [{rotate: '90deg'}],
  },
});
