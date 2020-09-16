import React from 'react';
import {View, Text} from 'react-native';
import Comment from './Comment';
export default function ListComment() {
  return (
    <View>
      <Comment></Comment>
      <Comment replies={2}></Comment>
      <Comment replies={1}></Comment>
      <Comment></Comment>
      <Comment replies={1}></Comment>
      <Comment replies={2}></Comment>
    </View>
  );
}
