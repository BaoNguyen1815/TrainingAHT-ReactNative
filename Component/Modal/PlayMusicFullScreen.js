import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SliderComponent,
} from 'react-native';
import Slider from '@react-native-community/slider';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

var screenWidth = Math.round(Dimensions.get('window').width);
var screenHeight = Math.round(Dimensions.get('window').height);

const getAudioTimeString = (seconds) => {
  const m = parseInt((seconds % (60 * 60)) / 60);
  const s = parseInt(seconds % 60);

  return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
};

export default function PlayMusicFullScreen(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          marginTop: 28,
          marginBottom: 28,
          width: 400,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <FontAwesome
          onPress={props.setIsMinimize}
          name="chevron-left"
          size={18}
          color="black"></FontAwesome>
        <View>
          <Text>Shadow love</Text>
          <Text>One direction</Text>
        </View>
        <MaterialIcon
          name="dots-horizontal"
          size={22}
          color="black"></MaterialIcon>
      </View>
      <Image
        style={styles.image}
        source={require('../../Asset/music.jpg')}></Image>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 360,
        }}>
        <FontAwesome
          style={{marginRight: 10}}
          name="heart-o"
          size={32}
          color="black"></FontAwesome>
        <MaterialIcon
          style={{marginRight: 10}}
          name="playlist-plus"
          size={32}
          color="black"></MaterialIcon>
        <MaterialIcon
          style={{marginRight: 10}}
          name="download"
          size={32}
          color="black"></MaterialIcon>
        <MaterialIcon
          style={{marginRight: 10}}
          name="share-variant"
          size={32}
          color="black"></MaterialIcon>
      </View>
      <View>
        <Text>{getAudioTimeString(props.playSecond)}</Text>
        <Slider
          style={{width: 300, height: 40}}
          minimumValue={0}
          maximumValue={props.duration}
          value={props.playSecond}
          onValueChange={() => console.log('asd')}
          thumbTintColor="#F57D73"
          minimumTrackTintColor="#F57D73"
          maximumTrackTintColor="grey"></Slider>
        <Text>{getAudioTimeString(props.duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
