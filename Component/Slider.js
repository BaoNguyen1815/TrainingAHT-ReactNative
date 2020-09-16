import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableHighlight, FlatList} from 'react-native-gesture-handler';
import Title from './Title';

const data = [1, 2, 3, 4, 5];

export default function Slider(props) {
  return (
    <View>
      <Title text="Popular album"></Title>
      <FlatList
        style={{
          overflow: 'visible',
        }}
        horizontal={true}
        scrollEnabled={true}
        data={data}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Image
              style={styles.image}
              source={require('../Asset/music.jpg')}></Image>
            <Text style={styles.title}>Shadow love</Text>
            <Text style={styles.artist}>One direction</Text>
          </View>
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    // width: 200,
    // height: 200,
    padding: 20,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 5,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    color: 'grey',
  },
});
