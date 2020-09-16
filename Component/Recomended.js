import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MvwithOption from './MVwithOption';

export default function Recomended() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Autoplay</Text>
        <Switch
          trackColor={{false: '#767577', true: '#F4796E'}}
          thumbColor="#F4796E"
          onValueChange={toggleSwitch}
          value={isEnabled}></Switch>
      </View>
      <MvwithOption></MvwithOption>
      <MvwithOption></MvwithOption>
      <MvwithOption></MvwithOption>
      <MvwithOption></MvwithOption>
      <MvwithOption></MvwithOption>
      <MvwithOption></MvwithOption>
    </ScrollView>
  );
}
