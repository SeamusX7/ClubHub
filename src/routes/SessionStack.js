import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SessionScreen from '../screens/session/Session';

const SessionStack = createStackNavigator();

export default function SessionStackScreen() {
  return (
    <SessionStack.Navigator screenOptions={{ headerTitleStyle: { color: '#333', fontFamily: 'montserrat-semibold' }, headerBackTitleVisible: false  }}>
      <SessionStack.Screen name="Session" component={SessionScreen} options={{ title: 'Sessions', headerLeft: null }} ></SessionStack.Screen>
    </SessionStack.Navigator>
  )
}