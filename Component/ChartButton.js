import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

export default function ChartButton(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={props.source ? props.source : require('../Asset/music.jpg')}>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('ChartTab', {
            text: props.text,
            date: 'Week 1-2019',
          });
        }}
        style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 190,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
});
