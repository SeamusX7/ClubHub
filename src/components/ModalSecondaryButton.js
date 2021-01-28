import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButtonSecondary({ text, onPress }) {
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
    backgroundColor: '#DCD9DC',
    borderRadius: 5,
    marginBottom: -20,
    paddingHorizontal: 8,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#5B5B65',
    fontSize: 16,
    fontFamily: 'montserrat-bold',
    textAlign: 'center',
  }
})