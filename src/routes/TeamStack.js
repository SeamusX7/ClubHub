import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TeamScreen from '../screens/team/Team';

const TeamStack = createStackNavigator();

export default function TeamStackScreen() {
  return (
    <TeamStack.Navigator screenOptions={{ headerTitleStyle: { color: '#333', fontFamily: 'montserrat-semibold' }, headerBackTitleVisible: false }}>
      <TeamStack.Screen name="Team" component={TeamScreen} options={{ title: 'Teams', headerLeft: null }} ></TeamStack.Screen>
    </TeamStack.Navigator>
  )
}