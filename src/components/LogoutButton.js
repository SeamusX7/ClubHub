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
    backgroundColor: '#fff',
    borderRadius: 0,
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 14,
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'montserrat-medium',
    textAlign: 'center',
    marginLeft:20,
  }
})