import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import Video from '../Component/Video';
import Slider from '../Component/Slider';
import NewCreation from '../Component/NewCreation';
export default class Homepage extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.header}>
            <View>
              <Text style={styles.text}>Music</Text>
            </View>
            <View style={{padding: 4}}>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('Search')}>
                <Image source={require('../Asset/Icon/search.png')}></Image>
              </TouchableHighlight>
            </View>
          </View>
          <Video></Video>
          <Slider text="Poppular Album"></Slider>
          <NewCreation></NewCreation>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
});
