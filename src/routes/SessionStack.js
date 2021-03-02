import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SessionScreen from '../screens/session/Session';
import PreviousMatchSessionsScreen from '../screens/session/PreviousMatchSessions';
import PreviousTrainingSessionsScreen from '../screens/session/PreviousTrainingSessions';
import PreviousGymSessionsScreen from '../screens/session/PreviousGymSessions';
import ViewUpcomingMatchSessionScreen from '../screens/session/ViewUpcomingMatchSession';
import ViewPreviousMatchSessionScreen from '../screens/session/ViewPreviousMatchSession';
import ViewPreviousTrainingSessionScreen from '../screens/session/ViewPreviousTrainingSession';
import ViewPreviousGymSessionScreen from '../screens/session/ViewPreviousGymSession';

const SessionStack = createStackNavigator();

export default function SessionStackScreen() {
  return (
    <SessionStack.Navigator screenOptions={{ headerTitleStyle: { color: '#0c1821', fontFamily: 'montserrat-medium' }, headerBackTitleVisible: false }}>
      <SessionStack.Screen name="Session" component={SessionScreen} options={{ title: 'Sessions', headerLeft: null }} ></SessionStack.Screen>
      <SessionStack.Screen name="PreviousMatchSessions" component={PreviousMatchSessionsScreen} options={{ title: 'Matches' }} ></SessionStack.Screen>
      <SessionStack.Screen name="PreviousTrainingSessions" component={PreviousTrainingSessionsScreen} options={{ title: 'Training' }} ></SessionStack.Screen>
      <SessionStack.Screen name="PreviousGymSessions" component={PreviousGymSessionsScreen} options={{ title: 'Gym' }} ></SessionStack.Screen>
      <SessionStack.Screen name="ViewUpcomingMatchSession" component={ViewUpcomingMatchSessionScreen} options={{ title: 'Match' }} ></SessionStack.Screen>
      <SessionStack.Screen name="ViewPreviousMatchSession" component={ViewPreviousMatchSessionScreen} options={{ title: 'Match' }} ></SessionStack.Screen>
      <SessionStack.Screen name="ViewPreviousTrainingSession" component={ViewPreviousTrainingSessionScreen} options={{ title: 'Training' }} ></SessionStack.Screen>
      <SessionStack.Screen name="ViewPreviousGymSession" component={ViewPreviousGymSessionScreen} options={{ title: 'Gym' }} ></SessionStack.Screen>
    </SessionStack.Navigator>
  )
}