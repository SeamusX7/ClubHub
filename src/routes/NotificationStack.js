import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NotificationScreen from '../screens/notification/Notification';

const NotificationStack = createStackNavigator();

export default function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator screenOptions={{ headerTitleStyle: { color: '#0c1821', fontFamily: 'montserrat-medium' }, headerBackTitleVisible: false }}>
      <NotificationStack.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notifications', headerLeft: null }} ></NotificationStack.Screen>
    </NotificationStack.Navigator>
  )
}