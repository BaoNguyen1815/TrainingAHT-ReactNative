import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';

export default function Comment(props) {
  const replies =
    props.replies && props.replies > 1 ? (
      <View style={{margin: 10}}>
        <Text>See {props.replies} more comments</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 40, height: 40, borderRadius: 20}}
            source={require('../Asset/avatar.jpg')}></Image>
          <Text>Lorem ipsum is a stupid nonverse line word acappela</Text>
        </View>
      </View>
    ) : (
      <View style={{flexDirection: 'row', margin: 10}}>
        <Image
          style={{width: 40, height: 40, borderRadius: 20}}
          source={require('../Asset/avatar.jpg')}></Image>
        <Text>Lorem ipsum is a stupid nonverse line word acappela</Text>
      </View>
    );
  return (
    <SafeAreaView style={{flexDirection: 'row', padding: 10}}>
      <Image
        style={{width: 60, height: 60, borderRadius: 30}}
        source={require('../Asset/avatar.jpg')}></Image>
      <View style={{paddingLeft: 10, paddingRight: 8}}>
        <Text>Peter Parker</Text>
        <Text>
          Lorem ipsum is a stupid nonverse line word acappela is a stupid
          nonverse line word acappela
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '65%',
          }}>
          <Text>5 hours ago</Text>
          <Text>Like</Text>
          <Text>Comment</Text>
        </View>
        {props.replies ? replies : <View></View>}
      </View>
    </SafeAreaView>
  );
}
