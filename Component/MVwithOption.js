import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SongOptionModal from './Modal/SongOptionModal';

export default function MvwithOption() {
  const [modalVisible, setModalVisible] = useState(false);
  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require('../Asset/music.jpg')}></Image>
        <View>
          <Text style={styles.title}>All into nothing</Text>
          <Text style={styles.artist}>Mokiato</Text>
        </View>
      </View>
      <Icon
        onPress={() => {
          setModalVisible(true);
        }}
        style={{marginRight: 8}}
        name="dots-horizontal"
        color="black"
        size={20}></Icon>

      <SongOptionModal
        hideModal={hideModal}
        modalVisible={modalVisible}></SongOptionModal>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 48,
    marginRight: 8,
    marginLeft: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  artist: {
    color: 'grey',
  },
});
