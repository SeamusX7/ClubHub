import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function ProfileButton({ text, onPress }) {
  return (
    <View onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 0,
    marginTop: 1,
    paddingVertical: 14,
    padding:0,
    borderRadius: 5,
  },
  buttonText: {
    color: '#5386e4',
    fontSize: 16,
    fontFamily: 'montserrat-medium',
    textAlign: 'left',
    marginLeft:20,
  },
})