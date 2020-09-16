import React from 'react';
import {View, Text} from 'react-native';
import Title from './Title';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableHighlight} from 'react-native-gesture-handler';

export default function Library() {
  return (
    <View>
      <Title text="Library"></Title>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon size={18} name="musical-notes"></Icon>
          <Text style={{fontSize: 14, marginLeft: 10}}>All Songs</Text>
        </View>
        <Text>{'>'}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon size={18} name="md-download-outline"></Icon>
          <Text style={{fontSize: 14, marginLeft: 10}}>All Songs</Text>
        </View>
        <Text>{'>'}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome size={18} name="history"></FontAwesome>
          <Text style={{fontSize: 14, marginLeft: 10}}>All Songs</Text>
        </View>
        <Text>{'>'}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <MaterialIcon size={18} name="playlist-music"></MaterialIcon>
          <Text style={{fontSize: 14, marginLeft: 10}}>All Songs</Text>
        </View>
        <Text>{'>'}</Text>
      </View>
    </View>
  );
}
