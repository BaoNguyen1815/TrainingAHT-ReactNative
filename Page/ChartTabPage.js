import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Chart from '../Component/Chart';

export default function ChartTabPage(props) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={props.source}
        style={{width: '100%', height: 200}}>
        <View
          style={{
            height: 200,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}>
          <View style={{marginTop: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableHighlight onPress={() => props.navigation.goBack()}>
                <FontAwesomeIcon
                  style={styles.icon}
                  name="chevron-left"
                  color="white"
                  size={18}></FontAwesomeIcon>
              </TouchableHighlight>
              <View style={{flexDirection: 'row'}}>
                <TouchableHighlight>
                  <FontAwesomeIcon
                    style={styles.icon}
                    name="search"
                    color="white"
                    size={18}></FontAwesomeIcon>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Icon
                    style={styles.icon}
                    name="dots-horizontal"
                    color="white"
                    size={20}></Icon>
                </TouchableHighlight>
              </View>
            </View>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#fff',
              }}>
              {props.title}
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                width: 200,
                padding: 12,
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#fff',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 5,
              }}>
              {props.date}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View></View>
      <Chart displayViewAll="none" title="US-UK"></Chart>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    color: 'white',
    fontSize: 18,
  },
  icon: {
    margin: 8,
  },
});
