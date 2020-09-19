import React from 'react';
import {View, Text, SectionList} from 'react-native';
import Song from './Song';
import ArtistPotrait from './ArtistPotrait';

const DATA = [
  {
    title: 'Song',
    data: [1, 2, 3],
  },
  {
    title: 'Playlist',
    data: [1, 2, 3],
  },
  {
    title: 'Artist',
    data: [0, 0, 0],
  },
  {
    title: 'MV',
    data: [1, 2],
  },
];
export default function SearchResult(props) {
  const arr = DATA.filter((item) => item.title == props.title);
  return (
    <View>
      <SectionList
        sections={props.title ? arr : DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) =>
          item == 0 ? (
            <ArtistPotrait></ArtistPotrait>
          ) : (
            <Song
              setIsVisible={props.setIsVisible}
              isPlay={props.isPlay}
              isVisible={props.isVisible}></Song>
          )
        }
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'grey'}}>
            {title}
          </Text>
        )}
      />
    </View>
  );
}
