import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import NFTCollectionItem from '../components/NFTCollectionItem';
import NFTs from '../assets/NFTs.json';
// const NFT_COLLECTION = [
//   {
//     image: 'https://picsum.photos/250',
//     title: 'NFT1',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu urna, aliquam eu pretium vel, pharetra et magna. Praesent nisi nunc, dapibus sit amet gravida sed, tristique id elit. Vestibulum posuere, sapien non vehicula condimentum, quam felis dignissim urna, eu euismod est enim quis libero. Donec tellus ligula, porta vel efficitur gravida, fringilla mollis justo. In vitae congue urna, in convallis metus. Proin aliquet eget massa ut tincidunt. Suspendisse ut nibh sed sem pulvinar maximus sit amet sed nisl.',
//   },
//   {
//     image: 'https://picsum.photos/250',
//     title: 'NFT1',
//     description: 'bla bla bla',
//   },
//   {
//     image: 'https://picsum.photos/250',
//     title: 'NFT1',
//     description: 'bla bla bla',
//   },
// ];
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
