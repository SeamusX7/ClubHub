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
    <SessionStack.Navigator screenOptions={{ headerTitleStyle: { color: '#333', fontFamily: 'montserrat-semibold' }, headerBackTitleVisible: false }}>
      <SessionStack.Screen name="Session" component={SessionScreen} options={{ title: 'Sessions', headerLeft: null }} ></SessionStack.Screen>
      <SessionStack.Screen name="PreviousMatchSessions" component={PreviousMatchSessionsScreen} options={{ title: 'Previous Match Sessions' }} ></SessionStack.Screen>
      <SessionStack.Screen name="PreviousTrainingSessions" component={PreviousTrainingSessionsScreen} options={{ title: 'Previous Training Sessions' }} ></SessionStack.Screen>
      <SessionStack.Screen name="PreviousGymSessions" component={PreviousGymSessionsScreen} options={{ title: 'Previous Gym Sessions' }} ></SessionStack.Screen>
      <SessionStack.Screen name="ViewUpcomingMatchSession" component={ViewUpcomingMatchSessionScreen} options={{ title: 'View Upcoming Match Session' }} ></SessionStack.Screen>
      <SessionStack.Screen name="ViewPreviousMatchSession" component={ViewPreviousMatchSessionScreen} options={{ title: 'View Previous Match Session' }} ></SessionStack.Screen>
      <SessionStack.Screen name="ViewPreviousTrainingSession" component={ViewPreviousTrainingSessionScreen} options={{ title: 'View Previous Training Session' }} ></SessionStack.Screen>
      <SessionStack.Screen name="ViewPreviousGymSession" component={ViewPreviousGymSessionScreen} options={{ title: 'View Previous Gym Session' }} ></SessionStack.Screen>
    </SessionStack.Navigator>
  )
}