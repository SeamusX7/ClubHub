import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FlatButton({ text, onPress }) {
  return (
    <View onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#B7B7B7',
    fontSize: 12,
    fontFamily: 'montserrat-medium',
    marginLeft: 10,
  }
})