import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Video from 'react-native-video';
import Title from '../Component/Title';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Artist from '../Component/Artist';
const arr = [1, 2, 3, 4];
export default function Discovery() {
  return (
    <ScrollView>
      <Text style={{fontWeight: 'bold', fontSize: 32}}>DISCOVER</Text>
      <View>
        <FlatList
          horizontal={true}
          data={arr}
          keyExtractor={(item) => item.toString()}
          renderItem={(item) => {
            return (
              <Video
                // controls
                source={require('../homevideo.mp4')} // Can be a URL or a local file.
                style={styles.backgroundVideo}
              />
            );
          }}></FlatList>
      </View>
      <Title text="Recomend Artist"></Title>
      <FlatList
        horizontal={true}
        data={arr}
        keyExtractor={(item) => item.toString()}
        renderItem={(item) => <Artist></Artist>}></FlatList>
      <Title text="Ranking"></Title>
      <FlatList
        horizontal={true}
        data={arr}
        keyExtractor={(item) => item.toString()}
        renderItem={(item) => (
          <Image
            style={styles.img}
            source={require('../Asset/music2.jpg')}></Image>
        )}></FlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    width: 280,
    height: 280,
    marginLeft: 10,
    marginRight: 20,
  },
  img: {
    width: 160,
    height: 160,
    margin: 10,
  },
});
