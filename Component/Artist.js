import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Artist() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../Asset/artist.jpg')}></Image>
      <Text style={{fontWeight: 'bold'}}>Adam Levine</Text>
      <Text style={{color: 'grey'}}>184 songs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 10,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 12,
  },
});
