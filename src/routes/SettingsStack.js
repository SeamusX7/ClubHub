import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/settings/Settings';

const SettingsStack = createStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerTitleStyle: { color: '#333', fontFamily: 'montserrat-semibold' }, headerBackTitleVisible: false }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings', headerLeft: null }} ></SettingsStack.Screen>
    </SettingsStack.Navigator>
  )
}