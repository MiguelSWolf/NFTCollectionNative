import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import NFTCollectionItem from '../components/NFTCollectionItem';
import SearchCollection from '../components/SearchCollection';
import NFTs from '../assets/NFTs.json';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchCollection />
      </View>
      <ScrollView style={styles.scroll}>
        {NFTs.ownedNfts.map((nft, index) => {
          return (
            <NFTCollectionItem
              key={`${index}-${nft.id}`}
              title={nft.title}
              image={nft.media[0].gateway ?? ''}
              description={nft.description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    width: '100%',
    height: '100%',
    paddingTop: 8,
    paddingHorizontal: 8,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  search: {
    height: 80,
  },
  scroll: {
    flexDirection: 'column',
    paddingTop: 10,
    width: '100%',
    height: '100%',
  },
});
