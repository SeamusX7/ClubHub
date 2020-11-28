import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import message_styles from '../assets/styles/MessageStyle';

export default function SelectMessage(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={message_styles.button}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})