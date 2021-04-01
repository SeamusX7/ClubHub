import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function DateTimeButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={date_time_button_styles.button}>
        <Text style={date_time_button_styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const date_time_button_styles = StyleSheet.create({
  button: {
    backgroundColor: '#f0f2f7',
    borderRadius: 8,
    fontFamily: 'montserrat-regular',
    paddingHorizontal: 19,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#91999e',
    fontSize: 14,
    fontFamily: 'montserrat-regular',
  }
})