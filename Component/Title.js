import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

export default function Title(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.text}</Text>
      <TouchableHighlight>
        <Text style={styles.seeMore}>See more {'>'}</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  seeMore: {
    color: 'grey',
  },
});
