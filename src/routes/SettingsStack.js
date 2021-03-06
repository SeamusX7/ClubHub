import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/settings/Settings';
import ProfileScreen from '../screens/settings/Profile';
import ClubHubPlusScreen from '../screens/settings/ClubHubPlus';
import LanguageScreen from '../screens/settings/Language';
import TermsOfServiceScreen from '../screens/settings/TermsOfService';
import PrivacyPolicyScreen from '../screens/settings/PrivacyPolicy';
const SettingsStack = createStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerTitleStyle: { color: '#0c1821', fontFamily: 'montserrat-medium' }, headerBackTitleVisible: false }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings', headerLeft: null }} ></SettingsStack.Screen>
      <SettingsStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} ></SettingsStack.Screen>
      <SettingsStack.Screen name="ClubHubPlus" component={ClubHubPlusScreen} options={{ title: 'ClubHubPlus' }} ></SettingsStack.Screen>
      <SettingsStack.Screen name="Language" component={LanguageScreen} options={{ title: 'Language' }} ></SettingsStack.Screen>
      <SettingsStack.Screen name="TermsOfService" component={TermsOfServiceScreen} options={{ title: 'Terms Of Service' }} ></SettingsStack.Screen>
      <SettingsStack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{ title: 'Privacy Policy' }} ></SettingsStack.Screen>
    </SettingsStack.Navigator>
  )
}