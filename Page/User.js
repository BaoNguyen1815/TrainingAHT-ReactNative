import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Login';
import {TouchableHighlight, ScrollView} from 'react-native-gesture-handler';
import Library from '../Component/Library';
import Playlist from '../Component/Playlist';
import LinearGradient from 'react-native-linear-gradient';

export default class User extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 32, fontWeight: 'bold', margin: 10}}>
            My Music
          </Text>
          <Icon
            style={{margin: 10, marginTop: 16}}
            name="cogs"
            size={32}
            color="#F57D73"></Icon>
        </View>
        <LinearGradient colors={['#F57D73', '#F5BB8C']}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              // justifyContent: 'center',
            }}>
            <Image source={require('../Asset/Icon/guest.png')}></Image>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 30,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {this.props.route.params
                  ? this.props.route.params.user
                  : 'Guest'}
              </Text>
              <Text
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}
                style={{color: 'white'}}>
                {this.props.route.params ? '' : 'Login/Sign up'}
              </Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView style={{flex: 1}}>
          <Library></Library>
          <Playlist></Playlist>
        </ScrollView>
      </View>
    );
  }
}
