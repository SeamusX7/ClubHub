import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

// Local File Imports
import notification_styles from '../assets/styles/NotificationStyle';

export default function NotiCard(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={notification_styles.card2}>
        <View style={styles.cardContent}>
          {props.children}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContent: {
    marginHorizontal: 20,
    marginVertical: 16,
  }
})
