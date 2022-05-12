import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';

export default ({route}) => {
  const {image, title, description} = route.params;

  return (
    <View style={styles.container}>
      <View style={{...styles.imageContainer, ...styles.flexSize}}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={{...styles.text, ...styles.flexSize}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    height: '40%',
  },
  flexSize: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  text: {
    paddingTop: 20,
    paddingHorizontal: 10,
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
