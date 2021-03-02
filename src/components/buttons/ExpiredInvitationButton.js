import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ExpiredInvitationButton(props) {
  return (
    <View onPress={props.onPress} style={expired_invitation_button_styles.expired_invitation_button}>
      <Text style={expired_invitation_button_styles.expired_invitation_button_text}>{props.text}</Text>
    </View>
  )
}

const expired_invitation_button_styles = StyleSheet.create({
  expired_invitation_button: {
    backgroundColor: '#caccd0',
    borderRadius: 8,
    marginRight: 6,
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  expired_invitation_button_text: {
    color: '#fff',
    fontFamily: 'montserrat-semibold',
    fontSize: 12,
  }
})