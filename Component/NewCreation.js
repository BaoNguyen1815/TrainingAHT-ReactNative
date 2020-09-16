import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Title from './Title';

export default function NewCreation() {
  return (
    <View>
      <Title text="New Creation"></Title>
      <View style={styles.container}>
        <View style={styles.col}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.image}
              source={require('../Asset/music.jpg')}></Image>
            <View>
              <Text style={styles.title}>All into nothing</Text>
              <Text style={styles.artist}>Mokiato</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Image
              style={styles.image}
              source={require('../Asset/music.jpg')}></Image>
            <View>
              <Text style={styles.title}>All into nothing</Text>
              <Text style={styles.artist}>Mokiato</Text>
            </View>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.image}
              source={require('../Asset/music.jpg')}></Image>
            <View>
              <Text style={styles.title}>All into nothing</Text>
              <Text style={styles.artist}>Mokiato</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Image
              style={styles.image}
              source={require('../Asset/music.jpg')}></Image>
            <View>
              <Text style={styles.title}>All into nothing</Text>
              <Text style={styles.artist}>Mokiato</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  contentContainer: {
    flexDirection: 'row',
    padding: 8,
  },
  col: {
    flex: 1,
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
