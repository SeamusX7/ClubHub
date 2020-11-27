import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function SearchButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    width: 46,
    height: 46,
    borderRadius: 8,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
})