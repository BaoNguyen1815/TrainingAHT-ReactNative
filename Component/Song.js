import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

export default function Song(props) {
  return (
    <View style={styles.contentContainer}>
      <Image
        style={styles.image}
        source={require('../Asset/music.jpg')}></Image>
      <View>
        <Text onPress={props.setIsVisible} style={styles.title}>
          All into nothing
        </Text>
        <Text style={styles.artist}>Mokiato</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    padding: 8,
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
