import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function SettingsButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 0,
    marginTop: 1,
    paddingHorizontal: 8,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#333333',
    fontSize: 16,
    fontFamily: 'montserrat-medium',
    textAlign: 'left',
    marginLeft:20,
  }
})