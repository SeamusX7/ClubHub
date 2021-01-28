import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import { firebase } from '../../firebase/config';

// Local File Imports
import FlatButton from '../../components/ModalButton';
import modal_styles from '../../assets/styles/ModalStyle';

export default function NewSessionModal({ closeModal }) {
  return (
    <View>
      <Text style={modal_styles.labelText}>Type</Text>
      <TextInput
        style={modal_styles.modalInput}
        placeholder='Enter session type...' />
        
      <Text style={modal_styles.labelText}>Date</Text>
      <TextInput
        style={modal_styles.modalInput}
        placeholder='Enter date...' />

      <Text style={modal_styles.labelText}>Location</Text>
      <TextInput
        style={modal_styles.modalInput}
        placeholder='Enter location...' />
        
      <Text style={modal_styles.labelText}>Time</Text>
      <TextInput
        style={modal_styles.modalInput}
        placeholder='Enter time...' />

      <FlatButton
        text="Create" />z

    </View>
  )
}