import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import NFTCollectionItem from '../components/NFTCollectionItem';
import NFTs from '../assets/NFTs.json';

let items = [];
NFTs.ownedNfts.forEach(nft => {
  items.push(
    <NFTCollectionItem
      title={nft.title}
      image={nft.media[0].gateway}
      description={nft.description}
    />,
  );
});
class CollectionListScreen extends React.Component {
  render() {
    return <ScrollView style={styles.container}>{items}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
});
export default CollectionListScreen;
