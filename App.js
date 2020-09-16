/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Homepage from './Page/Homepage';
import Login from './Page/Login';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import User from './Page/User';
import Discovery from './Page/Discovery';
import Chart from './Page/ChartPage';
import ChartTab from './Page/ChartTab';
import MV from './Page/MV';
import ChartTabPage from './Page/ChartTabPage';
import Search from './Page/Search';
import SplashScreen from 'react-native-splash-screen';
import {create} from 'react-test-renderer';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function ChartPageNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ChartPage" component={Chart} />
      <Stack.Screen name="ChartTab" component={ChartTab} />
    </Stack.Navigator>
  );
}

function LoginNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={false}
        activeColor="#e91e63"
        barStyle={{backgroundColor: '#fff'}}>
        <Tab.Screen
          name="mv"
          component={MV}
          options={{
            tabBarIcon: () => (
              <Icon name="television-play" color="black" size={26} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="User"
          component={LoginNavigator}
          options={{
            tabBarIcon: () => (
              <FontAwsomeIcon name="user" color="black" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="chart"
          component={ChartPageNavigator}
          options={{
            tabBarIcon: () => (
              <FontAwsomeIcon name="bar-chart" color="black" size={26} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: () => (
              <FontAwsomeIcon name="home" color="black" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="discovey"
          component={Discovery}
          options={{
            tabBarIcon: () => (
              <FontAwsomeIcon name="dot-circle-o" color="black" size={26} />
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
