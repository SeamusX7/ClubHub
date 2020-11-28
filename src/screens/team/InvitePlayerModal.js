import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import { firebase } from '../../firebase/config';

// Local File Imports
import FlatButton from '../../components/ModalButton';
import modal_styles from '../../assets/styles/ModalStyle';

export default function InvitePlayerModal({ closeModal }) {
  return (
    <View>
      <Text style={modal_styles.labelText}>Email</Text>
      <TextInput
        style={modal_styles.modalInput}
        placeholder='Enter email address...'
        keyboardType="email-address" />
        
      <Text style={modal_styles.labelText}>Date of Birth</Text>
      <TextInput
        style={modal_styles.modalInput}
        placeholder='Enter date of birth...' />

      <FlatButton
        text="Invite" />

    </View>
  )
}