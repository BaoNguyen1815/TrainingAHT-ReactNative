import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Song from '../Song';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function SongOptionModal(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 360,
            }}>
            <Song></Song>
            <FontAwesome
              name="close"
              size={18}
              color="black"
              onPress={props.hideModal}></FontAwesome>
          </View>

          <View style={styles.textContainer}>
            <FontAwesome
              style={{marginRight: 10}}
              name="heart-o"
              size={18}
              color="black"></FontAwesome>
            <Text style={styles.modalText}>Add to your favourite</Text>
          </View>
          <View style={styles.textContainer}>
            <MaterialIcon
              style={{marginRight: 10}}
              name="playlist-plus"
              size={18}
              color="black"></MaterialIcon>
            <Text style={styles.modalText}>Add to playlist</Text>
          </View>
          <View style={styles.textContainer}>
            <MaterialIcon
              style={{marginRight: 10}}
              name="download"
              size={18}
              color="black"></MaterialIcon>
            <Text style={styles.modalText}>Download</Text>
          </View>
          <View style={styles.textContainer}>
            <MaterialIcon
              style={{marginRight: 10}}
              name="share-variant"
              size={18}
              color="black"></MaterialIcon>
            <Text style={styles.modalText}>Share</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 22,
  },
  modalView: {
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    // alignItems: 'lefr',
    width: 380,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    marginLeft: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  modalText: {
    textAlign: 'left',
  },
});
