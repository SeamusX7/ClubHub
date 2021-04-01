import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function Populate({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={populate_button_styles.populate_button}>
        <Text style={populate_button_styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const populate_button_styles = StyleSheet.create({
  populate_button: {
    backgroundColor: '#5386e4',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'montserrat-bold',
    textAlign: 'center',
  }
})