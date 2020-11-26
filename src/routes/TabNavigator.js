import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local file imports
import HomeStackScreen from '../routes/HomeStack';
import TeamStackScreen from '../routes/TeamStack';
import SessionStackScreen from '../routes/SessionStack';
import NotificationStackScreen from '../routes/NotificationStack';
import SettingsStackScreen from '../routes/SettingsStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'md-home'
              : 'md-home';
          } else if (route.name === 'Team') {
            iconName = focused 
              ? 'md-people'
              : 'md-people';
          } else if (route.name === 'Session') {
            iconName = focused 
              ? 'md-calendar'
              : 'md-calendar';
          } else if (route.name === 'Notification') {
            iconName = focused 
              ? 'md-notifications'
              : 'md-notifications';
          } else if (route.name === 'Settings') {
            iconName = focused 
              ? 'md-menu'
              : 'md-menu';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5386e4',
        inactiveTintColor: '#b7b7b7',
        showLabel: false,
        tabStyle: {
          borderRadius: 8,
        },
        style: {
          borderTopWidth: 0,
          elevation: 12,
          shadowColor: "#000",
          shadowOffset: {
            height: 6,
            width: 0,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
        },
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Team" component={TeamStackScreen} />
      <Tab.Screen name="Session" component={SessionStackScreen} />
      <Tab.Screen name="Notification" component={NotificationStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  )
}