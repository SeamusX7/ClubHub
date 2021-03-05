import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={custom_button_styles.custom_button}>
        <Text style={custom_button_styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const custom_button_styles = StyleSheet.create({
  custom_button: {
    backgroundColor: '#5386e4',
    borderRadius: 8,
    // marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'montserrat-bold',
    textAlign: 'center',
  }
})