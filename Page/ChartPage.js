import React from 'react';
import {View, Text, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Chart from '../Component/Chart';
import {createStackNavigator} from '@react-navigation/stack';
import Homepage from './Homepage';
import User from './Homepage';
import {NavigationContainer} from '@react-navigation/native';
import ChartButton from '../Component/ChartButton';

const Stack = createStackNavigator();

export default function ChartPage(props) {
  return (
    <ScrollView style={{flex: 1}}>
      <Text style={{fontSize: 32, fontWeight: 'bold', marginLeft: 10}}>
        Charts
      </Text>
      <Chart title="US-UK"></Chart>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <ChartButton navigation={props.navigation} text="US-UK"></ChartButton>
        <ChartButton navigation={props.navigation} text="VPOP"></ChartButton>
        <ChartButton navigation={props.navigation} text="KPOP"></ChartButton>
        <ChartButton navigation={props.navigation} text="JPOP"></ChartButton>
      </View>
    </ScrollView>
  );
}
