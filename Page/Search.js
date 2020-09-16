import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import SearchResult from '../Component/SearchResult';
export default function Search(props) {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesome
          onPress={() => props.navigation.goBack()}
          name="chevron-left"
          size={18}
          color="black"></FontAwesome>
        <View style={styles.searchBox}>
          <FontAwesome name="search" size={18} color="grey"></FontAwesome>
          <TextInput
            style={{
              width: '90%',
              height: 40,
              padding: 8,
            }}
            placeholder="Search for"
          />
          <FontAwesome name="close" size={18} color="black"></FontAwesome>
        </View>
      </View>
      <ScrollableTabView
        style={{position: 'relative'}}
        tabBarActiveTextColor="black"
        tabBarInactiveTextColor="grey"
        tabBarTextStyle={{fontSize: 16}}
        tabBarUnderlineStyle={{backgroundColor: '#000'}}
        // tabBarPosition="overlayTop"
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar style={{zIndex: 5}} />}>
        <SearchResult tabLabel="All"></SearchResult>
        <SearchResult title="Song" tabLabel="Song"></SearchResult>
        <SearchResult title="Artist" tabLabel="Artist"></SearchResult>
        <SearchResult title="Playlist" tabLabel="Playlist"></SearchResult>
        <SearchResult title="MV" tabLabel="MV"></SearchResult>
      </ScrollableTabView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    padding: 9,
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    marginLeft: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
});
