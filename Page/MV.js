import React from 'react';
import {View, Text} from 'react-native';
import VideoComponent from '../Component/Video';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import Recomended from '../Component/Recomended';
import ListComment from '../Component/ListComment';
import {ScrollView} from 'react-native-gesture-handler';

export default function MV(props) {
  return (
    <View style={{flex: 1}}>
      <VideoComponent></VideoComponent>
      <View style={{padding: 18}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 8}}>
          {props.title ? props.title : 'La la la'}
        </Text>
        <Text style={{color: 'grey'}}>
          {props.artist ? props.artist : 'Naughty Boy ft Sam Smith'}
        </Text>
      </View>
      <ScrollableTabView
        style={{position: 'relative'}}
        tabBarActiveTextColor="black"
        tabBarInactiveTextColor="grey"
        tabBarTextStyle={{fontSize: 16}}
        tabBarUnderlineStyle={{backgroundColor: '#F4796E'}}
        // tabBarPosition="overlayTop"
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar style={{zIndex: 5}} />}>
        <Recomended tabLabel="Recommended"></Recomended>
        <ScrollView tabLabel="Comment">
          <ListComment></ListComment>
        </ScrollView>
        <Recomended tabLabel="Info">Clo</Recomended>
      </ScrollableTabView>
    </View>
  );
}
