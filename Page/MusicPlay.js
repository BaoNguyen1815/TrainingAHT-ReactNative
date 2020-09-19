import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Modal, Image} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlayMusicFullScreen from '../Component/Modal/PlayMusicFullScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
var song = new Sound('song.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return error;
  }
});

export default function MusicPlay(props) {
  const [isMinimize, setIsMinimize] = useState(false);
  const [isPlay, setIsPlay] = useState(true);
  const [playSecond, setPlaysecond] = useState(0);
  const [duration, setDuration] = useState(0);
  const handlePress = () => {
    !isPlay ? song.play() : song.pause();
    setIsPlay(!isPlay);
  };

  var timeOut = setInterval(() => {
    if (song.isLoaded() && isPlay) {
      song.getCurrentTime((seconds) => {
        setPlaysecond(seconds);
      });
    }
  }, 1000);
  Sound.setCategory('Playback', true); // true = mixWithOthers
  useEffect(() => {
    song.play();
    setDuration(song.getDuration());
  });

  timeOut;
  return (
    <View style={styles.modalView}>
      {isMinimize && (
        <View style={styles.modalViewMinimize}>
          <View
            style={{flexDirection: 'row'}}
            onStartShouldSetResponder={() => setIsMinimize(false)}>
            <Image
              style={styles.modalImage}
              source={require('../Asset/music.jpg')}></Image>
            <View style={{marginLeft: 20, justifyContent: 'center'}}>
              <Text>All into nothing</Text>
              <Text>Mokiato</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingRight: 10}}>
            <MaterialIcon
              name="skip-previous"
              size={40}
              color="#F57D73"></MaterialIcon>
            <MaterialIcon
              style={{
                backgroundColor: `${isPlay ? '#F57D73' : 'white'}`,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#F57D73',
              }}
              size={40}
              onPress={handlePress}
              name={isPlay ? 'pause' : 'play'}
              color={isPlay ? 'white' : '#F57D73'}></MaterialIcon>
            <MaterialIcon
              name="skip-next"
              size={40}
              color="#F57D73"></MaterialIcon>
          </View>
        </View>
      )}
      {!isMinimize && (
        <PlayMusicFullScreen
          duration={duration}
          playSecond={playSecond}
          setIsMinimize={() => setIsMinimize(true)}></PlayMusicFullScreen>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  modalViewMinimize: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 7,
    bottom: 50,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 60,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalImage: {
    height: 60,
    width: 100,
  },
});
