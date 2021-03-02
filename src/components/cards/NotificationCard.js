import React from 'react';
import { View } from 'react-native';

import notification_styles from '../../assets/styles/NotificationCardStyle';

export default function NotificationCard(props) {
  return (
    <View onPress={props.onPress} style={notification_styles.notification_card}>
      {props.children}
    </View>
  )
}