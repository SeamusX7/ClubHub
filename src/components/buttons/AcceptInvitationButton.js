import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function AcceptInvitationButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={accept_invitation_button_styles.accept_invitation_button}>
      <Text style={accept_invitation_button_styles.accept_invitation_button_text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const accept_invitation_button_styles = StyleSheet.create({
  accept_invitation_button: {
    backgroundColor: '#72e453',
    borderRadius: 8,
    marginRight: 6,
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  accept_invitation_button_text: {
    color: '#fff',
    fontFamily: 'montserrat-semibold',
    fontSize: 12,
  }
})