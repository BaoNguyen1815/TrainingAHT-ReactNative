import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              'https://images.unsplash.com/photo-1594273176487-4ccb414b7224?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          }}
          style={{width: '100%', height: 300, marginBottom: 50}}>
          <View style={styles.flex1}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                width: 330,
                marginBottom: 40,
              }}>
              <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
                Login
              </Text>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                X
              </Text>
            </View>
            <Image
              style={{width: 160, height: 160}}
              source={require('../Asset/logo.png')}></Image>
            <Text style={styles.meMusic}>MeMusic</Text>
          </View>
        </ImageBackground>
        <View style={styles.flex2}>
          <Text
            onPress={() => {
              this.props.navigation.navigate('User', {
                user: 'Nguyen',
              });
            }}
            style={styles.mail}>
            Login with mail
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 12,
            }}>
            <View style={styles.or}></View>
            <Text>Or</Text>
            <View style={styles.or}></View>
          </View>
          <Text style={styles.fb}>Facebook </Text>
          <Text style={styles.gmail}>Google</Text>
          <Text
            style={{
              textAlign: 'left',
            }}>
            Do you have an account?{' '}
            <Text style={{textDecorationLine: 'underline'}}>Registration</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mail: {
    padding: 12,
    backgroundColor: 'orange',
    borderRadius: 24,
    textAlign: 'center',
    marginBottom: 12,
    width: 300,
  },
  fb: {
    padding: 12,
    backgroundColor: '#4267B2',
    borderRadius: 24,
    textAlign: 'center',
    marginBottom: 12,

    width: 300,
  },
  gmail: {
    padding: 12,
    backgroundColor: '#D54C3F',
    borderRadius: 24,
    textAlign: 'center',
    marginBottom: 12,

    width: 300,
  },
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  flex1: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flex2: {
    flex: 2,
  },
  meMusic: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  or: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 120,
  },
});
