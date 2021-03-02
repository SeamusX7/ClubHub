import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/Home';
import SpecificNewsFeedPost from '../screens/home/SpecificNewsFeedPost';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleStyle: { color: '#0c1821', fontFamily: 'montserrat-medium' }, headerBackTitleVisible: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerLeft: null }} ></HomeStack.Screen>
      <HomeStack.Screen name="SpecificNewsFeedPost" component={SpecificNewsFeedPost} options={{ title: 'Post' }} ></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}