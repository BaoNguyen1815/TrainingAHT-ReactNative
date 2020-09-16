import React from 'react';
import {View, Text} from 'react-native';
import {color} from 'react-native-reanimated';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';

import ChartTabPage from './ChartTabPage';

export default function ChartTab(props) {
  return (
    <ScrollableTabView
      style={{position: 'relative'}}
      tabBarActiveTextColor="white"
      tabBarInactiveTextColor="grey"
      tabBarTextStyle={{fontSize: 16}}
      tabBarUnderlineStyle={{backgroundColor: '#fff'}}
      // tabBarPosition="overlayTop"
      initialPage={0}
      renderTabBar={() => (
        <ScrollableTabBar style={{top: 150, position: 'absolute', zIndex: 5}} />
      )}>
      <ChartTabPage
        navigation={props.navigation}
        source={require('../Asset/music2.jpg')}
        title={props.route.params.text}
        date={props.route.params.date}
        tabLabel="MV"></ChartTabPage>
      <ChartTabPage
        navigation={props.navigation}
        source={require('../Asset/music.jpg')}
        title={props.route.params.text}
        date={props.route.params.date}
        tabLabel="Songs"></ChartTabPage>
      <ChartTabPage
        navigation={props.navigation}
        source={require('../Asset/music2.jpg')}
        title={props.route.params.text}
        date={props.route.params.date}
        tabLabel="Albums"></ChartTabPage>
    </ScrollableTabView>
  );
}
