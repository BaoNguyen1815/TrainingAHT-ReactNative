import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  FlatList,
  TouchableHighlight,
  ScrollView,
} from 'react-native-gesture-handler';
import Song from './Song';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SongwithOptions from './SongwithOptions';
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function Chart(props) {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontWeight: 'bold', margin: 10}}>{props.title} chart</Text>
      <View style={{flex: 2}}>
        <FlatList
          style={{flex: 1, height: 400}}
          data={arr}
          initialNumToRender={6}
          keyExtractor={(item) => item.toString()}
          renderItem={(item, index) => {
            return <SongwithOptions item={item.item}></SongwithOptions>;
          }}></FlatList>
        <Text
          style={{
            textAlign: 'center',
            margin: 4,
            display: props.displayViewAll ? 'none' : 'flex',
          }}>
          View all
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 150,
  },
});
