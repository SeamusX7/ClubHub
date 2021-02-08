import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function LogoutButton({ text, onPress }) {
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
    backgroundColor: '#E45353',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginLeft:5,
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'montserrat-medium',
    textAlign: 'center',
  }
})