import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/Home';
import SpecificNewsFeedPost from '../screens/home/SpecificNewsFeedPost';
import SpecificNewsFeedPostTemp1 from '../screens/home/SpecificNewsFeedPostTemp1';
import SpecificNewsFeedPostTemp2 from '../screens/home/SpecificNewsFeedPostTemp2';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleStyle: { color: '#0c1821', fontFamily: 'montserrat-medium' }, headerBackTitleVisible: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerLeft: null }} ></HomeStack.Screen>
      <HomeStack.Screen name="SpecificNewsFeedPost" component={SpecificNewsFeedPost} options={{ title: 'Post' }} ></HomeStack.Screen>
      <HomeStack.Screen name="SpecificNewsFeedPostTemp1" component={SpecificNewsFeedPostTemp1} options={{ title: 'Post' }} ></HomeStack.Screen>
      <HomeStack.Screen name="SpecificNewsFeedPostTemp2" component={SpecificNewsFeedPostTemp2} options={{ title: 'Post' }} ></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}