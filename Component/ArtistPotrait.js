import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ArtistPotrait() {
  return (
    <View style={styles.contentContainer}>
      <Image
        style={styles.image}
        source={require('../Asset/artist.jpg')}></Image>
      <View>
        <Text style={styles.title}>Adam Levine</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 8,
    marginLeft: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  artist: {
    color: 'grey',
  },
});
