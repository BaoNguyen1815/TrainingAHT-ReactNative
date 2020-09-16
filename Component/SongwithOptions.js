import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Song from './Song';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SongOptionModal from './Modal/SongOptionModal';
export default function SongwithOptions(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{marginLeft: 8}}>
          {props.item < 10 ? `0${props.item}` : props.item}
        </Text>
        <Song></Song>
      </View>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="video-outline" size={24}></Icon>
          <Icon
            onPress={() => setModalVisible(true)}
            name="dots-horizontal"
            size={24}></Icon>
        </View>
      </View>
      <SongOptionModal
        hideModal={hideModal}
        modalVisible={modalVisible}></SongOptionModal>
    </View>
  );
}
