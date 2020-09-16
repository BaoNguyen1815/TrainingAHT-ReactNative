import React from 'react';
import {View, Text} from 'react-native';
import Song from './Song';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
export default function Playlist() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text style={{fontSize: 18}}>Your Playlist</Text>
        <FontAwesome name="plus" size={18} color="#f57d73"></FontAwesome>
      </View>
      <Song></Song>
      <Song></Song>
      <Song></Song>
      <Song></Song>
    </View>
  );
}
