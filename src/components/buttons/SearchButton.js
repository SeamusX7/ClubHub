import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function SearchButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={search_button_styles.button}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}

const search_button_styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 8,
    height: 46,
    justifyContent: 'center',
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0, },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    width: 46,
  }, 
})