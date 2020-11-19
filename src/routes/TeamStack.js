import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TeamScreen from '../screens/team/Team';
import PlayerScreen from '../screens/team/Player'
import MessageScreen from '../screens/team/Message'
import ViewMessageScreen from '../screens/team/ViewMessage'

const TeamStack = createStackNavigator();


export default function TeamStackScreen() {
  return (
      <TeamStack.Navigator screenOptions={{ headerTitleStyle: { color: '#333', fontFamily: 'montserrat-semibold' }, headerBackTitleVisible: false }}>
        <TeamStack.Screen name="Team" component={TeamScreen} options={{ title: 'Teams', headerLeft: null }} ></TeamStack.Screen>
        <TeamStack.Screen name="Player" component={PlayerScreen} options={{ title: 'Player Name' }} ></TeamStack.Screen>
        <TeamStack.Screen name="Message" component={MessageScreen} options={{ title: 'Message' }} ></TeamStack.Screen>
        <TeamStack.Screen name="ViewMessage" component={ViewMessageScreen} options={{ title: 'View Message' }} ></TeamStack.Screen>
      </TeamStack.Navigator>
  )
}