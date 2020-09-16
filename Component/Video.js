import React from 'react';
import Video from 'react-native-video';
import {View, Text, StyleSheet} from 'react-native';

export default function VideoComponent() {
  return (
    <View>
      <Video
        controls
        source={require('../homevideo.mp4')} // Can be a URL or a local file.
        style={styles.backgroundVideo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: 200,
  },
});
