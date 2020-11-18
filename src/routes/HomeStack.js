import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/Home';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleStyle: { color: '#333', fontFamily: 'montserrat-semibold' }, headerBackTitleVisible: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerLeft: null }} ></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}