import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function DeclineInvitationButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={decline_invitation_button_styles.decline_invitation_button}>
      <Text style={decline_invitation_button_styles.decline_invitation_button_text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const decline_invitation_button_styles = StyleSheet.create({
  decline_invitation_button: {
    backgroundColor: '#e45353',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  decline_invitation_button_text: {
    color: '#fff',
    fontFamily: 'montserrat-semibold',
    fontSize: 12,
  }
})