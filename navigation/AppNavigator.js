import React, {useState, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  Linking,
  Alert,
  Share,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UserDetails from '../screens/UserDetails';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

export const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'HomeScreen'}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
