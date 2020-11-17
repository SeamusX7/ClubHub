import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewUpcomingMatchSessionScreen from '../screens/session/ViewUpcomingMatchSession';
import NotificationScreen from '../screens/notification/Notification';
import SettingsStackScreen from '../screens/settings/Settings';

import HomeScreen from '../screens/home/Home';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleStyle: { color: '#333', fontFamily: 'montserrat-semibold' }, headerBackTitleVisible: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerLeft: null }} ></HomeStack.Screen>
      <HomeStack.Screen name="ViewUpcomingMatchSession" component={ViewUpcomingMatchSessionScreen} options={{ title: 'View Upcoming Match Session' }} ></HomeStack.Screen>
      <HomeStack.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notifications', headerLeft: null }} ></HomeStack.Screen>
      <HomeStack.Screen name="Settings" component={SettingsStackScreen} options={{title: 'Settings', headerLeft: null}} ></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}